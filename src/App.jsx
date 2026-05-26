import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Menu, Music2, Pause, Rocket } from 'lucide-react';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { Button } from '@/components/ui/Button';
import { navItems } from '@/data/portfolio';

const HeroSection = lazy(() => import('@/components/sections/HeroSection').then((module) => ({ default: module.HeroSection })));
const AboutSection = lazy(() => import('@/components/sections/AboutSection').then((module) => ({ default: module.AboutSection })));
const ExperienceSection = lazy(() => import('@/components/sections/ExperienceSection').then((module) => ({ default: module.ExperienceSection })));
const TechStackSection = lazy(() => import('@/components/sections/TechStackSection').then((module) => ({ default: module.TechStackSection })));
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection').then((module) => ({ default: module.ProjectsSection })));
const AIShowcaseSection = lazy(() => import('@/components/sections/AIShowcaseSection').then((module) => ({ default: module.AIShowcaseSection })));
const ServicesSection = lazy(() => import('@/components/sections/ServicesSection').then((module) => ({ default: module.ServicesSection })));
const AchievementsSection = lazy(() => import('@/components/sections/AchievementsSection').then((module) => ({ default: module.AchievementsSection })));
const JourneySection = lazy(() => import('@/components/sections/JourneySection').then((module) => ({ default: module.JourneySection })));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection').then((module) => ({ default: module.TestimonialsSection })));
const CertificationsSection = lazy(() => import('@/components/sections/CertificationsSection').then((module) => ({ default: module.CertificationsSection })));
const GitHubStatsSection = lazy(() => import('@/components/sections/GitHubStatsSection').then((module) => ({ default: module.GitHubStatsSection })));
const BlogSection = lazy(() => import('@/components/sections/BlogSection').then((module) => ({ default: module.BlogSection })));
const ContactSection = lazy(() => import('@/components/sections/ContactSection').then((module) => ({ default: module.ContactSection })));
const FooterSection = lazy(() => import('@/components/sections/FooterSection').then((module) => ({ default: module.FooterSection })));

function LoadingBlock() {
  return <div className="mx-auto max-w-7xl px-4 py-24 text-sm text-white/55 sm:px-6 lg:px-8">Loading section...</div>;
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [progress, setProgress] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateEffects = () => {
      const lowPower = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
      document.documentElement.classList.toggle('reduce-motion', mediaQuery.matches || lowPower);
    };

    updateEffects();
    mediaQuery.addEventListener?.('change', updateEffects);

    return () => {
      mediaQuery.removeEventListener?.('change', updateEffects);
    };
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="relative min-h-screen overflow-hidden text-[var(--text)]">
      <div className="noise" />
      <div className="grid-overlay pointer-events-none fixed inset-0 z-0 opacity-[0.35]" />
      <ScrollProgress progress={progress} />

      <header className="section-shell fixed inset-x-0 top-0 z-40 px-4 py-4 sm:px-6 lg:px-8">
        <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 md:px-6">
          <a href="#hero" className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-white uppercase">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] shadow-glow">
              AB
            </span>
            Abdullah
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-white/70 transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

            <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 lg:hidden" onClick={() => setMenuOpen((value) => !value)}>
              <Menu size={18} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="glass mx-auto mt-3 flex max-w-7xl flex-wrap gap-3 rounded-3xl p-4 lg:hidden">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80" onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="relative z-10">
        <Suspense fallback={<LoadingBlock />}>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <TechStackSection />
          <ProjectsSection />
          <AIShowcaseSection />
          <ServicesSection />
          <AchievementsSection />
          <JourneySection />
          <TestimonialsSection />
          <CertificationsSection />
          <GitHubStatsSection />
          <BlogSection />
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <FooterSection year={year} />
      </Suspense>

      <div className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/60 backdrop-blur-xl">
        Press Ctrl/Cmd + K for command palette
      </div>
    </div>
  );
}