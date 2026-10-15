import { useEffect, useRef, useState } from "react";

export default function Counter({ n, d = 0, s = "" }: { n: number; d?: number; s?: string }) {
  const [v, setV] = useState(n.toFixed(d) + s);
  const r = useRef<HTMLElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const f = (t: number) => {
        const k = Math.min(1, (t - t0) / 1200);
        setV((n * (1 - Math.pow(1 - k, 3))).toFixed(d) + (k === 1 ? s : ""));
        if (k < 1) raf = requestAnimationFrame(f);
      };
      raf = requestAnimationFrame(f);
    }, { threshold: 0.1 });
    io.observe(r.current!);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);
  return <b ref={r}>{v}</b>;
}
