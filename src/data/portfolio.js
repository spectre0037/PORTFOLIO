import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Component,
  Code2,
  Database,
  Feather,
  GitBranch,
  GraduationCap,
  Globe2,
  Shield,
  Sparkles,
  Trophy,
  Workflow,
} from 'lucide-react';

export const navItems = ['About', 'Experience', 'Tech Stack', 'Projects', 'AI', 'Services', 'Contact'];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/spectre0037', icon: GitBranch },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', icon: BriefcaseBusiness },
  { label: 'X', href: 'https://twitter.com/your-handle', icon: Sparkles },
  { label: 'Email', href: 'mailto:your.email@example.com', icon: ArrowRight },
];

export const heroStats = [
  { label: 'Intelligent systems shipped', value: '18+' },
  { label: 'Design-forward builds', value: '30+' },
  { label: 'AI prototypes', value: '12+' },
  { label: 'Years exploring product craft', value: '4+' },
];

export const aboutStats = [
  { label: 'Projects completed', value: '25+' },
  { label: 'Technologies mastered', value: '20+' },
  { label: 'Years of experience', value: '4+' },
  { label: 'Clients worked with', value: '10+' },
];

export const experience = [
  {
    year: '2021 - Present',
    title: 'Full Stack Development',
    description: 'Built responsive product experiences, dashboards, and scalable apps with a focus on polished UI and reliable architecture.',
    icon: Component,
  },
  {
    year: '2022 - Present',
    title: 'AI Projects',
    description: 'Explored intelligent assistants, prediction flows, and automation systems that combine product thinking with applied ML.',
    icon: BrainCircuit,
  },
  {
    year: '2022 - Present',
    title: 'React and Next.js Work',
    description: 'Shipped fast, SEO-friendly interfaces with reusable design systems and highly animated frontend architecture.',
    icon: Code2,
  },
  {
    year: '2023 - Present',
    title: 'Database Systems',
    description: 'Modeled secure data layers for analytics, authentication, workflows, and content-rich production systems.',
    icon: Database,
  },
  {
    year: '2023 - Present',
    title: 'UI and UX Design',
    description: 'Designed premium experiences with clarity, motion, and hierarchy tuned for modern startup-grade products.',
    icon: Feather,
  },
  {
    year: '2024 - Present',
    title: 'Leadership and Society Work',
    description: 'Contributed to university and society initiatives while coordinating teams around execution and quality.',
    icon: Shield,
  },
];

export const techCategories = [
  { title: 'Data Analysis/Visualization', color: 'from-white/10 to-transparent', items: ['Tableau', 'PowerBI', 'Python'] },
  { title: 'AI/ML', color: 'from-accentCyan/30 to-transparent', items: ['Python', 'LLM Apps', 'Recommendation Systems', 'Analytics'] },
  { title: 'Databases', color: 'from-white/15 to-transparent', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { title: 'DevOps', color: 'from-accentCyan/20 to-transparent', items: ['Git', 'GitHub'] },
  { title: 'Cloud/Hosting', color: 'from-accentBlue/20 to-transparent', items: ['Vercel', 'Netlify', 'GitHub Actions', 'AWS'] },
  { title: 'Frontend', color: 'from-accentBlue/30 to-transparent', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'GSAP', 'Framer Motion'] },
  { title: 'Backend', color: 'from-accentPurple/30 to-transparent', items: ['Node.js', 'Express', 'Prisma', 'Clerk'] },
  { title: 'Design Tools', color: 'from-accentPurple/20 to-transparent', items: ['Figma', 'Design Systems', 'Motion Prototyping', 'Content Strategy', 'Canva'] },
  { title: 'Languages', color: 'from-white/10 to-transparent', items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL', 'PHP'] },
];

export const projects = [
  { title: 'LuminEd', category: 'Featured Product', summary: 'An elevated learning platform concept with guided flows, premium dashboards, and elegant student-facing interactions.', stack: ['Next.js', 'Tailwind', 'Framer Motion', 'Firebase'], href: '#contact', repo: '#', accent: 'from-accentBlue/40 via-accentPurple/20 to-transparent' },
  { title: 'MindCare', category: 'Health AI', summary: 'A compassionate AI-assisted wellness product with intelligent onboarding, analytics, and calming UX patterns.', stack: ['React', 'GSAP', 'Node.js', 'MongoDB'], href: '#contact', repo: '#', accent: 'from-accentCyan/40 via-accentBlue/20 to-transparent' },
  { title: 'Relative Grading System', category: 'Academic System', summary: 'A structured grading solution with data logic, admin workflows, and clear role-based dashboards.', stack: ['React', 'Prisma', 'PostgreSQL', 'Node.js'], href: '#contact', repo: '#', accent: 'from-white/15 via-accentBlue/20 to-transparent' },
  { title: 'AI Assistant Projects', category: 'AI Automation', summary: 'Multiple assistant-style systems designed to streamline tasks, surface insights, and accelerate workflows.', stack: ['Python', 'LLM APIs', 'Analytics', 'UI Systems'], href: '#contact', repo: '#', accent: 'from-accentCyan/40 via-accentPurple/20 to-transparent' },
  { title: 'School Management Dashboard', category: 'Operations', summary: 'A polished admin suite for attendance, notices, records, and school-wide operational visibility.', stack: ['React', 'Node.js', 'Express', 'MySQL'], href: '#contact', repo: '#', accent: 'from-accentBlue/30 via-white/10 to-transparent' },
  { title: 'WordPress Client Projects', category: 'Client Delivery', summary: 'Conversion-focused client websites tuned for speed, content clarity, and maintainable delivery.', stack: ['WordPress', 'Figma', 'SEO', 'Performance'], href: '#contact', repo: '#', accent: 'from-accentPurple/30 via-accentBlue/10 to-transparent' },
];

export const aiProjects = ['AI assistants', 'Recommendation systems', 'Machine learning systems', 'AI dashboards', 'Intelligent analytics', 'Automation systems'];

export const services = ['Full Stack Development', 'AI Solutions', 'UI/UX Design', 'Portfolio Websites', 'SaaS Applications', 'Dashboard Development', 'WordPress Development', 'Hosting & Deployment', 'Animation & Interactive Design'];

export const achievements = [
  { label: 'Hackathons participated', value: '08', icon: Trophy },
  { label: 'University projects shipped', value: '15+', icon: GraduationCap },
  { label: 'Leadership and society roles', value: '06', icon: Workflow },
  { label: 'Client work and deliveries', value: '10+', icon: Globe2 },
];

export const journey = [
  { step: '01', title: 'Learning programming', description: 'Started with curiosity, fundamentals, and the thrill of turning ideas into working code.' },
  { step: '02', title: 'Mastering frontend', description: 'Moved into design systems, motion, and interfaces that feel deliberate instead of generic.' },
  { step: '03', title: 'Becoming full stack', description: 'Expanded into backend logic, APIs, authentication, and production-ready architecture.' },
  { step: '04', title: 'Entering AI', description: 'Explored intelligent systems, assistants, and analytics that can feel useful and human.' },
  { step: '05', title: 'Building production projects', description: 'Focused on real outcomes, reliable delivery, and polished digital experiences.' },
  { step: '06', title: 'Creating scalable systems', description: 'Now building with longevity in mind, blending creativity, performance, and engineering rigor.' },
];

export const testimonials = [
  { name: 'Creative Lead', role: 'Startup Founder', quote: 'Abdullah brings rare taste to engineering. The motion, pacing, and execution feel premium from the first interaction.' },
  { name: 'Product Manager', role: 'AI Platform Team', quote: 'He translates complex requirements into elegant systems with a level of polish that is unusually strong for a developer.' },
  { name: 'Client Partner', role: 'WordPress Delivery', quote: 'Fast, clear, and thoughtful. The final result exceeded expectations and looked like a top-tier startup product.' },
];

export const certifications = [
  { title: 'Full Stack Development', issuer: 'Self-driven mastery', link: '#contact' },
  { title: 'AI Systems & Analytics', issuer: 'Applied projects', link: '#contact' },
  { title: 'Modern Web UI', issuer: 'Motion-first practice', link: '#contact' },
  { title: 'Database Architecture', issuer: 'Production workflows', link: '#contact' },
];

export const githubStats = [
  { label: 'Commits this year', value: '240+' },
  { label: 'Repositories touched', value: '18+' },
  { label: 'Primary languages', value: '5' },
  { label: 'Current streak', value: '23d' },
];

export const blogInsights = [
  { title: 'Building cinematic user experiences with React', tag: 'Web Animation' },
  { title: 'How AI changes product design decisions', tag: 'AI' },
  { title: 'Why motion design matters in modern dashboards', tag: 'UI/UX' },
  { title: 'From data science to practical full stack products', tag: 'Data Science' },
];

export const contactChannels = [
  { label: 'Email', value: 'abdullah@example.com', href: 'mailto:abdullah@example.com' },
  { label: 'GitHub', value: '@abdullah', href: 'https://github.com' },
  { label: 'Location', value: 'Pakistan', href: '#' },
];
