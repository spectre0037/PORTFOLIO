import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { navItems } from '@/data/portfolio';

export function FooterSection({ year }) {
  return (
    <footer id="footer" className="section-shell border-t border-white/10 bg-black/20 px-4 py-10 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.25em] uppercase text-white/80">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] shadow-glow">AB</span>
            Abdullah Bin Zubair
          </div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/55">
            AI Developer, Full Stack Engineer, and creative technologist building premium digital products with motion, clarity, and intent.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:text-white">
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <div>© {year} Abdullah Bin Zubair. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="https://github.com" className="transition hover:text-white"><Github size={16} /></a>
          <a href="https://linkedin.com" className="transition hover:text-white"><Linkedin size={16} /></a>
          <a href="mailto:abdullah@example.com" className="transition hover:text-white"><Mail size={16} /></a>
          <span className="flex items-center gap-2">
            <Sparkles size={14} className="text-[var(--accent-3)]" /> Crafted with motion and intention
          </span>
        </div>
      </div>
    </footer>
  );
}
