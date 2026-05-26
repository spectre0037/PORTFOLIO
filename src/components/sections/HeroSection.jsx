import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Download, Github, Linkedin, Sparkles, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { heroStats, socialLinks } from '@/data/portfolio';

export function HeroSection() {

  const floatingChips = useMemo(
    () => ['React', 'AI', 'Motion', 'Tailwind', 'Next.js'],
    [],
  );

  return (
    <section id="hero" className="section-shell relative overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-1/2 top-8 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_70%)] blur-3xl" />
        <div className="absolute right-[8%] top-[22%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.35),transparent)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-1 lg:px-8">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
            <Sparkles size={14} className="text-[var(--accent-3)]" />
            Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl xl:text-[7rem]"
          >
            Abdullah Bin Zubair
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.45 }} className="mt-5 text-lg font-medium text-[var(--accent-3)] md:text-2xl">
            Data Scientist | Developer
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg"
          >
            Building intelligent digital experiences, scalable systems, and futuristic interfaces powered by AI and modern web technologies.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-8 flex flex-wrap items-center gap-4">
            <Button>
              View Projects
              <ArrowDownRight size={16} />
            </Button>
            <Button variant="secondary" asChild>
              <a href="#contact">
                <Download size={16} />
                Resume Download
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="https://github.com/spectre0037">
                <Github size={16} />
                GitHub
              </a>
            </Button>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = link.label === 'GitHub' ? Github : link.label === 'LinkedIn' ? Linkedin : Twitter;
              return (
                <a key={link.label} href={link.href} className="glass magnetic-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/75 transition hover:-translate-y-1 hover:text-white">
                  <Icon size={15} />
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass rounded-3xl p-4">
                <div className="text-display text-2xl font-bold text-white">{stat.value}</div>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right-side hero box removed per user request */}
      </div>
    </section>
  );
}
