'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { personalInfo, skills } from '@/data/resume'
import { Button } from './Button'
import { useLanguage } from '@/contexts/LanguageContext'

export function HeroSection() {
  const { t } = useLanguage()
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container-max section-padding">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              <span className="gradient-text">
                {personalInfo.name}
              </span>
            </h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              {t('hero.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground mb-12"
            >
              <div className="flex items-center gap-2 bg-card/30 px-4 py-2 border border-border">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{t('hero.location')}</span>
              </div>
              <div className="flex items-center gap-2 bg-card/30 px-4 py-2 border border-border">
                <Mail className="h-4 w-4 text-primary" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 bg-card/30 px-4 py-2 border border-border">
                <Phone className="h-4 w-4 text-primary" />
                <span>{personalInfo.phone}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-16"
            >
              <Button
                variant="outline"
                onClick={() => window.open(personalInfo.linkedin, '_blank')}
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                {t('hero.linkedin')}
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(personalInfo.github, '_blank')}
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                {t('hero.github')}
              </Button>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.contactMe')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                {t('hero.technicalSkills')}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-semibold text-foreground mb-3 text-center border-b border-border pb-2">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillList.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 1.0 + index * 0.1 + skillIndex * 0.05 
                          }}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors card-hover"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative mt-12"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}