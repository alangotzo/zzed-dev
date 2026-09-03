export type Lang = 'en' | 'es';

// Captura la base configurada en Astro (ej: "/zzed-dev/" en GitHub Pages o "/" en local)
const baseUrl = import.meta.env.BASE_URL;

export const translations = {
  en: {
    meta: {
      title: "alangotzo.dev",
      description: "Alan Fernandez — Backend Developer. Go, Python, Js. Cordoba.",
    },
    nav: {
      exp: "exp",
      projects: "projects",
      stack: "stack",
      uses: "uses",
      interests: "interests",
      contact: "contact",
      cv: "cv",
      langSwitch: "es",
      langSwitchHref: `${baseUrl}/es`, // Genera "/zzed-dev/es/"
    },
    hero: {
      badge: "identity_verified",
      bio: "Web developer with freelance experience creating websites and digital solutions for restaurants and retail stores. I am currently seeking my first opportunity with a company where I can continue to grow professionally, expand my knowledge, and apply my skills to contribute to the team's development and success.",
      location: "¡Welcome! 💻 · Cordoba, Argentina 🇦🇷",
      saveContact: "Save Contact",
    },
    roles: ["Software Developer", "JavaScript", "SQL", "Python", "Cordoba 🇦🇷"],
    sections: {
      experience: "experience",
      projects: "projects",
      stack: "stack",
      uses: "uses",
      interests: "interests",
    },
    experience: {
      activeBadge: "active",
    },
    experienceDesc: [
      "Building e-commerce websites, landing pages, and portfolios for businesses looking to take their brand to the next level.",
      "Eager for my first experience as a developer within a company.",
    ],
    projectDesc: [
      "Landing Page for burger joint Frich N' Fries. Informative and functional landing.",
      "Development of a Flask-based API designed for user administration and control, enabling the listing of records and efficient management of system information.",
      "Next project in development...",
    ],
    uses: {
      macSub: "macOS Tahoe",
      desktopSub: "Omarchy · Arch Linux",
      archBtw: "(I use arch btw)",
      displaySub: "2560×1440 · 75Hz · shared between both machines",
      editorLabel: "editor",
      browserLabel: "browser",
      shellLabel: "shell",
      aiLabel: "ai",
    },
    interests: [
      {
        emoji: "🤖",
        title: "Video game development",
        desc: "One of my dreams is to develop a pixel-art style adventure game inspired by titles like Blasphemous.",
        tags: ["C++", "Unity", "2D", "C#"],
      },
      {
        emoji: "⚡",
        title: "Content creation",
        desc: "Interest in creating content for social media, whether detailed posts or custom images and videos.",
        tags: ["Tik Tok", "Adobe", "Canva", "Instagram"],
      },
      {
        emoji: "🎵",
        title: "Music",
        desc: "Fan of Rock, Pop, Metal, and Electronic.",
        tags: ["Rock", "Metal", "Electro", "Rap"],
      },
      {
        emoji: "🎮",
        title: "Gaming",
        desc: "Titles like Devil May Cry and Blasphemous heavily influenced my tastes. I also enjoy online titles like League of Legends.",
        tags: ["Capcom", "Steam", "Riot Games", "The Game Kitchen"],
      },
    ],
    footer: {
      source: "source",
      builtWith: "built with Astro",
    },
    lfm: {
      loading: "loading…",
      nowPlaying: "now playing",
    },
    clock: {
      label: "Cordoba, Argentina",
      locale: "en-US",
    },
    time: {
      d: "d ago",
      h: "h ago",
      m: "m ago",
      now: "just now",
    },
  },
  es: {
    meta: {
      title: "alangotzo.dev",
      description: "Alan Fernandez — Software Developer. JS, Python, IA. Cordoba.",
    },
    nav: {
      exp: "exp",
      projects: "proyectos",
      stack: "stack",
      uses: "setup",
      interests: "intereses",
      contact: "contacto",
      cv: "cv",
      langSwitch: "en",
      langSwitchHref: baseUrl, // Vuelve a la raíz "/zzed-dev/"
    },
    hero: {
      badge: "identidad_verificada",
      bio: "Desarrollador Web con experiencia freelance en el desarrollo de sitios y soluciones digitales para locales gastronómicos y tiendas. Actualmente busco mi primera oportunidad en una empresa donde pueda seguir creciendo profesionalmente, ampliar mis conocimientos y aportar mis habilidades para contribuir al desarrollo y éxito del equipo.",
      location: "¡Bienvenido! 💻 · Cordoba, Argentina 🇦🇷",
      saveContact: "Guardar Contacto",
    },
    roles: ["Full-Stack Developer", "JavaScript", "SQL", "Python", "Argentina 🇦🇷"],
    sections: {
      experience: "experiencia",
      projects: "proyectos",
      stack: "stack",
      uses: "setup",
      interests: "intereses",
    },
    experience: {
      activeBadge: "activo",
    },
    experienceDesc: [
      "Construyendo sitios web e-commerce,landing pages,portfolios para negocios que buscan llevar su marca al siguiente nivel.",
      "Anioso a por mi proxima y primera experiencia dentro de una empresa como Desarrollador.",
    ],
    projectDesc: [
      "Landing Page para Hamburgueseria Frich N' Fries. Landing informativa y funcional.",
      "Desarrollo de una API construida con Flask diseñada para la administración y control de usuarios, permitiendo listar registros y gestionar la información del sistema de manera eficiente.",
      "Proximo proyecto en desarrollo...",
    ],
    uses: {
      macSub: "macOS Tahoe",
      desktopSub: "Omarchy · Arch Linux",
      archBtw: "(I use arch btw)",
      displaySub: "2560×1440 · 75Hz · compartida entre ambas máquinas",
      editorLabel: "editor",
      browserLabel: "navegador",
      shellLabel: "shell",
      aiLabel: "ia",
    },
    interests: [
      {
        emoji: "🤖",
        title: "Desarrollo de videojuegos",
        desc: "Uno de mis sueños es poder desarrollar un juego de aventura estilo Pixel Art inspirado en titulos como Blasphemous.",
        tags: ["C++", "Unity", "2D", "C#"],
      },
      {
        emoji: "⚡",
        title: "Creacion de Contenido",
        desc: "Interes en la creacion de contenido para redes sociales ya sea publicaciones detalladas, imagenes y videos personalizados.",
        tags: ["Tik Tok", "Adobe", "Canva", "Instagram"],
      },
      {
        emoji: "🎵",
        title: "Música",
        desc: "Fan del Rock, Pop, Metal y Electrónica.",
        tags: ["Rock", "Metal", "Electro", "Rap"],
      },
      {
        emoji: "🎮",
        title: "Videojuegos",
        desc: "Titulos como Devil May Cry y Blasphemous influyeron mucho acerca de mis gustos. Tambien disfruto de titulos online como League of Legends",
        tags: ["Capcom", "Steam", "Riot Games", "The Game Kitchen"],
      },
    ],
    footer: {
      source: "código",
      builtWith: "construido con Astro",
    },
    lfm: {
      loading: "cargando…",
      nowPlaying: "escuchando",
    },
    clock: {
      label: "Cordoba, Argentina",
      locale: "es-AR",
    },
    time: {
      d: "d",
      h: "h",
      m: "min",
      now: "ahora",
    },
  },
} as const;

export type Translations = typeof translations[Lang];
