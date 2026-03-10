export type Lang = "es" | "en";

export const translations: Record<Lang, Record<string, any>> = {
  es: {
    meta: {
      title: "Portfolio de Ismael Bahmane Rodriguez - Desarrollador Full Stack",
      description:
        "Contrata a Ismael Bahmane Rodriguez para crear tu aplicación web o móvil. Desarrollador Full Stack especializado en Java, SpringBoot, Angular y Vue.js.",
    },
    nav: {
      experience: "Experiencia",
      stack: "Stack",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hey, soy Ismael Bahmane",
      description:
        "Desarrollador full stack con experiencia en crear aplicaciones limpias y escalables. Especializado en Java, SpringBoot, Angular y Vue.js. Apasionado por la tecnología y el aprendizaje continuo.  De Valencia, España. ",
      contactMe: "Contáctame",
      available: "Disponible para trabajar",
    },
    skills: {
      techStack: "Stack Tecnológico",
      frontend: "Frontend",
      backend: "Backend",
      generalTools: "Herramientas Generales",
    },
    about: {
      paragraph1:
        "Me llamo Ismael Bahmane Rodriguez. Soy desarrollador full stack con experiencia laboral, especializado en crear aplicaciones limpias y escalables. Proactivo, metódico y con buen trabajo en equipo, me apasiona la tecnología y estoy interesado en seguir mi formación en campos como la inteligencia artificial y el big data.",
      paragraph2:
        "Algunos de mis logros incluyen desarrollar sistemas de estadísticas con Matomo y optimizar tiempos de carga hasta un 90%. También he trabajado en refactorización de código aplicando principios SOLID y polimorfismo para estructuras multicliente.",
      paragraph3:
        "Como desarrollador, he creado APIs REST con SpringBoot, widgets en Angular y Vue.js, y gestionado repositorios con Git y Azure Repos. Mi objetivo es mejorar la eficiencia y escalabilidad en proyectos tecnológicos.",
    },
    experience: {
      item1: {
        date: "Junio 2025 - Presente",
        title: "Desarrollo Full-Stack",
        company: "Everycode SL",
        description:
          "Trabajo en backend con Java-Spring-Maven aplicando patrón facade y arquitectura hexagonal. Desarrollo de sistema de estadísticas con Matomo y Jasper Reports. En frontend con Nuxt-Vue, optimicé tiempos de carga hasta un 90%. Integración CI/CD y metodologías ágiles con Jira.",
      },
      item2: {
        date: "Marzo 2022 - Junio 2025",
        title: "Desarrollo Full-Stack y Soporte a Cliente",
        company: "IT Backing",
        description:
          "Refactorización y optimización con Java 17 aplicando SOLID y polimorfismo. Creación de API REST con SpringBoot para MongoDB y MySQL. Desarrollo de widgets en Angular y configuración de servidores Linux con SSH, SSL y Nginx. Gestión de repositorios con Azure Repos y mentoría a nuevos empleados.",
      },
    },
    misc: {
      toggle: "🇬🇧",
    },
    footer: {
      copy: "© {year} Ismael Bahmane Rodriguez. Casi todos los derechos reservados.",
      aboutLink: "Sobre mí",
      contactLink: "Contacto",
    },
  },
  en: {
    meta: {
      title: "Ismael Bahmane Rodriguez Portfolio - Full Stack Developer",
      description:
        "Hire Ismael Bahmane Rodriguez to build your web or mobile application. Full Stack developer specialized in Java, SpringBoot, Angular and Vue.js.",
    },
    nav: {
      experience: "Experience",
      stack: "Stack",
      about: "About me",
      contact: "Contact",
    },
    hero: {
      greeting: "Hey, I'm Ismael Bahmane",
      description:
        "Full stack developer with experience building clean and scalable applications. Specializing in Java, SpringBoot, Angular, and Vue.js. Passionate about technology and continuous learning. From Valencia, Spain.",
      contactMe: "Contact me",
      available: "Available to work",
    },
    skills: {
      techStack: "Tech Stack",
      frontend: "Frontend",
      backend: "Backend",
      generalTools: "General Tools",
    },
    about: {
      paragraph1:
        "My name is Ismael Bahmane Rodriguez. I am a full stack developer with work experience, specialized in building clean and scalable applications. Proactive, methodical, and a good team worker, I am passionate about technology and interested in continuing my training in fields like artificial intelligence and big data.",
      paragraph2:
        "Some of my achievements include developing statistics systems with Matomo and optimizing load times by up to 90%. I have also worked on code refactoring applying SOLID principles and polymorphism for multi-client structures.",
      paragraph3:
        "As a developer, I have created REST APIs with SpringBoot, widgets in Angular and Vue.js, and managed repositories with Git and Azure Repos. My goal is to improve efficiency and scalability in technology projects.",
    },
    experience: {
      item1: {
        date: "June 2025 - Present",
        title: "Full-Stack Development",
        company: "Everycode SL",
        description:
          "Working on backend with Java-Spring-Maven applying facade pattern and hexagonal architecture. Development of statistics system with Matomo and Jasper Reports. In frontend with Nuxt-Vue, I optimized load times by up to 90%. CI/CD integration and agile methodologies with Jira.",
      },
      item2: {
        date: "March 2022 - June 2025",
        title: "Full-Stack Development and Client Support",
        company: "IT Backing",
        description:
          "Refactoring and optimization with Java 17 applying SOLID and polymorphism. Creation of REST API with SpringBoot for MongoDB and MySQL. Widget development in Angular and configuration of Linux servers with SSH, SSL and Nginx. Repository management with Azure Repos and mentoring new employees.",
      },
    },
    misc: {
      toggle: "🇪🇸",
    },
    footer: {
      copy: "© {year} Ismael Bahmane Rodriguez. Almost all rights reserved.",
      aboutLink: "About me",
      contactLink: "Contact",
    },
  },
};

/**
 * Return a nested translation for a given dot-separated key.
 * Falls back to Spanish if the requested language or key is missing.
 */
export function t(lang: Lang | undefined, key: string): string {
  const chosen = translations[lang as Lang] || translations.es;
  const parts = key.split(".");
  let result: any = chosen;
  for (const part of parts) {
    if (result && typeof result === "object" && part in result) {
      result = result[part];
    } else {
      result = null;
      break;
    }
  }
  if (typeof result === "string") return result;
  // fallback to spanish global
  const fallback = key.split(".").reduce<any>((o, p) => (o && o[p] ? o[p] : null), translations.es);
  return typeof fallback === "string" ? fallback : "";
}
