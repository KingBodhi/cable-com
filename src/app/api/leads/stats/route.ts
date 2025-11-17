import { NextRequest, NextResponse } from 'next/server'
import { getLeadStats } from '@/lib/db/database'

// GET /api/leads/stats - Get lead statistics (admin only)
export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const sessionCookie = request.cookies.get('admin_session')
    if (!sessionCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const stats = await getLeadStats()

    return NextResponse.json({ stats }, { status: 200 })
  } catch (error) {
    console.error('Error fetching lead stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    )
  }
}
