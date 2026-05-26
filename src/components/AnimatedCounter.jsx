export function AnimatedCounter({ value, label, suffix = '', duration = 1500 }) {
  const target = Number.parseInt(String(value).replace(/[^0-9]/g, ''), 10) || 0;
  return (
    <div className="glass rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1">
      <div className="text-display text-3xl font-bold text-white md:text-4xl">
        {String(target).padStart(String(target).length, '0')}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-white/60">{label}</p>
    </div>
  );
}
