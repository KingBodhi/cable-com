import nodemailer from 'nodemailer'
import { Lead } from './db/database'

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.zoho.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function sendLeadNotification(lead: Lead) {
  const notificationEmail = process.env.NOTIFICATION_EMAIL || 'contact@cable-comservices.com'
  const fromEmail = process.env.SMTP_USER || 'contact@cable-comservices.com'

  try {
    const transporter = createTransporter()

    const mailOptions = {
      from: `Cable-Com Services <${fromEmail}>`,
      to: notificationEmail,
      subject: `New Lead: ${lead.name} - ${lead.service}`,
      html: generateLeadEmailHTML(lead),
      text: generateLeadEmailText(lead),
    }

    const info = await transporter.sendMail(mailOptions)

    console.log('✓ Lead notification email sent:', info.messageId)
    return { success: true, data: info }
  } catch (error) {
    console.error('Email send exception:', error)
    return { success: false, error }
  }
}

function generateLeadEmailHTML(lead: Lead): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #14532D 0%, #15803D 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #15803D; margin-bottom: 5px; }
    .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #22C55E; }
    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #22C55E; color: #666; }
    .badge { display: inline-block; background: #22C55E; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 New Lead Received!</h1>
      <div class="badge">Cable-Com Services CRM</div>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Contact Information</div>
        <div class="value">
          <strong>Name:</strong> ${lead.name}<br>
          <strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a><br>
          <strong>Phone:</strong> <a href="tel:${lead.phone}">${lead.phone}</a><br>
          ${lead.company ? `<strong>Company:</strong> ${lead.company}<br>` : ''}
        </div>
      </div>

      <div class="field">
        <div class="label">Service Requested</div>
        <div class="value">${formatServiceName(lead.service)}</div>
      </div>

      ${lead.project_type ? `
      <div class="field">
        <div class="label">Project Type</div>
        <div class="value">${formatProjectType(lead.project_type)}</div>
      </div>
      ` : ''}

      ${lead.timeline ? `
      <div class="field">
        <div class="label">Timeline</div>
        <div class="value">${formatTimeline(lead.timeline)}</div>
      </div>
      ` : ''}

      ${lead.budget ? `
      <div class="field">
        <div class="label">Budget Range</div>
        <div class="value">${formatBudget(lead.budget)}</div>
      </div>
      ` : ''}

      <div class="field">
        <div class="label">Project Details</div>
        <div class="value">${lead.message.replace(/\n/g, '<br>')}</div>
      </div>

      <div class="footer">
        <p><strong>Next Steps:</strong></p>
        <p>1. Log in to your <a href="https://cable-comservices.com/admin">Admin Dashboard</a></p>
        <p>2. Review the lead details and update status</p>
        <p>3. Contact the prospect within 24 hours</p>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">
          Lead ID: ${lead.id || 'Pending'} | Received: ${new Date().toLocaleString()}
        </p>
      </div>
    </div>
  </div>
</body>
</html>
  `
}

function generateLeadEmailText(lead: Lead): string {
  return `
🎯 NEW LEAD RECEIVED - Cable-Com Services

CONTACT INFORMATION
-------------------
Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone}
${lead.company ? `Company: ${lead.company}` : ''}

SERVICE REQUESTED
-----------------
${formatServiceName(lead.service)}

${lead.project_type ? `PROJECT TYPE: ${formatProjectType(lead.project_type)}` : ''}
${lead.timeline ? `TIMELINE: ${formatTimeline(lead.timeline)}` : ''}
${lead.budget ? `BUDGET: ${formatBudget(lead.budget)}` : ''}

PROJECT DETAILS
---------------
${lead.message}

NEXT STEPS
----------
1. Log in to your Admin Dashboard
2. Review the lead details and update status
3. Contact the prospect within 24 hours

Lead ID: ${lead.id || 'Pending'}
Received: ${new Date().toLocaleString()}
  `
}

function formatServiceName(service: string): string {
  const serviceMap: { [key: string]: string } = {
    'structured-cabling': 'Structured Cabling',
    'fiber-optic': 'Fiber Optic Installation',
    'data-center': 'Data Center Cabling',
    'security-systems': 'Security Systems',
    'voice-telephony': 'Voice & Telephony',
    'network-infrastructure': 'Network Infrastructure',
    'starlink-installation': 'Starlink Installation',
    'consultation': 'General Consultation',
  }
  return serviceMap[service] || service
}

function formatProjectType(type: string): string {
  const typeMap: { [key: string]: string } = {
    'new-installation': 'New Installation',
    'upgrade': 'Upgrade/Expansion',
    'maintenance': 'Maintenance/Repair',
    'emergency': 'Emergency Service',
  }
  return typeMap[type] || type
}

function formatTimeline(timeline: string): string {
  const timelineMap: { [key: string]: string } = {
    'immediate': 'Immediate (1-2 weeks)',
    '1-3-months': '1-3 months',
    '3-6-months': '3-6 months',
    '6-plus-months': '6+ months',
    'planning': 'Still planning',
  }
  return timelineMap[timeline] || timeline
}

function formatBudget(budget: string): string {
  const budgetMap: { [key: string]: string } = {
    'under-5k': 'Under $5,000',
    '5k-15k': '$5,000 - $15,000',
    '15k-50k': '$15,000 - $50,000',
    '50k-100k': '$50,000 - $100,000',
    '100k-plus': '$100,000+',
    'not-sure': 'Not sure yet',
  }
  return budgetMap[budget] || budget
}
