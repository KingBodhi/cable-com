import bcrypt from 'bcryptjs'
import { getDatabase } from './database'

export interface AdminUser {
  id?: number
  username: string
  email: string
  password_hash?: string
  created_at?: string
}

export async function createAdminUser(username: string, password: string, email: string): Promise<number> {
  const db = getDatabase()
  const passwordHash = await bcrypt.hash(password, 10)

  const stmt = db.prepare(`
    INSERT INTO admin_users (username, password_hash, email)
    VALUES (?, ?, ?)
  `)

  const result = stmt.run(username, passwordHash, email)
  return result.lastInsertRowid as number
}

export async function verifyAdminCredentials(username: string, password: string): Promise<AdminUser | null> {
  const db = getDatabase()
  // Support login with username OR email
  const stmt = db.prepare('SELECT * FROM admin_users WHERE username = ? OR email = ?')
  const user = stmt.get(username, username) as AdminUser | undefined

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

export function getAdminUser(username: string): AdminUser | undefined {
  const db = getDatabase()
  const stmt = db.prepare('SELECT id, username, email, created_at FROM admin_users WHERE username = ?')
  return stmt.get(username) as AdminUser | undefined
}

export function ensureDefaultAdmin() {
  const db = getDatabase()
  const stmt = db.prepare('SELECT COUNT(*) as count FROM admin_users')
  const result = stmt.get() as { count: number }

  // If no admin users exist, create a default one
  if (result.count === 0) {
    // Default credentials
    const defaultUsername = 'ryan'
    const defaultPassword = 'SecurePassword22!'
    const defaultEmail = 'ryan@cable-comservices.com'

    bcrypt.hash(defaultPassword, 10).then((hash) => {
      const insertStmt = db.prepare(`
        INSERT INTO admin_users (username, password_hash, email)
        VALUES (?, ?, ?)
      `)
      insertStmt.run(defaultUsername, hash, defaultEmail)
      console.log('✓ Admin user created')
      console.log('  Email: ryan@cable-comservices.com')
      console.log('  Username: ryan')
    })
  }
}
