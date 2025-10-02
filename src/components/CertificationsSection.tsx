'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '@/data/resume'
import { Button } from './Button'
import { useLanguage } from '@/contexts/LanguageContext'

export function CertificationsSection() {
  const { t } = useLanguage()
  
  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('certifications.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('certifications.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(certifications).map(([category, certs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  {category}
                </h3>
                <div className="flex-grow h-0.5 bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + index * 0.1 
                    }}
                    viewport={{ once: true }}
                    className="group bg-card p-6 shadow-md card-hover border border-border"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-grow">
                        <div className="text-sm font-semibold text-primary mb-1">
                          {cert.year}
                        </div>
                        <h4 className="font-semibold text-card-foreground line-clamp-2 mb-2">
                          {cert.title}
                        </h4>
                        <div className="text-sm text-muted-foreground">
                          {cert.provider}
                        </div>
                      </div>
                    </div>

                    {cert.credential && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            Credential ID
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              const baseUrl = cert.provider === 'Udemy' 
                                ? 'https://www.udemy.com/certificate/' 
                                : 'https://cursos.alura.com.br/certificate/'
                              window.open(`${baseUrl}${cert.credential}`, '_blank')
                            }}
                            className="p-1 h-auto"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="text-xs font-mono text-muted-foreground mt-1 truncate">
                          {cert.credential}
                        </div>
                      </div>
                    )}

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}