# API References & Resources

Useful APIs and resources for portfolio and future projects.

---

## Design & UI Resources

### shadcn/ui
- **Docs**: https://ui.shadcn.com
- **Components**: Pre-built, customizable React components
- **Installation**: `npx shadcn-ui@latest add [component-name]`
- **Available Components**:
  - button, card, input, label, textarea
  - badge, dialog, dropdown-menu, tabs
  - toast, alert, skeleton, separator
  - And many more...

### Framer Motion
- **Docs**: https://www.framer.com/motion
- **Purpose**: Animation library for React
- **Common Patterns**:
  ```typescript
  // Fade in
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  
  // Slide up
  initial={{ y: 20 }}
  animate={{ y: 0 }}
  
  // Scale
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  ```

### Lucide Icons
- **Website**: https://lucide.dev
- **Usage**: `import { IconName } from "lucide-react"`
- **Examples**: ArrowRight, Mail, Github, Linkedin, Download, Lock

### Tailwind CSS
- **Docs**: https://tailwindcss.com/docs
- **Cheatsheet**: https://nerdcavel.com/tailwind-cheat-sheet
- **Plugin**: Tailwind CSS IntelliSense (VS Code extension)

---

## Email & Contact Form APIs

### Resend
- **Website**: https://resend.com
- **Purpose**: Modern email API for developers
- **Pricing**: Free tier - 100 emails/day
- **Setup**:
  ```bash
  npm install resend
  ```
- **Example Usage**:
  ```typescript
  import { Resend } from 'resend';
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'your@email.com',
    subject: 'New Contact Form Submission',
    html: '<p>Message content...</p>'
  });
  ```

### EmailJS
- **Website**: https://www.emailjs.com
- **Purpose**: Send emails directly from client-side
- **Pricing**: Free tier - 200 emails/month
- **Best For**: Simple contact forms without backend

### SendGrid
- **Website**: https://sendgrid.com
- **Purpose**: Email delivery service
- **Pricing**: Free tier - 100 emails/day
- **Enterprise-grade**: Good for scaling

---

## Authentication (Future Projects)

### Clerk
- **Website**: https://clerk.com
- **Purpose**: Complete user authentication
- **Features**: Sign up, sign in, user profiles, password reset
- **Pricing**: Free tier - 10,000 MAU
- **Best For**: SaaS products, apps requiring user auth

### NextAuth.js
- **Website**: https://next-auth.js.org
- **Purpose**: Authentication for Next.js
- **Features**: OAuth, email/password, JWT
- **Pricing**: Free (open source)
- **Best For**: Custom auth solutions

---

## Content Management (Future Portfolio Updates)

### Sanity
- **Website**: https://www.sanity.io
- **Purpose**: Headless CMS
- **Use Case**: Manage portfolio projects dynamically
- **Pricing**: Free tier available
- **Features**: Real-time editing, image optimization

### Contentful
- **Website**: https://www.contentful.com
- **Purpose**: API-first CMS
- **Use Case**: Dynamic content management
- **Pricing**: Free tier - 25K records

---

## Image & Media

### Cloudinary
- **Website**: https://cloudinary.com
- **Purpose**: Image and video management
- **Features**: Upload, transform, optimize, deliver
- **Pricing**: Free tier - 25 credits/month
- **Best For**: Portfolio image hosting

### Uploadthing
- **Website**: https://uploadthing.com
- **Purpose**: File uploads for Next.js
- **Pricing**: Free tier - 2GB storage
- **Best For**: Quick file upload implementation

---

## Analytics

### Vercel Analytics
- **Website**: https://vercel.com/analytics
- **Purpose**: Web analytics for Next.js
- **Features**: Page views, performance metrics
- **Pricing**: Free tier available
- **Setup**: One-click integration

### Plausible
- **Website**: https://plausible.io
- **Purpose**: Privacy-friendly analytics
- **Pricing**: $9/month (no free tier)
- **Best For**: GDPR-compliant tracking

---

## Fintech APIs (Future Projects)

### Stripe
- **Website**: https://stripe.com
- **Purpose**: Payment processing
- **Features**: Subscriptions, one-time payments, invoices
- **Pricing**: 2.9% + $0.30 per transaction
- **Best For**: E-commerce, SaaS billing

### Plaid
- **Website**: https://plaid.com
- **Purpose**: Banking and financial data
- **Features**: Bank account linking, transaction data
- **Pricing**: Free development mode
- **Use Case**: Finance apps, budgeting tools

### Alpha Vantage
- **Website**: https://www.alphavantage.co
- **Purpose**: Stock market data API
- **Features**: Real-time and historical stock data
- **Pricing**: Free tier - 25 requests/day
- **Use Case**: Finance dashboards

---

## EdTech APIs (Future Projects)

### OpenAI
- **Website**: https://platform.openai.com
- **Purpose**: AI/ML capabilities
- **Use Cases**: Chatbots, content generation, tutoring
- **Pricing**: Pay-per-use
- **Features**: GPT-4, embeddings, text-to-speech

### Google Cloud Education APIs
- **Website**: https://cloud.google.com/edu
- **Purpose**: Educational tools and data
- **Features**: Classroom API, Forms API
- **Use Case**: Learning management systems

---

## Healthcare/Pharmacy APIs (Future Projects)

### FDA API
- **Website**: https://open.fda.gov
- **Purpose**: Drug information, recalls, adverse events
- **Pricing**: Free
- **Use Case**: Medicine information apps

### RxNorm API
- **Website**: https://rxnav.nlm.nih.gov/APIs.html
- **Purpose**: Drug name standardization
- **Pricing**: Free
- **Use Case**: Pharmacy management systems

---

## Productivity & Automation

### Google Calendar API
- **Website**: https://developers.google.com/calendar
- **Purpose**: Calendar integration
- **Use Case**: Scheduling, availability checking

### Notion API
- **Website**: https://developers.notion.com
- **Purpose**: Access Notion databases
- **Use Case**: Project management integrations

### Slack API
- **Website**: https://api.slack.com
- **Purpose**: Slack integrations and bots
- **Use Case**: Team collaboration tools

---

## Database Solutions

### Supabase
- **Website**: https://supabase.com
- **Purpose**: Open-source Firebase alternative
- **Features**: PostgreSQL, auth, storage, real-time
- **Pricing**: Free tier - 500MB database
- **Best For**: Full-stack apps

### PlanetScale
- **Website**: https://planetscale.com
- **Purpose**: Serverless MySQL
- **Pricing**: Free tier - 5GB storage
- **Best For**: Scalable databases

### Upstash
- **Website**: https://upstash.com
- **Purpose**: Serverless Redis
- **Use Case**: Caching, rate limiting
- **Pricing**: Free tier available

---

## Deployment & Hosting

### Vercel
- **Website**: https://vercel.com
- **Purpose**: Next.js hosting
- **Features**: Auto-deploys from GitHub, edge functions
- **Pricing**: Free tier - hobby projects
- **Best For**: Next.js applications

### Netlify
- **Website**: https://www.netlify.com
- **Purpose**: Static site hosting
- **Pricing**: Free tier available
- **Best For**: JAMstack sites

---

## Testing & Quality

### Playwright
- **Website**: https://playwright.dev
- **Purpose**: End-to-end testing
- **Setup**: `npm install @playwright/test`
- **Best For**: Automated browser testing

### Vitest
- **Website**: https://vitest.dev
- **Purpose**: Unit testing for Vite projects
- **Best For**: Component and logic testing

---

## Useful Tools

### Figma to Code
- **Figma Dev Mode**: Convert designs to code
- **Anima Plugin**: Export Figma to React/HTML
- **Builder.io**: Visual development platform

### Code Formatters
- **Prettier**: Code formatting
- **ESLint**: Code linting
- **Husky**: Git hooks for code quality

---

## Quick Reference Commands

```bash
# Install specific shadcn components
npx shadcn-ui@latest add button card badge input

# Add environment variables (.env.local)
RESEND_API_KEY=your_key_here
DATABASE_URL=your_db_url_here

# Type checking
npm run type-check

# Build and preview
npm run build && npm run start
```

---

**Note**: Always check pricing and rate limits before using APIs in production. Most services offer free tiers perfect for portfolio and learning projects.

**Last Updated**: November 2, 2025
