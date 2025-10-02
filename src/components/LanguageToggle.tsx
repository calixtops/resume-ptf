'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border hover:bg-accent/10 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={language === 'pt' ? t('common.switchToEnglish') : t('common.switchToPortuguese')}
    >
      <Globe className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium text-foreground">
        {language === 'pt' ? 'EN' : 'PT'}
      </span>
    </motion.button>
  )
}
