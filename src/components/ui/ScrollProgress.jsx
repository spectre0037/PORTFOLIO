export function ScrollProgress({ progress }) {
  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-white/5">
      <div
        className="h-full origin-left bg-[linear-gradient(90deg,var(--accent),var(--accent-3))] will-change-transform"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}
