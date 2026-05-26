import { MoonStar, SunMedium } from 'lucide-react';
import { Button } from './Button';

export function ThemeToggle({ theme, onToggle }) {
  return (
    <Button variant="secondary" onClick={onToggle} className="px-4 py-2">
      {theme === 'dark' ? <SunMedium size={16} /> : <MoonStar size={16} />}
      <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </Button>
  );
}
