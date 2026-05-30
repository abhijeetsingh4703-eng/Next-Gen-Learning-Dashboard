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

---