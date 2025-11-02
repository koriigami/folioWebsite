'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Calendar, Clock, Users, Target, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/projects"
import ReactMarkdown from 'react-markdown'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [password, setPassword] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(!project.isPasswordProtected)
  const [error, setError] = useState("")

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === project.password) {
      setIsUnlocked(true)
      setError("")
    } else {
      setError("Incorrect password. Please try again.")
    }
  }

  if (project.isPasswordProtected && !isUnlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">{project.title}</h1>
            <p className="text-slate-600">This project is password protected.</p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="mt-1"
              />
              {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
            </div>
            <Button type="submit" className="w-full bg-primary-500 hover:bg-primary-600">
              Unlock Project
            </Button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-primary-500 text-white capitalize">
                {project.category === 'both' ? 'Design & Product' : project.category}
              </Badge>
              {project.isWIP && (
                <Badge variant="outline" className="border-slate-400">
                  Work in Progress
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-slate-600 mb-6">{project.description}</p>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Calendar className="h-4 w-4 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-slate-500">Year</p>
                  <p className="text-slate-900 font-medium">{project.year}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-slate-500">Duration</p>
                  <p className="text-slate-900 font-medium">{project.duration}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Users className="h-4 w-4 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-slate-500">Role</p>
                  <p className="text-slate-900 font-medium">{project.role}</p>
                </div>
              </div>
              {project.team && (
                <div className="flex items-start gap-2">
                  <Target className="h-4 w-4 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-slate-500">Team</p>
                    <p className="text-slate-900 font-medium">{project.team}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero Image */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        )}

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-sm font-medium text-slate-500 mb-3">Technologies & Skills</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-slate-700 border-slate-300">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        <Separator className="my-8" />

        {/* Long Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-slate max-w-none mb-12"
        >
          <ReactMarkdown
            components={{
              h1: ({ ...props }) => <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-8" {...props} />,
              h2: ({ ...props }) => <h3 className="text-2xl font-bold text-slate-900 mb-3 mt-6" {...props} />,
              h3: ({ ...props }) => <h4 className="text-xl font-semibold text-slate-900 mb-2 mt-4" {...props} />,
              p: ({ ...props }) => <p className="text-slate-600 mb-4 leading-relaxed" {...props} />,
              ul: ({ ...props }) => <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2" {...props} />,
              ol: ({ ...props }) => <ol className="list-decimal list-inside text-slate-600 mb-4 space-y-2" {...props} />,
            }}
          >
            {project.longDescription}
          </ReactMarkdown>
        </motion.div>

        {/* Additional Images */}
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((img, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-slate-100">
                  <Image
                    src={img}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Outcome */}
        {project.outcome && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-12"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">Outcome</h3>
            <p className="text-slate-700">{project.outcome}</p>
          </motion.div>
        )}

        {/* External Link */}
        {project.link && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button asChild variant="outline" className="border-primary-500 text-primary-500 hover:bg-primary-50">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Live Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
