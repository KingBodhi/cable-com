import { Pool } from 'pg'
import Database from 'better-sqlite3'
import path from 'path'

// Database interfaces
export interface Lead {
  id?: number
  name: string
  email: string
  phone: string
  company?: string
  service: string
  project_type?: string
  timeline?: string
  budget?: string
  message: string
  status?: string
  notes?: string
  created_at?: string
  updated_at?: string
}

// Determine which database to use
const isProduction = process.env.DATABASE_URL !== undefined
let pool: Pool | null = null
let sqliteDb: Database.Database | null = null

// PostgreSQL connection
function getPostgresPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL?.includes('localhost') ? false : { rejectUnauthorized: false }
    })
  }
  return pool
}

// SQLite connection (for local development)
function getSQLiteDB() {
  if (!sqliteDb) {
    const fs = require('fs')
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    const dbPath = path.join(dataDir, 'cable-com.db')
    sqliteDb = new Database(dbPath)
    sqliteDb.pragma('journal_mode = WAL')
    initializeSQLiteSchema()
  }
  return sqliteDb
}

function initializeSQLiteSchema() {
  if (!sqliteDb) return

  sqliteDb.exec(`
    CREATE TABLE IF NOT EXISTS cablecom_leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      company TEXT,
      service TEXT NOT NULL,
      project_type TEXT,
      timeline TEXT,
      budget TEXT,
      message TEXT NOT NULL,
      status TEXT DEFAULT 'new',
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  sqliteDb.exec(`
    CREATE TABLE IF NOT EXISTS cablecom_admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      email TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  sqliteDb.exec(`
    CREATE INDEX IF NOT EXISTS idx_cablecom_leads_status ON cablecom_leads(status);
    CREATE INDEX IF NOT EXISTS idx_cablecom_leads_created_at ON cablecom_leads(created_at DESC);
  `)
}

// Initialize PostgreSQL schema
export async function initializePostgresSchema() {
  const pool = getPostgresPool()

  await pool.query(`
    CREATE TABLE IF NOT EXISTS cablecom_leads (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      company VARCHAR(255),
      service VARCHAR(100) NOT NULL,
      project_type VARCHAR(100),
      timeline VARCHAR(100),
      budget VARCHAR(100),
      message TEXT NOT NULL,
      status VARCHAR(50) DEFAULT 'new',
      notes TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `)

  await pool.query(`
    CREATE TABLE IF NOT EXISTS cablecom_admin_users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `)

  await pool.query(`
    CREATE INDEX IF NOT EXISTS idx_cablecom_leads_status ON cablecom_leads(status);
    CREATE INDEX IF NOT EXISTS idx_cablecom_leads_created_at ON cablecom_leads(created_at DESC);
  `)
}

// Unified API
export async function createLead(lead: Lead): Promise<number> {
  if (isProduction) {
    const pool = getPostgresPool()
    const result = await pool.query(
      `INSERT INTO cablecom_leads (name, email, phone, company, service, project_type, timeline, budget, message, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING id`,
      [lead.name, lead.email, lead.phone, lead.company || null, lead.service,
       lead.project_type || null, lead.timeline || null, lead.budget || null, lead.message, 'new']
    )
    return result.rows[0].id
  } else {
    const db = getSQLiteDB()
    const stmt = db.prepare(`
      INSERT INTO cablecom_leads (name, email, phone, company, service, project_type, timeline, budget, message, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    const result = stmt.run(
      lead.name, lead.email, lead.phone, lead.company || null, lead.service,
      lead.project_type || null, lead.timeline || null, lead.budget || null, lead.message, 'new'
    )
    return result.lastInsertRowid as number
  }
}

export async function getAllLeads(): Promise<Lead[]> {
  if (isProduction) {
    const pool = getPostgresPool()
    const result = await pool.query('SELECT * FROM cablecom_leads ORDER BY created_at DESC')
    return result.rows
  } else {
    const db = getSQLiteDB()
    const stmt = db.prepare('SELECT * FROM cablecom_leads ORDER BY created_at DESC')
    return stmt.all() as Lead[]
  }
}

export async function getLeadById(id: number): Promise<Lead | null> {
  if (isProduction) {
    const pool = getPostgresPool()
    const result = await pool.query('SELECT * FROM cablecom_leads WHERE id = $1', [id])
    return result.rows[0] || null
  } else {
    const db = getSQLiteDB()
    const stmt = db.prepare('SELECT * FROM cablecom_leads WHERE id = ?')
    return (stmt.get(id) as Lead) || null
  }
}

export async function updateLeadStatus(id: number, status: string, notes?: string): Promise<void> {
  if (isProduction) {
    const pool = getPostgresPool()
    await pool.query(
      'UPDATE cablecom_leads SET status = $1, notes = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3',
      [status, notes || null, id]
    )
  } else {
    const db = getSQLiteDB()
    const stmt = db.prepare('UPDATE cablecom_leads SET status = ?, notes = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
    stmt.run(status, notes || null, id)
  }
}

export async function getLeadStats() {
  if (isProduction) {
    const pool = getPostgresPool()
    const [total, newLeads, contacted, qualified, closed] = await Promise.all([
      pool.query('SELECT COUNT(*) as count FROM cablecom_leads'),
      pool.query("SELECT COUNT(*) as count FROM cablecom_leads WHERE status = 'new'"),
      pool.query("SELECT COUNT(*) as count FROM cablecom_leads WHERE status = 'contacted'"),
      pool.query("SELECT COUNT(*) as count FROM cablecom_leads WHERE status = 'qualified'"),
      pool.query("SELECT COUNT(*) as count FROM cablecom_leads WHERE status = 'closed'"),
    ])

    return {
      total: parseInt(total.rows[0].count),
      new: parseInt(newLeads.rows[0].count),
      contacted: parseInt(contacted.rows[0].count),
      qualified: parseInt(qualified.rows[0].count),
      closed: parseInt(closed.rows[0].count),
    }
  } else {
    const db = getSQLiteDB()
    const total = db.prepare('SELECT COUNT(*) as count FROM cablecom_leads').get() as { count: number }
    const newLeads = db.prepare("SELECT COUNT(*) as count FROM cablecom_leads WHERE status = 'new'").get() as { count: number }
    const contacted = db.prepare("SELECT COUNT(*) as count FROM cablecom_leads WHERE status = 'contacted'").get() as { count: number }
    const qualified = db.prepare("SELECT COUNT(*) as count FROM cablecom_leads WHERE status = 'qualified'").get() as { count: number }
    const closed = db.prepare("SELECT COUNT(*) as count FROM cablecom_leads WHERE status = 'closed'").get() as { count: number }

    return {
      total: total.count,
      new: newLeads.count,
      contacted: contacted.count,
      qualified: qualified.count,
      closed: closed.count,
    }
  }
}

// Export for backward compatibility
export function getDatabase() {
  return getSQLiteDB()
}
