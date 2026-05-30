# Next-Gen Learning Dashboard

## Tech Stack

 **Next.js 16 (App Router)** - Framework & Server Components 
 **Supabase** - PostgreSQL database & BaaS 
 **Tailwind CSS v4** - Styling 
 **Framer Motion** - Animations & micro-interactions
 **Lucide React** - Icons
 **TypeScript** - Type safety

Supabase DB → Server Component (page.tsx) → Props → Client Components (CourseTile)
```

### Database Schema for suberbase DB

```sql
CREATE TABLE courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  progress INTEGER NOT NULL,
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

### Seed Data EXample

```sql
INSERT INTO courses (title, progress, icon_name) VALUES 
  ('Advanced React Patterns', 75, 'Code'),
  ('UI/UX Fundamentals', 40, 'PenTool'),
  ('Framer Motion Mastery', 90, 'Sparkles'),
  ('Backend with Supabase', 20, 'Database');
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

 `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL 
 `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase project `anon` public key 



## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000]in your browser.

<img width="1919" height="924" alt="Screenshot 2026-05-30 193827" src="https://github.com/user-attachments/assets/fc3572e9-67cb-47b7-a693-93695a003143" />


<img width="1919" height="929" alt="Screenshot 2026-05-30 193818" src="https://github.com/user-attachments/assets/e658301f-9907-4030-a085-8a146593f186" />







---
