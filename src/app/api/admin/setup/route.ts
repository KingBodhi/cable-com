import { NextRequest, NextResponse } from 'next/server'
import { ensureDefaultAdmin, getAdminUser } from '@/lib/db/auth'
import { ensurePostgresInitialized } from '@/lib/init-db'

// GET /api/admin/setup - Manually trigger admin user creation
// Remove this endpoint after confirming admin user is created
export async function GET(request: NextRequest) {
  try {
    console.log('🔧 Manual admin setup triggered...')
    console.log('📝 Environment check:')
    console.log('  - DATABASE_URL:', process.env.DATABASE_URL ? 'SET (PostgreSQL)' : 'NOT SET (SQLite)')
    console.log('  - ADMIN_DEFAULT_USERNAME:', process.env.ADMIN_DEFAULT_USERNAME || 'ryan (default)')
    console.log('  - ADMIN_DEFAULT_EMAIL:', process.env.ADMIN_DEFAULT_EMAIL || 'Ryan@Cable-ComServices.com (default)')
    console.log('  - ADMIN_DEFAULT_PASSWORD:', process.env.ADMIN_DEFAULT_PASSWORD ? 'SET' : 'SecurePassword22! (default)')

    // Initialize PostgreSQL schema first if using PostgreSQL
    if (process.env.DATABASE_URL) {
      console.log('🔧 Ensuring PostgreSQL schema exists...')
      await ensurePostgresInitialized()
    }

    await ensureDefaultAdmin()

    console.log('✅ Admin setup complete')

    // Try to fetch the admin user to verify
    const username = process.env.ADMIN_DEFAULT_USERNAME || 'ryan'
    const adminUser = await getAdminUser(username)

    return NextResponse.json(
      {
        success: true,
        message: 'Admin user created/updated successfully. You can now login.',
        credentials: {
          email: process.env.ADMIN_DEFAULT_EMAIL || 'Ryan@Cable-ComServices.com',
          username: process.env.ADMIN_DEFAULT_USERNAME || 'ryan',
          note: 'Password is from ADMIN_DEFAULT_PASSWORD env var or SecurePassword22!'
        },
        verification: {
          userExists: !!adminUser,
          userEmail: adminUser?.email,
          userUsername: adminUser?.username
        },
        environment: {
          database: process.env.DATABASE_URL ? 'PostgreSQL' : 'SQLite',
          hasCustomCredentials: !!(process.env.ADMIN_DEFAULT_USERNAME || process.env.ADMIN_DEFAULT_EMAIL || process.env.ADMIN_DEFAULT_PASSWORD)
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Admin setup error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create admin user',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
