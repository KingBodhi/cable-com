import { NextRequest, NextResponse } from 'next/server'
import { createLead, getAllLeads, Lead } from '@/lib/db/database'
import { sendLeadNotification } from '@/lib/email'

// POST /api/leads - Create a new lead
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'service', 'message']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Create lead in database
    const lead: Lead = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company || null,
      service: body.service,
      project_type: body.projectType || null,
      timeline: body.timeline || null,
      budget: body.budget || null,
      message: body.message,
    }

    const leadId = await createLead(lead)
    lead.id = leadId

    // Send email notification (async, don't wait for it)
    sendLeadNotification(lead).catch((error) => {
      console.error('Failed to send email notification:', error)
      // Don't fail the request if email fails
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully',
        leadId,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Failed to submit lead. Please try again.' },
      { status: 500 }
    )
  }
}

// GET /api/leads - Get all leads (admin only)
export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // TODO: Verify JWT token here when implementing full auth
    // For now, just check if session cookie exists
    const sessionCookie = request.cookies.get('admin_session')
    if (!sessionCookie) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const leads = await getAllLeads()

    return NextResponse.json({ leads }, { status: 200 })
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}
