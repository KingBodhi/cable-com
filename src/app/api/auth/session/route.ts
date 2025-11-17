import { NextRequest, NextResponse } from 'next/server'

// GET /api/auth/session - Check if admin is authenticated
export async function GET(request: NextRequest) {
  try {
    const sessionCookie = request.cookies.get('admin_session')

    if (!sessionCookie) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      )
    }

    // In production, verify the session token here
    // For now, just check if cookie exists
    return NextResponse.json(
      { authenticated: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Session check error:', error)
    return NextResponse.json(
      { authenticated: false },
      { status: 500 }
    )
  }
}
