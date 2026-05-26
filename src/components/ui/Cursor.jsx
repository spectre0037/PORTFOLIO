import { useEffect, useState } from 'react';

export function Cursor() {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (event) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', update);
    return () => window.removeEventListener('pointermove', update);
  }, []);

  return <div className="cursor-glow" style={{ insetInlineStart: point.x, insetBlockStart: point.y }} />;
}
