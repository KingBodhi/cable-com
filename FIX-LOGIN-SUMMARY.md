# LOGIN FIX - Vercel Serverless Issue Resolved

## Problem Identified

Error: `ENOENT: no such file or directory, mkdir '/var/task/data'`

**Root Cause**: 
- Vercel's serverless environment has a read-only filesystem
- SQLite was trying to create `/var/task/data` directory
- PostgreSQL schema wasn't initialized before trying to create admin user
- System fell back to SQLite, which failed due to read-only filesystem

## Fixes Applied

### 1. PostgreSQL Schema Initialization
**New File**: `src/lib/init-db.ts`
- Ensures PostgreSQL schema is created on first deployment
- Prevents fallback to SQLite when PostgreSQL is configured

### 2. SQLite Path Fix for Serverless
**Updated**: `src/lib/db/auth.ts`
- SQLite now uses `/tmp` directory in Vercel (writable)
- Uses `./data` locally
- Detects serverless via `VERCEL` or `AWS_LAMBDA_FUNCTION_NAME` env vars

### 3. Login Route Initialization
**Updated**: `src/app/api/auth/login/route.ts`
- Initializes PostgreSQL schema before admin user creation
- Ensures database is ready before login attempts

### 4. Setup Endpoint Enhancement
**Updated**: `src/app/api/admin/setup/route.ts`
- Explicitly initializes PostgreSQL before creating admin user
- Better error reporting

## Deploy Instructions

1. **Commit and push changes**:
   ```bash
   cd /Users/bodhi/Documents/GitHub/cable-com
   git add .
   git commit -m "Fix Vercel serverless filesystem issue and PostgreSQL initialization"
   git push
   ```

2. **Wait for Vercel deployment** (auto-deploys on push)

3. **Visit setup endpoint**:
   ```
   https://your-site.vercel.app/api/admin/setup
   ```

4. **You should see**:
   ```json
   {
     "success": true,
     "message": "Admin user created/updated successfully",
     "verification": {
       "userExists": true,
       "userEmail": "Ryan@Cable-ComServices.com"
     }
   }
   ```

5. **Try login**:
   - Go to: `/admin/login`
   - Email: `Ryan@Cable-ComServices.com`
   - Password: `SecurePassword22!`

## What Changed

| File | Change | Purpose |
|------|--------|---------|
| `src/lib/init-db.ts` | NEW | PostgreSQL schema initialization helper |
| `src/lib/db/auth.ts` | UPDATED | Use `/tmp` in serverless for SQLite |
| `src/app/api/auth/login/route.ts` | UPDATED | Initialize DB before login |
| `src/app/api/admin/setup/route.ts` | UPDATED | Explicit PostgreSQL init |

## Expected Behavior

### Before Fix
- ❌ Tried to create `/var/task/data` → Permission denied
- ❌ Database not initialized
- ❌ Admin user not created
- ❌ Login fails

### After Fix
- ✅ PostgreSQL schema created automatically
- ✅ Admin user created in PostgreSQL
- ✅ No filesystem issues
- ✅ Login works!

## Verification Steps

After deployment:

1. Check Vercel logs for:
   - `🔧 Initializing PostgreSQL schema...`
   - `✅ PostgreSQL schema initialized`
   - `✅ Default admin user created`

2. Visit `/api/admin/setup` and confirm:
   - `"success": true`
   - `"userExists": true`
   - `"database": "PostgreSQL"`

3. Login should now work!

## Cleanup (After Login Works)

Remove the setup endpoint:
```bash
rm -rf src/app/api/admin/setup
git add .
git commit -m "Remove admin setup endpoint"
git push
```

---

**Status**: Ready to deploy and test!
