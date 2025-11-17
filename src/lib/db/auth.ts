import bcrypt from 'bcryptjs'
import { Pool } from 'pg'
import Database from 'better-sqlite3'
import path from 'path'
import { ensureDatabaseInitialized } from './database'

export interface AdminUser {
  id?: number
  username: string
  email: string
  password_hash?: string
  created_at?: string
}

type AdminUserRecord = AdminUser & { password_hash?: string }

const DEFAULT_ADMIN_USERNAME = process.env.ADMIN_DEFAULT_USERNAME || 'ryan'
const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_DEFAULT_EMAIL || 'Ryan@Cable-ComServices.com'
const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_DEFAULT_PASSWORD || 'SecurePassword22!'

// Determine which database to use
const isProduction = process.env.DATABASE_URL !== undefined

// PostgreSQL pool (reuse from database.ts pattern)
let pool: Pool | null = null
function getPostgresPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL?.includes('localhost') ? false : { rejectUnauthorized: false }
    })
  }
  return pool
}

// SQLite connection
let sqliteDb: Database.Database | null = null
function getSQLiteDB() {
  if (!sqliteDb) {
    const fs = require('fs')
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    const dbPath = path.join(dataDir, 'cable-com.db')
    sqliteDb = new Database(dbPath)
    initializeSQLiteAdminSchema()
  }
  return sqliteDb
}

function initializeSQLiteAdminSchema() {
  if (!sqliteDb) return

  sqliteDb.exec(`
    CREATE TABLE IF NOT EXISTS cablecom_admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      email TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)
}

export async function createAdminUser(username: string, password: string, email: string): Promise<number> {
  const sanitizedUsername = username.trim()
  const sanitizedEmail = email.trim()
  const passwordHash = await bcrypt.hash(password, 10)

  await ensureDatabaseInitialized()

  if (isProduction) {
    const pool = getPostgresPool()
    const result = await pool.query(
      'INSERT INTO cablecom_admin_users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING id',
      [sanitizedUsername, passwordHash, sanitizedEmail]
    )
    return result.rows[0].id
  } else {
    const db = getSQLiteDB()
    const stmt = db.prepare('INSERT INTO cablecom_admin_users (username, password_hash, email) VALUES (?, ?, ?)')
    const result = stmt.run(sanitizedUsername, passwordHash, sanitizedEmail)
    return result.lastInsertRowid as number
  }
}

export async function verifyAdminCredentials(username: string, password: string): Promise<AdminUser | null> {
  const identifier = username.trim()
  const normalizedIdentifier = identifier.toLowerCase()
  let user: AdminUserRecord | undefined

  await ensureDatabaseInitialized()

  if (isProduction) {
    const pool = getPostgresPool()
    const result = await pool.query(
      'SELECT * FROM cablecom_admin_users WHERE LOWER(username) = $1 OR LOWER(email) = $1 LIMIT 1',
      [normalizedIdentifier]
    )
    user = result.rows[0]
  } else {
    const db = getSQLiteDB()
    const stmt = db.prepare(
      'SELECT * FROM cablecom_admin_users WHERE LOWER(username) = ? OR LOWER(email) = ? LIMIT 1'
    )
    user = stmt.get(normalizedIdentifier, normalizedIdentifier) as AdminUserRecord | undefined
  }

  if (!user || !user.password_hash) {
    return null
  }

  const isValid = await bcrypt.compare(password, user.password_hash)
  if (!isValid) {
    return null
  }

  // Remove password hash from returned object
  const { password_hash, ...userWithoutPassword } = user
  return userWithoutPassword
}

export async function getAdminUser(username: string): Promise<AdminUser | null> {
  await ensureDatabaseInitialized()

  if (isProduction) {
    const pool = getPostgresPool()
    const result = await pool.query(
      'SELECT id, username, email, created_at FROM cablecom_admin_users WHERE username = $1',
      [username]
    )
    return result.rows[0] || null
  } else {
    const db = getSQLiteDB()
    const stmt = db.prepare('SELECT id, username, email, created_at FROM cablecom_admin_users WHERE username = ?')
    return (stmt.get(username) as AdminUser) || null
  }
}

export async function ensureDefaultAdmin() {
  await ensureDatabaseInitialized()

  const desiredUsername = DEFAULT_ADMIN_USERNAME
  const desiredEmail = DEFAULT_ADMIN_EMAIL
  const normalizedUsername = desiredUsername.trim().toLowerCase()
  const normalizedEmail = desiredEmail.trim().toLowerCase()

  let existingUser: AdminUserRecord | undefined

  if (isProduction) {
    const pool = getPostgresPool()
    const result = await pool.query(
      'SELECT * FROM cablecom_admin_users WHERE LOWER(username) = $1 OR LOWER(email) = $2 LIMIT 1',
      [normalizedUsername, normalizedEmail]
    )
    existingUser = result.rows[0]
  } else {
    const db = getSQLiteDB()
    const stmt = db.prepare(
      'SELECT * FROM cablecom_admin_users WHERE LOWER(username) = ? OR LOWER(email) = ? LIMIT 1'
    )
    existingUser = stmt.get(normalizedUsername, normalizedEmail) as AdminUserRecord | undefined
  }

  if (!existingUser) {
    await createAdminUser(desiredUsername, DEFAULT_ADMIN_PASSWORD, desiredEmail)
    console.log('✓ Default admin user created')
    console.log(`  Email: ${desiredEmail}`)
    console.log(`  Username: ${desiredUsername}`)
    return
  }

  const needsUsernameUpdate = existingUser.username !== desiredUsername
  const needsEmailUpdate = existingUser.email !== desiredEmail
  const passwordMatches = existingUser.password_hash
    ? await bcrypt.compare(DEFAULT_ADMIN_PASSWORD, existingUser.password_hash)
    : false

  if (needsUsernameUpdate || needsEmailUpdate || !passwordMatches) {
    const passwordHash = passwordMatches && existingUser.password_hash
      ? existingUser.password_hash
      : await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 10)

    if (isProduction) {
      const pool = getPostgresPool()
      await pool.query(
        'UPDATE cablecom_admin_users SET username = $1, email = $2, password_hash = $3 WHERE id = $4',
        [desiredUsername, desiredEmail, passwordHash, existingUser.id]
      )
    } else {
      const db = getSQLiteDB()
      const stmt = db.prepare('UPDATE cablecom_admin_users SET username = ?, email = ?, password_hash = ? WHERE id = ?')
      stmt.run(desiredUsername, desiredEmail, passwordHash, existingUser.id)
    }

    console.log('✓ Default admin credentials synchronized')
  }
}
