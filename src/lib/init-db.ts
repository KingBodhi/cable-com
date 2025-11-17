// Database initialization helper
// This ensures PostgreSQL schema is created on first deployment

import { initializePostgresSchema } from './db/database'

let initialized = false

export async function ensurePostgresInitialized() {
  if (initialized || !process.env.DATABASE_URL) {
    return
  }

  try {
    console.log('🔧 Initializing PostgreSQL schema...')
    await initializePostgresSchema()
    initialized = true
    console.log('✅ PostgreSQL schema initialized')
  } catch (error) {
    console.error('❌ Failed to initialize PostgreSQL schema:', error)
    throw error
  }
}
