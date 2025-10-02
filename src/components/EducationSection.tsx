'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'
import { education } from '@/data/resume'
import { useLanguage } from '@/contexts/LanguageContext'

export function EducationSection() {
  const { t } = useLanguage()
  
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('education.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-card p-6 shadow-lg card-hover border border-border h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-semibold">{edu.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}