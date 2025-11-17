import bcrypt from 'bcryptjs'
import { Pool } from 'pg'
import Database from 'better-sqlite3'
import path from 'path'

export interface AdminUser {
  id?: number
  username: string
  email: string
  password_hash?: string
  created_at?: string
}

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
  }
  return sqliteDb
}

export async function createAdminUser(username: string, password: string, email: string): Promise<number> {
  const passwordHash = await bcrypt.hash(password, 10)

  if (isProduction) {
    const pool = getPostgresPool()
    const result = await pool.query(
      'INSERT INTO cablecom_admin_users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING id',
      [username, passwordHash, email]
    )
    return result.rows[0].id
  } else {
    const db = getSQLiteDB()
    const stmt = db.prepare('INSERT INTO cablecom_admin_users (username, password_hash, email) VALUES (?, ?, ?)')
    const result = stmt.run(username, passwordHash, email)
    return result.lastInsertRowid as number
  }
}

export async function verifyAdminCredentials(username: string, password: string): Promise<AdminUser | null> {
  let user: AdminUser | undefined

  if (isProduction) {
    const pool = getPostgresPool()
    const result = await pool.query(
      'SELECT * FROM cablecom_admin_users WHERE username = $1 OR email = $1',
      [username]
    )
    user = result.rows[0]
  } else {
    const db = getSQLiteDB()
    const stmt = db.prepare('SELECT * FROM cablecom_admin_users WHERE username = ? OR email = ?')
    user = stmt.get(username, username) as AdminUser | undefined
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
  let count = 0

  if (isProduction) {
    const pool = getPostgresPool()
    const result = await pool.query('SELECT COUNT(*) as count FROM cablecom_admin_users')
    count = parseInt(result.rows[0].count)
  } else {
    const db = getSQLiteDB()
    const stmt = db.prepare('SELECT COUNT(*) as count FROM cablecom_admin_users')
    const result = stmt.get() as { count: number }
    count = result.count
  }

  // If no admin users exist, create a default one
  if (count === 0) {
    const defaultUsername = 'ryan'
    const defaultPassword = 'SecurePassword22!'
    const defaultEmail = 'ryan@cable-comservices.com'

    await createAdminUser(defaultUsername, defaultPassword, defaultEmail)
    console.log('✓ Admin user created')
    console.log('  Email: ryan@cable-comservices.com')
    console.log('  Username: ryan')
  }
}
