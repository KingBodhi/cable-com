# Cable-Com Services CRM System - Setup Guide

## Overview

Your website now has a complete CRM (Customer Relationship Management) system with:
- **Lead capture** via contact form
- **Email notifications** to contact@cable-comservices.com
- **Admin dashboard** for lead management
- **SQLite database** for local lead storage
- **Status tracking** for sales pipeline

---

## 🚀 Quick Start

### 1. Get Resend API Key (Required for Email Notifications)

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address
4. Go to **API Keys** section
5. Create a new API key
6. Copy the API key (starts with `re_`)

### 2. Update Environment Variables

Edit `.env.local` file and replace the placeholder values:

```bash
# Resend Email API
RESEND_API_KEY=re_YourActualResendAPIKey  # ← Replace this

# Admin Session Secret (generate a random string)
ADMIN_SESSION_SECRET=change-this-to-a-random-secure-string  # ← Replace this

# Email Configuration
NOTIFICATION_EMAIL=contact@cable-comservices.com
FROM_EMAIL=noreply@cable-comservices.com
```

**Important:** Generate a secure random string for `ADMIN_SESSION_SECRET`:
```bash
# On Mac/Linux, run this command to generate a random string:
openssl rand -base64 32
```

### 3. Verify Domain in Resend (For Production)

For production use, you need to verify your domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter `cable-comservices.com`
4. Add the provided DNS records to your domain registrar:
   - **TXT record** for domain verification
   - **MX records** for email receiving (optional)
   - **DKIM records** for email authentication

Once verified, update `FROM_EMAIL` in `.env.local`:
```bash
FROM_EMAIL=leads@cable-comservices.com
```

---

## 🔐 Admin Access

### Default Credentials

**URL:** http://localhost:3000/admin/login (or https://cable-comservices.com/admin)

```
Username: admin
Password: CableCom2025!
```

⚠️ **IMPORTANT:** Change these credentials immediately after first login!

### How to Change Admin Credentials

Currently, credentials are stored in the database. To change them:

1. Stop the dev server
2. Delete the database file: `rm -rf data/cable-com.db`
3. Edit `src/lib/db/auth.ts` - change default password in `ensureDefaultAdmin` function
4. Restart the server - new admin user will be created

**Future Enhancement:** Add a "Change Password" feature in the admin dashboard.

---

## 📊 Admin Dashboard Features

### Lead Management

**Dashboard URL:** `/admin/dashboard`

**Features:**
- View all leads in a sortable table
- Filter by status: New, Contacted, Qualified, Proposal, Closed, Lost
- Quick status updates via dropdown
- View detailed lead information in modal
- Real-time statistics cards
- Export capabilities (coming soon)

### Lead Statuses

1. **New** - Fresh lead from contact form
2. **Contacted** - Initial contact made
3. **Qualified** - Lead is a good fit
4. **Proposal** - Quote/proposal sent
5. **Closed** - Deal won!
6. **Lost** - Deal lost

### Lead Information Captured

For each lead, the system captures:
- Name, Email, Phone, Company
- Service requested
- Project type (new, upgrade, maintenance, emergency)
- Timeline (immediate, 1-3 months, etc.)
- Budget range
- Project details/message
- Timestamps (created, updated)
- Notes (admin can add)

---

## 📧 Email Notifications

### How It Works

When a lead is submitted:
1. Form data is saved to the database
2. Email notification is sent to `contact@cable-comservices.com`
3. Email contains all lead details formatted professionally
4. Admin can click links to call/email the prospect directly

### Email Template

The notification email includes:
- 🎯 Visual header with branding
- Contact information (clickable email/phone)
- Service requested
- Project details
- Budget and timeline
- Link to admin dashboard
- Lead ID for tracking

### Testing Email Notifications

**Development Mode (without Resend):**
- Emails will fail silently
- Check console for "Email send error" messages
- Leads still save to database

**With Resend API Key:**
1. Submit a test lead via contact form
2. Check `contact@cable-comservices.com` inbox
3. Verify email formatting and links work

---

## 🗄️ Database

### Technology

**SQLite** with `better-sqlite3`:
- File-based database (no server required)
- Stored in `/data/cable-com.db`
- Automatic schema creation
- Fast and reliable

### Database Schema

**Leads Table:**
```sql
CREATE TABLE leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  service TEXT NOT NULL,
  project_type TEXT,
  timeline TEXT,
  budget TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

**Admin Users Table:**
```sql
CREATE TABLE admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

### Database Location

- **Development:** `/data/cable-com.db`
- **Production:** Same location (ensure `/data` directory has write permissions)

### Backup Your Database

**Manual Backup:**
```bash
cp data/cable-com.db data/backup-$(date +%Y%m%d).db
```

**Automated Daily Backup (recommended for production):**
```bash
# Add to crontab (crontab -e)
0 2 * * * cp /path/to/cable-com/data/cable-com.db /path/to/backups/cable-com-$(date +\%Y\%m\%d).db
```

---

## 🔗 API Endpoints

### Public Endpoints

**POST /api/leads**
- Submit a new lead
- No authentication required
- Validates required fields
- Sends email notification

```javascript
fetch('/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Smith',
    email: 'john@company.com',
    phone: '(469) 653-1275',
    company: 'Acme Corp',
    service: 'structured-cabling',
    projectType: 'new-installation',
    timeline: '1-3-months',
    budget: '15k-50k',
    message: 'Need cabling for new office...'
  })
})
```

### Protected Endpoints (Require Admin Login)

**GET /api/leads**
- Fetch all leads
- Returns array of lead objects

**GET /api/leads/:id**
- Fetch specific lead by ID

**PATCH /api/leads/:id**
- Update lead status and notes
```javascript
fetch('/api/leads/123', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    status: 'contacted',
    notes: 'Called prospect, left voicemail'
  })
})
```

**GET /api/leads/stats**
- Get lead statistics (total, by status)

### Authentication Endpoints

**POST /api/auth/login**
- Admin login
- Sets session cookie

**POST /api/auth/logout**
- Admin logout
- Clears session cookie

**GET /api/auth/session**
- Check if authenticated

---

## 🚀 Deployment

### Environment Variables for Production

Create `.env.production`:

```bash
RESEND_API_KEY=re_YourProductionResendAPIKey
ADMIN_SESSION_SECRET=your-very-secure-random-string-at-least-32-chars
NOTIFICATION_EMAIL=contact@cable-comservices.com
FROM_EMAIL=leads@cable-comservices.com
NEXT_PUBLIC_GA_ID=G-H8GEZ4XM00
NODE_ENV=production
```

### Deployment Checklist

- [ ] Set up Resend account and verify domain
- [ ] Update all environment variables
- [ ] Change default admin password
- [ ] Test email notifications
- [ ] Set up database backups
- [ ] Configure HTTPS/SSL
- [ ] Test admin dashboard access
- [ ] Submit test lead and verify entire flow

### Vercel Deployment (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

**Note:** SQLite works on Vercel for development, but for production consider:
- **PostgreSQL** (Vercel Postgres, Supabase, Neon)
- **MongoDB** (MongoDB Atlas)
- **PlanetScale** (MySQL)

---

## 🔧 Troubleshooting

### Email Not Sending

**Check:**
1. Is `RESEND_API_KEY` set correctly in `.env.local`?
2. Run `npm run dev` and check console for errors
3. Verify Resend account is active
4. Check Resend dashboard logs

**Test API key:**
```bash
curl -X POST https://api.resend.com/emails \\
  -H "Authorization: Bearer re_YourAPIKey" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "onboarding@resend.dev",
    "to": "your-email@example.com",
    "subject": "Test",
    "html": "<p>Test email</p>"
  }'
```

### Can't Access Admin Dashboard

**Check:**
1. Is server running? `npm run dev`
2. Navigate to http://localhost:3000/admin/login
3. Use default credentials: admin / CableCom2025!
4. Check browser console for errors

### Database Not Creating

**Check:**
1. `/data` directory has write permissions
2. No file permission errors in console
3. Try manually creating: `mkdir -p data`

### Lead Not Saving

**Check:**
1. Browser console for errors
2. Server console for API errors
3. Network tab shows 201 response from /api/leads
4. Database file exists and is not locked

---

## 📈 Future Enhancements

### Recommended Additions

1. **Export Leads to CSV** - Download lead data for analysis
2. **Lead Assignment** - Assign leads to team members
3. **Email Templates** - Automated follow-up emails
4. **Calendar Integration** - Schedule follow-ups
5. **Analytics Dashboard** - Conversion rates, response times
6. **Two-Factor Authentication** - Enhanced admin security
7. **Webhook Integration** - Connect to Slack, Zapier, etc.
8. **Mobile App** - Manage leads on the go
9. **Advanced Search** - Filter by date range, budget, service
10. **Lead Scoring** - Automatic qualification based on criteria

### Scaling Considerations

When you outgrow SQLite, migrate to:
- **PostgreSQL** for better concurrency
- **Redis** for session management
- **S3** for file attachments
- **SendGrid** for higher email volume
- **Stripe** for payment processing

---

## 📞 Support

For technical issues with this CRM system:

1. Check this documentation
2. Review console logs (browser and server)
3. Test with a fresh database (`rm -rf data/`)
4. Verify environment variables are set

---

## ✅ System Status

All components installed and configured:
- ✅ SQLite database with schema
- ✅ Lead capture API
- ✅ Email notification system (Resend)
- ✅ Admin authentication
- ✅ Admin dashboard UI
- ✅ Contact form integration
- ✅ Installation photos gallery

**Next Steps:**
1. Get Resend API key
2. Update .env.local
3. Test the complete flow
4. Deploy to production

---

**Built with:** Next.js 15, TypeScript, SQLite, Resend, Tailwind CSS
**Last Updated:** November 2025
