'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  isWIP?: boolean;
  isPasswordProtected?: boolean;
  href: string;
  category?: 'design' | 'product' | 'both';
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  isWIP = false,
  isPasswordProtected = false,
  href,
  category = 'both'
}: ProjectCardProps) {
  return (
    <Link href={href} className="block group">
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-slate-200">
        <div className="relative aspect-video overflow-hidden bg-slate-100">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}

          {/* WIP Overlay */}
          {isWIP && (
            <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center">
              <div className="text-center text-white">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                <p className="text-sm font-medium">Work in Progress</p>
              </div>
            </div>
          )}

          {/* Password Protected Badge */}
          {isPasswordProtected && !isWIP && (
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="bg-slate-900/80 text-white border-0">
                <Lock className="h-3 w-3 mr-1" />
                Protected
              </Badge>
            </div>
          )}

          {/* Category Badge */}
          {category && (
            <div className="absolute top-3 left-3">
              <Badge
                variant="secondary"
                className={cn(
                  "border-0 capitalize",
                  category === 'design' && "bg-primary-500/90 text-white",
                  category === 'product' && "bg-slate-700/90 text-white",
                  category === 'both' && "bg-slate-900/90 text-white"
                )}
              >
                {category === 'both' ? 'Design & Product' : category}
              </Badge>
            </div>
          )}
        </div>

        <CardHeader>
          <CardTitle className="text-xl text-slate-900 group-hover:text-primary-500 transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-slate-600 line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs text-slate-600 border-slate-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
