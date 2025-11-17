import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminCredentials, ensureDefaultAdmin } from '@/lib/db/auth'
import { ensurePostgresInitialized } from '@/lib/init-db'
import { serialize } from 'cookie'

// Ensure database and default admin exists on server start
async function initializeOnStartup() {
  try {
    if (process.env.DATABASE_URL) {
      await ensurePostgresInitialized()
    }
    await ensureDefaultAdmin()
  } catch (error) {
    console.error('Startup initialization error:', error)
  }
}
initializeOnStartup()

// POST /api/auth/login - Admin login
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password } = body

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      )
    }

    // Ensure database and admin user exists before verifying
    if (process.env.DATABASE_URL) {
      await ensurePostgresInitialized()
    }
    await ensureDefaultAdmin()

    const user = await verifyAdminCredentials(username, password)

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create session token (simple version - in production, use JWT)
    const sessionToken = Buffer.from(
      `${user.username}:${Date.now()}:${process.env.ADMIN_SESSION_SECRET}`
    ).toString('base64')

    // Set session cookie
    const cookie = serialize('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    const response = NextResponse.json(
      {
        success: true,
        user: {
          username: user.username,
          email: user.email,
        },
      },
      { status: 200 }
    )

    response.headers.set('Set-Cookie', cookie)

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Login failed. Please try again.' },
      { status: 500 }
    )
  }
}
