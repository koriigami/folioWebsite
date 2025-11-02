'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  Instagram,
  Dribbble,
  Figma,
  PenTool
} from "lucide-react"
import Link from "next/link"

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ketan-damle98/",
    icon: <Linkedin className="h-5 w-5" />
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/koriigami",
    icon: <Dribbble className="h-5 w-5" />
  },
  {
    name: "Figma",
    href: "https://www.figma.com/@kagadmodyaa",
    icon: <Figma className="h-5 w-5" />
  },
  {
    name: "GitHub",
    href: "https://github.com/koriigami",
    icon: <Github className="h-5 w-5" />
  },
  {
    name: "Medium",
    href: "https://medium.com/@koriigami",
    icon: <PenTool className="h-5 w-5" />
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kagadmodyaaa/",
    icon: <Instagram className="h-5 w-5" />
  },
  {
    name: "Twitter",
    href: "https://x.com/koriigami",
    icon: <Twitter className="h-5 w-5" />
  },
  {
    name: "Email",
    href: "mailto:koriigami@gmail.com",
    icon: <Mail className="h-5 w-5" />
  }
]

export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Ketan Damle
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-600 mb-6">
            Product Designer & Product Manager
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Crafting delightful user experiences and driving product strategy.
            Passionate about solving complex problems through design and data-driven decisions.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-primary-500 transition-colors rounded-lg hover:bg-slate-100"
              aria-label={link.name}
            >
              {link.icon}
            </Link>
          ))}
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary-500 hover:bg-primary-600 text-white"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
