import { NextResponse } from 'next/server'
import { serialize } from 'cookie'

// POST /api/auth/logout - Admin logout
export async function POST() {
  try {
    // Clear session cookie
    const cookie = serialize('admin_session', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0, // Expire immediately
      path: '/',
    })

    const response = NextResponse.json(
      { success: true, message: 'Logged out successfully' },
      { status: 200 }
    )

    response.headers.set('Set-Cookie', cookie)

    return response
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    )
  }
}
