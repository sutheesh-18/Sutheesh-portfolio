export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  avatarUrl: string;
  bio: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface NavLink {
  name: string;
  href: string;
}

export const portfolioData = {
  profile: {
    name: "SUTHEESH S",

    title: "Software Developer",

    tagline:
      "I build practical web, AI, and software solutions with a focus on clean code and useful user experiences.",

    location: "India",

    email: "sutheeshselvaraj10@gmail.com",

    github: "https://github.com/sutheesh-18",

    linkedin: "https://www.linkedin.com/in/sutheesh18/",

    avatarUrl: "/img.jpg",

    bio: [
      "I am an MCA student and aspiring software developer interested in Python, full-stack development, AI/ML, data, and cybersecurity.",

      "I enjoy turning ideas into practical applications and learning new technologies by building real projects.",
    ],
  },

  navLinks: [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ] satisfies NavLink[],

  skills: [
    {
      category: "Programming",
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "SQL",
        "PHP",
      ],
    },

    {
      category: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "React",
        "Flask",
        "REST APIs",
      ],
    },

    {
      category: "AI / Data",
      skills: [
        "Machine Learning",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "AI Tools & Concepts",
      ],
    },

    {
      category: "Database & Tools",
      skills: [
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "MongoDB",
        "Git",
        "GitHub",
      ],
    },
  ] satisfies SkillCategory[],

  projects: [
    {
      id: "internet-border-patrol",

      title: "Internet Border Patrol",

      description:
        "A URL safety analyzer for checking suspicious URLs using machine learning and threat-intelligence services.",

      technologies: [
        "Python",
        "Flask",
        "Machine Learning",
        "VirusTotal",
        "JavaScript",
      ],

      githubUrl:
        "https://github.com/sutheesh-18/Internet-Border-Patrol",

      liveUrl: undefined,
    },

    {
      id: "scam-prevention",

      title: "AI-Powered Digital Scam Prevention Assistant",

      description:
        "A cybersecurity-focused application concept for analyzing suspicious digital content and presenting understandable risk information.",

      technologies: [
        "Python",
        "Flask",
        "Machine Learning",
        "NLP",
        "SQLite",
      ],

      githubUrl:
        "https://github.com/sutheesh-18/scam-prevention",

      liveUrl: undefined,
    },

    {
      id: "rental-house-management",

      title: "Rental House Management System",

      description:
        "A web application for managing rental properties, tenants, and related records.",

      technologies: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],

      githubUrl:
        "https://github.com/sutheesh-18/rental_house",

      liveUrl: undefined,
    },
  ] as Project[],

  experience: [] as ExperienceItem[],
};