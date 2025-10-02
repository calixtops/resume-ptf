'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Globe, Code, Zap, Target, Loader2 } from 'lucide-react'
import { Button } from './Button'
import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslatedProjects } from '@/hooks/useTranslatedProjects'

export function ProjectsSection() {
  const { t } = useLanguage()
  const projects = useTranslatedProjects()
  const [loadedProjects, setLoadedProjects] = useState<Set<number>>(new Set())
  const [loadingProjects, setLoadingProjects] = useState<Set<number>>(new Set())
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  // Intersection Observer para carregar iframes quando visíveis
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-project-index') || '0')
            if (!loadedProjects.has(index) && !loadingProjects.has(index)) {
              setLoadingProjects(prev => new Set(prev).add(index))
              // Simular carregamento com delay para melhor UX
              setTimeout(() => {
                setLoadedProjects(prev => new Set(prev).add(index))
                setLoadingProjects(prev => {
                  const newSet = new Set(prev)
                  newSet.delete(index)
                  return newSet
                })
              }, 1000)
            }
          }
        })
      },
      { threshold: 0.3, rootMargin: '50px' }
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [loadedProjects, loadingProjects])

  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase()
    if (techLower.includes('python')) return '🐍'
    if (techLower.includes('react')) return '⚛️'
    if (techLower.includes('javascript')) return '🟨'
    if (techLower.includes('dash')) return '📊'
    if (techLower.includes('flutter')) return '📱'
    if (techLower.includes('machine learning')) return '🤖'
    if (techLower.includes('sql')) return '🗄️'
    if (techLower.includes('git')) return '🔧'
    return '💻'
  }

  const getTechColor = (tech: string) => {
    const techLower = tech.toLowerCase()
    if (techLower.includes('python')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    if (techLower.includes('react')) return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200'
    if (techLower.includes('javascript')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    if (techLower.includes('dash')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    if (techLower.includes('flutter')) return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
    if (techLower.includes('machine learning')) return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
    if (techLower.includes('sql')) return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
    return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  }

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={(el) => { projectRefs.current[index] = el }}
              data-project-index={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card shadow-xl card-hover overflow-hidden border border-border rounded-2xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left side - Content */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>
                      {project.link && (
                        <Button
                          size="sm"
                          onClick={() => window.open(project.link, '_blank')}
                          className="ml-4 flex items-center gap-2 shrink-0"
                        >
                          <Globe className="h-4 w-4" />
                          <span className="hidden sm:inline">{t('projects.viewProject')}</span>
                        </Button>
                      )}
                    </div>

                    {/* Features */}
                    {project.features && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-primary" />
                          {t('projects.features')}
                        </h4>
                        <ul className="space-y-2">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Code className="h-4 w-4 text-primary" />
                        {t('projects.technologies')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${getTechColor(tech)}`}
                          >
                            <span className="mr-1">{getTechIcon(tech)}</span>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    {project.impact && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Target className="h-4 w-4 text-primary" />
                          {t('projects.impact')}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      {project.link && (
                        <Button
                          onClick={() => window.open(project.link, '_blank')}
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {t('projects.accessProject')}
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Right side - Preview */}
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:p-10 flex items-center justify-center">
                    {project.link ? (
                      <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg border border-border">
                        {loadingProjects.has(index) ? (
                          <div className="w-full h-full flex items-center justify-center bg-card">
                            <div className="text-center">
                              <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
                              <p className="text-sm text-muted-foreground">{t('projects.loadingPreview')}</p>
                            </div>
                          </div>
                        ) : loadedProjects.has(index) ? (
                          <iframe
                            src={project.link}
                            className="w-full h-full"
                            title={`Preview do ${project.title}`}
                            sandbox="allow-scripts allow-same-origin allow-forms"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-card">
                            <div className="text-center">
                              <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <Globe className="h-8 w-8 text-white" />
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {t('projects.autoLoadPreview')}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <Globe className="h-16 w-16 text-white" />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {t('projects.projectInDevelopment')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}