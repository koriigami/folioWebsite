# Component Templates

Quick reference for common component patterns used in the portfolio project.

---

## Hero Section Template

```typescript
'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react"

export function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: Mail, href: "mailto:your@email.com", label: "Email" },
  ]

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-6">
            Product Designer & Product Manager
          </p>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Building thoughtful digital experiences that solve real problems.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-primary-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Download Resume Button */}
          <Button size="lg" className="gap-2">
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
```

---

## Project Card Template

```typescript
'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WIPLoader } from "./WIPLoader"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  isWIP?: boolean
  href: string
  slug: string
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  isWIP = false, 
  href 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Link href={href}>
        <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow cursor-pointer relative">
          {isWIP && (
            <div className="absolute top-4 right-4 z-10">
              <WIPLoader />
            </div>
          )}
          
          <div className="relative h-48 w-full overflow-hidden bg-slate-100">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {title}
              <ArrowRight className="w-5 h-5 text-primary-500" />
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
```

---

## Project Grid Template

```typescript
import { ProjectCard } from "./ProjectCard"
import { projects } from "@/lib/projects"

export function ProjectGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              isWIP={project.isWIP}
              href={`/projects/${project.slug}`}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## WIP Loader Template

```typescript
'use client'

import { motion } from "framer-motion"

export function WIPLoader() {
  return (
    <motion.div
      className="flex items-center gap-2 bg-slate-900 text-white px-3 py-1.5 rounded-full text-sm font-medium"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-2 h-2 bg-primary-400 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span>Work in Progress</span>
    </motion.div>
  )
}
```

---

## Contact Form Template

```typescript
'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    // Add your form submission logic here
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    
    setTimeout(() => {
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    }, 1000)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-600">
              Have a project in mind? Let's talk about it.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your name"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="your@email.com"
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Tell me about your project..."
                rows={6}
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full gap-2"
              disabled={status === "loading"}
            >
              <Mail className="w-4 h-4" />
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="text-center text-primary-600 font-medium">
                Message sent successfully!
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
```

---

## Password Protection Template

```typescript
'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock } from "lucide-react"

interface PasswordProtectProps {
  children: React.ReactNode
  correctPassword: string
  projectName: string
}

export function PasswordProtect({ 
  children, 
  correctPassword, 
  projectName 
}: PasswordProtectProps) {
  const [password, setPassword] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === correctPassword) {
      setIsUnlocked(true)
      setError(false)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  if (isUnlocked) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Lock className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Protected Project
            </h2>
            <p className="text-slate-600">
              This project requires a password to view
            </p>
            <p className="text-sm text-slate-500 mt-2">
              {projectName}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={error ? "border-red-500" : ""}
              />
              {error && (
                <p className="text-sm text-red-500 mt-1">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Unlock Project
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
```

---

## Projects Data Template (lib/projects.ts)

```typescript
export interface Project {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
  isWIP: boolean
  isPasswordProtected?: boolean
  password?: string
  content?: {
    overview: string
    problem: string
    solution: string
    outcome: string
    images: string[]
  }
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description: "A brief description of what this project is about and the problem it solves.",
    image: "/projects/project-one/cover.jpg",
    tags: ["Design", "Product", "UX"],
    isWIP: false,
    isPasswordProtected: false,
    content: {
      overview: "Detailed project overview...",
      problem: "The problem we were solving...",
      solution: "How we approached the solution...",
      outcome: "Results and impact...",
      images: [
        "/projects/project-one/image-1.jpg",
        "/projects/project-one/image-2.jpg",
      ]
    }
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "Another exciting project with unique challenges.",
    image: "/projects/project-two/cover.jpg",
    tags: ["Development", "API", "SaaS"],
    isWIP: true,
    isPasswordProtected: true,
    password: "demo123",
  },
  // Add more projects...
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
```

---

## Individual Project Page Template (app/projects/[slug]/page.tsx)

```typescript
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PasswordProtect } from "@/components/PasswordProtect"
import { getProjectBySlug } from "@/lib/projects"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const content = (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {project.content && (
          <div className="prose prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-slate-600">{project.content.overview}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">The Problem</h2>
              <p className="text-slate-600">{project.content.problem}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-slate-600">{project.content.solution}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Outcome</h2>
              <p className="text-slate-600">{project.content.outcome}</p>
            </section>

            {project.content.images && project.content.images.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.content.images.map((img, i) => (
                    <div key={i} className="relative h-64 rounded-lg overflow-hidden">
                      <Image src={img} alt={`${project.title} ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  )

  if (project.isPasswordProtected && project.password) {
    return (
      <PasswordProtect
        correctPassword={project.password}
        projectName={project.title}
      >
        {content}
      </PasswordProtect>
    )
  }

  return content
}
```

---

**Usage Notes:**

1. Copy the component you need from this file
2. Adjust props and styling to match your needs
3. All components follow the project's design system
4. Animation patterns are consistent with Framer Motion guidelines
5. TypeScript types are properly defined

**Remember**: These are starting templates. Customize them based on your specific project requirements!
