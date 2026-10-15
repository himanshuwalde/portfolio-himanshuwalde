import { useEffect, useRef } from "react";

type Pt = { x: number; y: number; vx: number; vy: number };

export default function ParticleBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!, cx = cv.getContext("2d")!, R = document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
    let W = 0, H = 0, mx = -999, my = -999, fr = 0, last = 0, raf = 0, pts: Pt[] = [];
    let rgb = getComputedStyle(R).getPropertyValue("--rgb");
    const size = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = W < 700 ? 24 : Math.min(64, Math.floor((W * H) / 22000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 }));
    };
    const frame = () => {
      // phones: pause drawing while scrolling for smoother scroll
      if (W < 700 && performance.now() - last < 150) { if (!document.hidden) raf = requestAnimationFrame(frame); return; }
      cx.clearRect(0, 0, W, H);
      if (++fr % 30 === 0) rgb = getComputedStyle(R).getPropertyValue("--rgb");
      for (const p of pts) {
        if (!reduce) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
          const dx = p.x - mx, dy = p.y - my;
          if (dx * dx + dy * dy < 19000) { p.x += dx * 0.02; p.y += dy * 0.02; }
        }
        cx.fillStyle = `rgba(${rgb},.5)`; cx.beginPath(); cx.arc(p.x, p.y, 1.5, 0, 6.3); cx.fill();
      }
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], dx = a.x - b.x, dy = a.y - b.y, dd = dx * dx + dy * dy;
        if (dd < 20000) { cx.strokeStyle = `rgba(${rgb},${(1 - dd / 20000) * 0.17})`; cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke(); }
      }
      if (!reduce && !document.hidden) raf = requestAnimationFrame(frame);
    };
    const move = (e: PointerEvent) => { if (W >= 700) { mx = e.clientX; my = e.clientY; } };
    const scroll = () => { last = performance.now(); };
    const vis = () => { if (!document.hidden && !reduce) { cancelAnimationFrame(raf); frame(); } };
    size(); frame();
    addEventListener("resize", size); addEventListener("pointermove", move, { passive: true }); addEventListener("scroll", scroll, { passive: true }); document.addEventListener("visibilitychange", vis);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", size); removeEventListener("pointermove", move); removeEventListener("scroll", scroll); document.removeEventListener("visibilitychange", vis); };
  }, []);
  return (<><canvas id="bg" ref={ref} aria-hidden="true" /><div className="glow" /><div className="grid" /><div className="glow2" /></>);
}
