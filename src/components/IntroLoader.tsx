import { useCallback, useEffect, useRef, useState } from "react";

const BL = ["initializing environment", "loading modules", "compiling projects", "syncing experience", "launching interface"];
const BT = [0, 0.2, 0.45, 0.7, 0.9];
const DUR = 3300;

// ~3.3s intro: progress ring + self-drawing monogram + boot log, then a split-curtain reveal. Plays once per session.
export default function IntroLoader({ onDone }: { onDone: () => void }) {
  const [off, setOff] = useState(false), [gone, setGone] = useState(false), [fin, setFin] = useState(false), [lines, setLines] = useState<string[]>([]);
  const rp = useRef<SVGCircleElement>(null), bn = useRef<HTMLSpanElement>(null), done = useRef(false);

  const end = useCallback(() => {
    if (done.current) return;
    done.current = true; setOff(true);
    try { sessionStorage.setItem("hw-booted", "1"); } catch { /* ignore */ }
    setTimeout(() => setGone(true), 1300);
    setTimeout(onDone, 400);
  }, [onDone]);

  useEffect(() => {
    let seen: string | null = null;
    try { seen = sessionStorage.getItem("hw-booted"); } catch { /* ignore */ }
    if (seen || matchMedia("(prefers-reduced-motion:reduce)").matches) { done.current = true; setGone(true); onDone(); return; }
    let n = 0, raf = 0, tm = 0;
    const t0 = performance.now();
    const f = (t: number) => {
      if (done.current) return;
      const k = Math.min(1, (t - t0) / DUR), e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      rp.current!.style.strokeDashoffset = String(390 * (1 - e));
      bn.current!.textContent = String(Math.round(e * 100));
      while (n < BL.length && e >= BT[n]) { const l = BL[n++]; setLines((a) => [...a, l]); }
      if (k < 1) raf = requestAnimationFrame(f); else { setFin(true); tm = window.setTimeout(end, 500); }
    };
    raf = requestAnimationFrame(f);
    return () => { cancelAnimationFrame(raf); clearTimeout(tm); };
  }, []);

  if (gone) return null;
  return (
    <div id="boot" className={off ? "off" : ""} role="status" aria-label="Loading portfolio" onClick={end}>
      <div className="pn t" /><div className="pn b" />
      <div className="bc"><div className="bgrid" /><div className="bscan" />
        <div className="bm">
          <svg className="ring" viewBox="0 0 140 140" aria-hidden="true"><circle className="rt" cx="70" cy="70" r="62" /><circle className="rp" ref={rp} cx="70" cy="70" r="62" /><g className="mn"><path d="M40 46V94M40 70H62M62 46V94" /><path d="M72 46L79 94L88 64L97 94L104 46" /></g></svg>
          <ul className="bll">{lines.map((l, i) => <li key={l} className={i < lines.length - 1 || fin ? "ok" : ""}>{l}</li>)}</ul>
        </div>
        <div className="bf"><div className="bn"><span ref={bn}>0</span><small>%</small></div><div className="bt2 mono">HIMANSHU WALDE<br />PORTFOLIO · 2026</div></div>
        <button id="bs" onClick={(e) => { e.stopPropagation(); end(); }}>Skip ↗</button>
      </div>
    </div>
  );
}
