# Portfolio Project Instructions for Claude Code

## Project Overview
Minimal, beautiful portfolio website for a Product Designer and Product Manager showcasing projects, social links, and professional information.

---

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Theme**: Slate + Blue (light mode minimal design)
- **Version Control**: Git + GitHub

---

## Project Structure

```
folioWebsite/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx             # Homepage (Hero + Grid)
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx     # Individual project pages
│   └── globals.css          # Global styles + Tailwind
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── Hero.tsx             # Hero section component
│   ├── ProjectGrid.tsx      # Projects grid component
│   ├── ProjectCard.tsx      # Individual project card
│   ├── WIPLoader.tsx        # Work-in-progress loader/animation
│   ├── ContactForm.tsx      # Contact form component
│   └── PasswordProtect.tsx  # Password protection wrapper
├── lib/
│   ├── utils.ts             # Utility functions (cn, etc.)
│   └── projects.ts          # Project data/metadata
├── public/
│   ├── projects/            # Project images/assets
│   └── resume.pdf           # Downloadable resume
├── claude/
│   └── project-instructions.md  # This file
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Design System

### Colors (Slate + Blue Theme)
```typescript
// tailwind.config.ts
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',  // Main blue
    600: '#0284c7',
    700: '#0369a1',
  },
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    600: '#475569',
    700: '#334155',
    900: '#0f172a',
  }
}
```

### Typography
- **Headings**: Bold, slate-900
- **Body**: Regular, slate-600
- **Font**: System fonts or Geist/Inter

### Spacing
- Consistent use of Tailwind spacing scale (4, 6, 8, 12, 16, 24, 32)
- Max width containers: `max-w-6xl` or `max-w-7xl`

---

## Key Features

### 1. Hero Section
- Clean, minimal introduction
- Name + Title (Product Designer & Product Manager)
- Brief tagline or bio
- Social links (LinkedIn, GitHub, Twitter, etc.)
- Download Resume button

### 2. Project Grid
- Card-based layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each card shows:
  - Project thumbnail/image
  - Project title
  - Brief description
  - Tags/technologies used
  - WIP loader for in-progress projects

### 3. Individual Project Pages
- Detailed project case study
- Password protection option for sensitive projects
- Images, process, outcomes
- Link back to home

### 4. Contact Form
- Name, Email, Message fields
- Form validation
- Submit functionality (can integrate with email service)

---

## Component Guidelines

### Always Use:
```typescript
// Import shadcn components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Import Framer Motion for animations
import { motion } from "framer-motion"

// Use cn utility for conditional classes
import { cn } from "@/lib/utils"
```

### Animation Patterns:
```typescript
// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  {/* content */}
</motion.div>

// Stagger children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      {/* item content */}
    </motion.div>
  ))}
</motion.div>
```

---

## Code Style Preferences

### TypeScript
- Use explicit types for props
- Avoid `any`, use proper interfaces
- Export types separately when reused

```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  isWIP?: boolean;
  href: string;
}

export function ProjectCard({ title, description, image, tags, isWIP, href }: ProjectCardProps) {
  // component code
}
```

### Component Structure
```typescript
'use client' // Only if using hooks/interactivity

import { ... }

interface ComponentProps {
  // props
}

export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // hooks
  // handlers
  // render
  return (
    // JSX
  )
}
```

### File Naming
- Components: PascalCase (e.g., `ProjectCard.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Pages: lowercase (e.g., `page.tsx`)

---

## Installation Commands

### Initial Setup
```bash
cd folioWebsite
npx create-next-app@latest . --typescript --tailwind --app
```

### shadcn/ui Setup
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input label textarea
```

### Framer Motion
```bash
npm install framer-motion
```

### Additional Dependencies
```bash
npm install lucide-react  # Icons
npm install react-hook-form  # Form handling
npm install zod  # Validation
```

---

## Git Workflow

### Commit Message Format
- `feat: add project grid component`
- `fix: resolve mobile responsiveness issue`
- `style: update color scheme to slate + blue`
- `docs: update README with setup instructions`
- `refactor: simplify hero section code`

### Branch Strategy (if needed)
- `main` - production-ready code
- `dev` - development branch
- `feature/component-name` - feature branches

---

## Important Notes

### When Creating Components:
1. Start with shadcn/ui base components
2. Add Framer Motion animations for polish
3. Ensure mobile responsiveness (test at 375px, 768px, 1440px)
4. Use semantic HTML (section, article, nav, etc.)
5. Add proper ARIA labels for accessibility

### When Styling:
1. Use Tailwind utility classes first
2. Create custom classes in globals.css only when needed
3. Follow the Slate + Blue color scheme
4. Maintain consistent spacing and typography
5. Light mode minimal aesthetic

### Performance:
1. Optimize images (use Next.js Image component)
2. Lazy load components when appropriate
3. Minimize client-side JavaScript (use 'use client' sparingly)
4. Code split heavy components

---

## Reference Links

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

---

## Quick Commands Reference

```bash
# Development
npm run dev

# Build
npm run build

# Production preview
npm run start

# Add shadcn component
npx shadcn-ui@latest add [component-name]

# Type check
npm run type-check

# Lint
npm run lint
```

---

**Last Updated**: November 2, 2025

**Note to Claude**: Refer to this document for project context, structure, and coding conventions. Always follow these guidelines unless explicitly instructed otherwise by the user.
