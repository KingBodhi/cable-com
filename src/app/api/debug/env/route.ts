import { NextRequest, NextResponse } from 'next/server'

// GET /api/debug/env - Show which environment variables are set
export async function GET(request: NextRequest) {
  return NextResponse.json({
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL: process.env.VERCEL,
      VERCEL_ENV: process.env.VERCEL_ENV,
    },
    variables: {
      hasDatabaseUrl: !!process.env.DATABASE_URL,
      databaseUrlLength: process.env.DATABASE_URL?.length || 0,
      hasAdminUsername: !!process.env.ADMIN_DEFAULT_USERNAME,
      adminUsername: process.env.ADMIN_DEFAULT_USERNAME || 'NOT SET',
      hasAdminEmail: !!process.env.ADMIN_DEFAULT_EMAIL,
      adminEmail: process.env.ADMIN_DEFAULT_EMAIL || 'NOT SET',
      hasAdminPassword: !!process.env.ADMIN_DEFAULT_PASSWORD,
      hasSessionSecret: !!process.env.ADMIN_SESSION_SECRET,
      hasSmtpHost: !!process.env.SMTP_HOST,
    }
  })
}
