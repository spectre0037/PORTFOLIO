import { cn } from '@/utils/cn';

export function Card({ className = '', children }) {
  return <div className={cn('glass rounded-3xl p-6', className)}>{children}</div>;
}
