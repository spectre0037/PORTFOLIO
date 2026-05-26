import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { testimonials } from '@/data/portfolio';

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((value) => (value + 1) % testimonials.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-shell mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Testimonials"
        title="A rotating view of what premium collaboration feels like."
        description="The carousel advances on its own and keeps the tone polished, calm, and product-focused."
      />

      <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4">
        <motion.div animate={{ x: `-${active * 100}%` }} transition={{ duration: 0.8, ease: 'easeInOut' }} className="flex w-full">
          {testimonials.map((item) => (
            <div key={item.name} className="min-w-full p-2 md:p-4">
              <div className="glass rounded-[1.75rem] p-8 md:p-10">
                <Quote className="text-[var(--accent-3)]" />
                <p className="mt-6 max-w-4xl text-xl leading-9 text-white/80 md:text-2xl">{item.quote}</p>
                <div className="mt-8">
                  <div className="text-display text-lg font-semibold">{item.name}</div>
                  <div className="text-sm text-white/55">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
