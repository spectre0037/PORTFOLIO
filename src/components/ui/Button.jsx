import { cloneElement, forwardRef, isValidElement } from 'react';
import { cn } from '@/utils/cn';

const variants = {
  primary:
    'bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-white shadow-[0_20px_60px_rgba(79,140,255,0.28)]',
  secondary: 'bg-white/5 text-[var(--text)] border border-[var(--line)] backdrop-blur-xl',
  ghost: 'bg-transparent text-[var(--text)] border border-transparent hover:border-[var(--line)]',
};

export const Button = forwardRef(function Button({ className = '', variant = 'primary', asChild = false, children, ...props }, ref) {
  const buttonClassName = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40 disabled:opacity-60',
    variants[variant],
    className,
  );

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ref,
      className: cn(buttonClassName, children.props.className),
      ...props,
    });
  }

  return (
    <button ref={ref} className={buttonClassName} {...props}>
      {children}
    </button>
  );
});
