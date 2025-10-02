export const translations = {
  pt: {
    // Navigation
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      education: "Educação",
      certifications: "Certificações",
      contact: "Contato"
    },
    
    // Hero Section
    hero: {
      greeting: "Olá, eu sou",
      title: "Data Scientist & Oceanographer",
      location: "São Paulo, Brasil",
      description: "Oceanógrafo e Data Scientist com ampla experiência em projetos de apoio à pesquisa e desenvolvimento. Especialista em análise de dados meteoceanográficos, desenvolvimento de soluções tecnológicas e visualização interativa de dados ambientais.",
      downloadCV: "Baixar CV",
      contactMe: "Entrar em Contato"
    },
    
    // Experience Section
    experience: {
      title: "Experiência Profissional",
      subtitle: "Trajetória profissional focada em inovação tecnológica e análise de dados ambientais",
      achievements: "Principais Conquistas",
      tools: "Ferramentas utilizadas"
    },
    
    // Projects Section
    projects: {
      title: "Projetos",
      subtitle: "Projetos inovadores que desenvolvi, focados em análise de dados, visualização interativa e aplicações web modernas.",
      features: "Principais Funcionalidades",
      technologies: "Tecnologias Utilizadas",
      impact: "Impacto",
      accessProject: "Acessar Projeto",
      loadingPreview: "Carregando preview...",
      autoLoadPreview: "Preview será carregado automaticamente",
      projectInDevelopment: "Projeto em desenvolvimento"
    },
    
    // Education Section
    education: {
      title: "Educação",
      subtitle: "Formação acadêmica sólida em Oceanografia e especialização em tecnologias emergentes"
    },
    
    // Certifications Section
    certifications: {
      title: "Certificações",
      subtitle: "Certificações e cursos que demonstram meu compromisso com o aprendizado contínuo e atualização profissional"
    },
    
    // Contact Section
    contact: {
      title: "Entre em Contato",
      subtitle: "Vamos conversar sobre oportunidades, projetos ou colaborações",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      sendMessage: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar mensagem. Tente novamente."
    },
    
    // Footer
    footer: {
      rights: "Todos os direitos reservados",
      builtWith: "Desenvolvido com"
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      certifications: "Certifications",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      title: "Data Scientist & Oceanographer",
      location: "São Paulo, Brazil",
      description: "Oceanographer and Data Scientist with extensive experience in research and development support projects. Specialist in meteoceanographic data analysis, technological solution development, and interactive environmental data visualization.",
      downloadCV: "Download CV",
      contactMe: "Get in Touch"
    },
    
    // Experience Section
    experience: {
      title: "Professional Experience",
      subtitle: "Professional trajectory focused on technological innovation and environmental data analysis",
      achievements: "Key Achievements",
      tools: "Tools used"
    },
    
    // Projects Section
    projects: {
      title: "Projects",
      subtitle: "Innovative projects I've developed, focused on data analysis, interactive visualization, and modern web applications.",
      features: "Key Features",
      technologies: "Technologies Used",
      impact: "Impact",
      accessProject: "Access Project",
      loadingPreview: "Loading preview...",
      autoLoadPreview: "Preview will load automatically",
      projectInDevelopment: "Project in development"
    },
    
    // Education Section
    education: {
      title: "Education",
      subtitle: "Solid academic background in Oceanography and specialization in emerging technologies"
    },
    
    // Certifications Section
    certifications: {
      title: "Certifications",
      subtitle: "Certifications and courses that demonstrate my commitment to continuous learning and professional development"
    },
    
    // Contact Section
    contact: {
      title: "Get in Touch",
      subtitle: "Let's talk about opportunities, projects, or collaborations",
      name: "Name",
      email: "Email",
      message: "Message",
      sendMessage: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again."
    },
    
    // Footer
    footer: {
      rights: "All rights reserved",
      builtWith: "Built with"
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKeys = keyof typeof translations.pt;
