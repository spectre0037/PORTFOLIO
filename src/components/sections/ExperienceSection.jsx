import { SectionHeading } from '@/components/SectionHeading';
import { experience } from '@/data/portfolio';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Experience Timeline"
        title="A vertical timeline of the work that shaped the portfolio mindset."
        description="Each step reflects a deliberate shift from curious experimentation to polished production execution."
      />

      <div className="relative mt-14 grid gap-6">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-2)] to-transparent lg:block" />
        {experience.map((item, index) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="relative grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 pl-16 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 lg:grid-cols-[180px_1fr] lg:items-start lg:pl-20"
            >
              <div className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] shadow-glow">
                <Icon size={14} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent-3)]">{item.year}</p>
                <h3 className="mt-2 text-display text-2xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm leading-8 text-white/65 lg:pt-1">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
