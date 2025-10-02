import { useLanguage } from '@/contexts/LanguageContext'
import { experiences } from '@/data/resume'

export function useTranslatedExperiences() {
  const { t } = useLanguage()

  const translatedExperiences = experiences.map((exp, index) => {
    const experienceKeys = ['vortexmundus', 'cepemar', 'funcap', 'siara', 'ufc', 'funceme', 'petrobras']
    const key = experienceKeys[index]
    
    if (key && t(`experience.experiences.${key}.title`) !== `experience.experiences.${key}.title`) {
      return {
        ...exp,
        title: t(`experience.experiences.${key}.title`),
        description: t(`experience.experiences.${key}.description`),
        achievements: exp.achievements.map((_, achievementIndex) => 
          t(`experience.experiences.${key}.achievements.${achievementIndex}`)
        )
      }
    }
    
    return exp
  })

  return translatedExperiences
}
