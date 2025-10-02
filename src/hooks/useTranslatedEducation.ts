import { useLanguage } from '@/contexts/LanguageContext'
import { education } from '@/data/resume'

export function useTranslatedEducation() {
  const { t } = useLanguage()

  const translatedEducation = education.map((edu, index) => {
    const educationKeys = ['centec', 'usp', 'ufc']
    const key = educationKeys[index]
    
    if (key && t(`education.educationList.${key}.degree`) !== `education.educationList.${key}.degree`) {
      return {
        ...edu,
        degree: t(`education.educationList.${key}.degree`),
        institution: t(`education.educationList.${key}.institution`)
      }
    }
    
    return edu
  })

  return translatedEducation
}
