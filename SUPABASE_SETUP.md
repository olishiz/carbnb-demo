# Supabase Setup Guide for CarBnb

This guide will help you set up Supabase authentication for the CarBnb application.

## Prerequisites

- A Supabase account (sign up at https://supabase.com)
- Node.js and npm installed

## Step 1: Create a Supabase Project

1. Go to https://app.supabase.com
2. Click "New Project"
3. Fill in your project details:
   - **Name**: carbnb (or any name you prefer)
   - **Database Password**: Choose a strong password
   - **Region**: Select the region closest to your users
4. Click "Create new project"
5. Wait for your project to finish setting up (usually takes 1-2 minutes)

## Step 2: Get Your API Credentials

1. In your Supabase project dashboard, click on "Settings" (gear icon) in the left sidebar
2. Click on "API" in the settings menu
3. You'll see two important values:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")
4. Copy both of these values - you'll need them in the next step

## Step 3: Configure Environment Variables

1. In the root directory of your CarBnb project, create a file named `.env`
2. Add the following content, replacing the placeholders with your actual values:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

3. Save the file
4. **Important**: The `.env` file is already in `.gitignore`, so it won't be committed to git

## Step 4: Configure Authentication Settings (Optional)

By default, Supabase requires email confirmation. To disable this for development:

1. Go to your Supabase project dashboard
2. Click "Authentication" in the left sidebar
3. Click "Providers" tab
4. Click on "Email" provider
5. Scroll down to "Email Settings"
6. Toggle off "Enable email confirmations"
7. Click "Save"

For production, you should keep email confirmations enabled and configure an email template.

## Step 5: Set Up Email Templates (Optional for Production)

1. In your Supabase project, go to "Authentication" > "Email Templates"
2. Customize the following templates:
   - **Confirm signup**: Sent when a user signs up
   - **Reset password**: Sent when a user requests a password reset
   - **Magic link**: Sent for passwordless authentication
3. Update the email content and styling to match your CarBnb brand

## Step 6: Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Navigate to http://localhost:5173/account
3. Try creating a new account with your email
4. You should see a success message
5. Check your Supabase dashboard under "Authentication" > "Users" to see the new user

## Features Implemented

### Authentication
- ✅ User sign up with email and password
- ✅ User sign in
- ✅ User sign out
- ✅ Session management (persists across page refreshes)
- ✅ Profile management (update name and phone)

### Account Page
- ✅ Login/Signup form for non-authenticated users
- ✅ Profile dashboard for authenticated users
- ✅ Display user information (name, email, member since)
- ✅ Edit profile functionality
- ✅ Statistics display (subscriptions, member since)

### Navigation
- ✅ Account link in Header (desktop)
- ✅ Account button in BottomNav (mobile)
- ✅ Dynamic display (shows "Sign In" when logged out, "Account" when logged in)

### Booking Integration
- ✅ Pre-fills user information in booking forms when logged in
- ✅ Proper URL routing for car bookings (`/booking/:carId`)

## Database Schema (Optional)

If you want to store additional user data or bookings, you can create tables in Supabase:

### Bookings Table (Example)

```sql
create table public.bookings (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  car_id integer not null,
  car_name text not null,
  start_date date not null,
  duration_months integer not null,
  monthly_price integer not null,
  total_price integer not null,
  full_name text not null,
  email text not null,
  phone text not null,
  address text not null,
  city text not null,
  zip_code text not null,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.bookings enable row level security;

-- Create a policy that allows users to view their own bookings
create policy "Users can view own bookings"
  on public.bookings for select
  using (auth.uid() = user_id);

-- Create a policy that allows users to insert their own bookings
create policy "Users can create own bookings"
  on public.bookings for insert
  with check (auth.uid() = user_id);
```

To add this table:
1. Go to your Supabase dashboard
2. Click "SQL Editor" in the left sidebar
3. Click "New query"
4. Paste the SQL above
5. Click "Run"

## Troubleshooting

### Issue: "Invalid API key"
- **Solution**: Make sure you copied the **anon public** key, not the service role key
- Verify the key is correctly pasted in your `.env` file
- Restart your development server after changing `.env`

### Issue: "Failed to fetch"
- **Solution**: Check that your Supabase project URL is correct
- Make sure your internet connection is working
- Verify the project is not paused in Supabase dashboard

### Issue: Email confirmation not working
- **Solution**: Check your spam folder
- Disable email confirmations in Supabase settings (for development only)
- Configure SMTP settings in Supabase for production

### Issue: Session not persisting
- **Solution**: Check browser console for errors
- Clear browser cache and cookies
- Make sure you're not in private/incognito mode

## Production Deployment

For production deployment:

1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Enable email confirmations in Supabase
3. Set up custom email templates
4. Configure password requirements in Supabase authentication settings
5. Enable Row Level Security on all tables
6. Set up proper CORS settings in Supabase

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [React Auth Tutorial](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui-react)

## Support

If you encounter any issues, check:
- Supabase status page: https://status.supabase.com
- Supabase community: https://github.com/supabase/supabase/discussions
