import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminCredentials, ensureDefaultAdmin } from '@/lib/db/auth'
import { serialize } from 'cookie'

// Ensure default admin exists on server start
ensureDefaultAdmin().catch(console.error)

// POST /api/auth/login - Admin login
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password } = body

    console.log('🔐 Login attempt:', { username, hasPassword: !!password })

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      )
    }

    // Ensure admin user exists before verifying
    await ensureDefaultAdmin()
    console.log('✅ Admin user ensured')

    const user = await verifyAdminCredentials(username, password)

    if (!user) {
      console.log('❌ Credentials verification failed for:', username)
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    console.log('✅ Login successful for:', user.username)

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
