import { useLanguage } from '@/contexts/LanguageContext'
import { projects } from '@/data/resume'

export function useTranslatedProjects() {
  const { t } = useLanguage()

  const translatedProjects = projects.map((project, index) => {
    const projectKeys = ['websig', 'dashboard', 'pedea', 'siara']
    const key = projectKeys[index]
    
    if (key && t(`projects.projectList.${key}.title`) !== `projects.projectList.${key}.title`) {
      return {
        ...project,
        title: t(`projects.projectList.${key}.title`),
        description: t(`projects.projectList.${key}.description`),
        features: project.features?.map((_, featureIndex) => 
          t(`projects.projectList.${key}.features.${featureIndex}`)
        ) || [],
        impact: t(`projects.projectList.${key}.impact`)
      }
    }
    
    return project
  })

  return translatedProjects
}
