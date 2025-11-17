import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.join(process.cwd(), 'data', 'cable-com.db')

let db: Database.Database | null = null

export function getDatabase() {
  if (!db) {
    // Ensure data directory exists
    const fs = require('fs')
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    db = new Database(dbPath)
    db.pragma('journal_mode = WAL')

    // Initialize database schema
    initializeSchema()
  }
  return db
}

function initializeSchema() {
  if (!db) return

  // Create leads table
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
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

  // Create admin users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      email TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create index for faster queries
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
    CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
  `)
}

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

export function createLead(lead: Lead): number {
  const db = getDatabase()
  const stmt = db.prepare(`
    INSERT INTO leads (
      name, email, phone, company, service,
      project_type, timeline, budget, message, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const result = stmt.run(
    lead.name,
    lead.email,
    lead.phone,
    lead.company || null,
    lead.service,
    lead.project_type || null,
    lead.timeline || null,
    lead.budget || null,
    lead.message,
    'new'
  )

  return result.lastInsertRowid as number
}

export function getAllLeads(): Lead[] {
  const db = getDatabase()
  const stmt = db.prepare(`
    SELECT * FROM leads
    ORDER BY created_at DESC
  `)
  return stmt.all() as Lead[]
}

export function getLeadById(id: number): Lead | undefined {
  const db = getDatabase()
  const stmt = db.prepare('SELECT * FROM leads WHERE id = ?')
  return stmt.get(id) as Lead | undefined
}

export function updateLeadStatus(id: number, status: string, notes?: string): void {
  const db = getDatabase()
  const stmt = db.prepare(`
    UPDATE leads
    SET status = ?, notes = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `)
  stmt.run(status, notes || null, id)
}

export function getLeadStats() {
  const db = getDatabase()

  const total = db.prepare('SELECT COUNT(*) as count FROM leads').get() as { count: number }
  const newLeads = db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'new'").get() as { count: number }
  const contacted = db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'contacted'").get() as { count: number }
  const qualified = db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'qualified'").get() as { count: number }
  const closed = db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'closed'").get() as { count: number }

  return {
    total: total.count,
    new: newLeads.count,
    contacted: contacted.count,
    qualified: qualified.count,
    closed: closed.count,
  }
}
