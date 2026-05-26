import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPinned, PhoneCall, Send } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/Button';
import { contactChannels } from '@/data/portfolio';

export function ContactSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event) => {
    event.preventDefault();
    const body = encodeURIComponent(`Name: ${name}\n\n${message}`);
    window.location.href = `mailto:abdullah@example.com?subject=Portfolio%20Inquiry&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="A cinematic contact area for project inquiries, collaboration, and product conversations."
        description="The form is paired with a glass panel, availability cues, and multiple contact paths."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} onSubmit={submit} className="glass rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm text-white/70">
              Your name
              <input value={name} onChange={(event) => setName(event.target.value)} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/35" placeholder="Enter your name" />
            </label>
            <label className="grid gap-2 text-sm text-white/70">
              Email
              <input type="email" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/35" placeholder="your@email.com" />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm text-white/70">
            Project details
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={7} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/35" placeholder="Tell me about your idea, timeline, and goals." />
          </label>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button type="submit">
              <Send size={16} />
              Send Message
            </Button>
            <Button variant="secondary" asChild>
              <a href="mailto:abdullah@example.com">
                <Mail size={16} />
                Email Directly
              </a>
            </Button>
          </div>
        </motion.form>

        <div className="grid gap-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="glass rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] shadow-glow">
                <PhoneCall />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-3)]">Availability</p>
                <h3 className="text-display text-2xl font-semibold">Open for select opportunities</h3>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/65">Available for freelance, collaborations, portfolio builds, AI product interfaces, and premium frontend execution.</p>
            <div className="mt-5 grid gap-3">
              {contactChannels.map((item) => (
                <a key={item.label} href={item.href} className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-white/75">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }} className="glass overflow-hidden rounded-[2rem] p-4">
            <div className="flex items-center gap-3 px-2 py-2 text-sm text-white/65">
              <MapPinned size={16} className="text-[var(--accent-3)]" />
              Pakistan based, open to remote work worldwide
            </div>
            <div className="mt-2 min-h-[220px] rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(79,140,255,0.2),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
