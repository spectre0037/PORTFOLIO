import { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from './Button';
import { navItems } from '@/data/portfolio';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const results = navItems.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)} className="px-4 py-2">
        <Search size={16} />
        <span className="hidden sm:inline">Command</span>
      </Button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-md">
          <div className="glass w-full max-w-xl rounded-3xl p-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <Search size={16} className="text-white/60" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sections, projects, or shortcuts..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
              />
              <button onClick={() => setOpen(false)} className="text-white/60 transition hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="mt-4 grid gap-2">
              {results.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-[var(--accent)]/40 hover:bg-white/10"
                >
                  {item}
                </a>
              ))}
              {!results.length && <div className="px-4 py-3 text-sm text-white/50">No matching sections.</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
