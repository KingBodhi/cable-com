# Cable-Com Services - Deployment Guide

## Using Your Existing Render PostgreSQL Database

### 1. Get Your Render Database URL

You can use your existing Render PostgreSQL database. The tables will be prefixed with `cablecom_` to avoid conflicts with other projects.

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Select your existing PostgreSQL database
3. Copy the **External Database URL** - it looks like:
   ```
   postgres://username:password@dpg-xxxxx-a.oregon-postgres.render.com/database_name
   ```

### 2. Initialize Database Schema

The tables will be created automatically on first deployment, but you can also create them manually in Render's "Connect" tab (psql console):

```sql
-- Create leads table with cablecom_ prefix
CREATE TABLE IF NOT EXISTS cablecom_leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  company VARCHAR(255),
  service VARCHAR(100) NOT NULL,
  project_type VARCHAR(100),
  timeline VARCHAR(100),
  budget VARCHAR(100),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create admin users table with cablecom_ prefix
CREATE TABLE IF NOT EXISTS cablecom_admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_cablecom_leads_status ON cablecom_leads(status);
CREATE INDEX IF NOT EXISTS idx_cablecom_leads_created_at ON cablecom_leads(created_at DESC);
```

## Deploying to Vercel

### 1. Environment Variables

Add these environment variables in Vercel Dashboard → Settings → Environment Variables:

```bash
# Database
DATABASE_URL=postgres://username:password@dpg-xxxxx-a.oregon-postgres.render.com/database_name

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-H8GEZ4XM00

# Zoho SMTP Configuration
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=admin@cable-comservices.com
SMTP_PASS=khCY5RQtxJeu

# Admin Session Secret (generate a new random string for production)
ADMIN_SESSION_SECRET=your-production-secret-key-here-make-it-random

# Email Configuration
NOTIFICATION_EMAIL=contact@cable-comservices.com
```

**IMPORTANT**: For `ADMIN_SESSION_SECRET`, generate a random string:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 2. Deploy

1. Push your code to GitHub
2. Import repository in Vercel
3. Vercel will automatically detect Next.js and deploy
4. Add environment variables (see above)
5. Redeploy to apply environment variables

### 3. Create Admin User

After first deployment, you need to create the admin user. Since the database is now PostgreSQL, run this SQL in Render's psql console:

```sql
-- First, generate a bcrypt hash for your password
-- You can use: https://bcrypt-generator.com/
-- Use "SecurePassword22!" and 10 rounds

INSERT INTO admin_users (username, email, password_hash)
VALUES (
  'ryan',
  'ryan@cable-comservices.com',
  '$2a$10$[BCRYPT_HASH_HERE]'
);
```

Or visit `/admin/login` and the system will auto-create the default admin on first access.

## Testing Production

1. **Test Contact Form**: Submit a lead at `https://your-domain.vercel.app/contact`
2. **Check Email**: Verify email arrives at contact@cable-comservices.com
3. **Test Admin Panel**: Login at `https://your-domain.vercel.app/admin/login`
4. **Verify Database**: Check Render dashboard to see lead was stored

## Troubleshooting

### Database Connection Issues
- Ensure DATABASE_URL is set in Vercel
- Check Render database is "Available" status
- Verify External Database URL is used (not Internal)

### Email Not Sending
- Verify all SMTP environment variables are set
- Check Zoho app password is correct
- Look at Vercel Function Logs for error messages

### Admin Login Not Working
- Ensure admin user exists in database
- Check ADMIN_SESSION_SECRET is set
- Verify password hash is correct bcrypt format

## Environment Variables Summary

| Variable | Required | Example |
|----------|----------|---------|
| DATABASE_URL | Yes | postgres://user:pass@host/db |
| SMTP_HOST | Yes | smtp.zoho.com |
| SMTP_PORT | Yes | 587 |
| SMTP_SECURE | Yes | false |
| SMTP_USER | Yes | admin@cable-comservices.com |
| SMTP_PASS | Yes | khCY5RQtxJeu |
| ADMIN_SESSION_SECRET | Yes | random-64-char-hex-string |
| NOTIFICATION_EMAIL | Yes | contact@cable-comservices.com |
| NEXT_PUBLIC_GA_ID | No | G-H8GEZ4XM00 |
