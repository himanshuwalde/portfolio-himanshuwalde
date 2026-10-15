import { useEffect, useRef, useState } from "react";
import { openResume, useModal } from "../lib";
import { site } from "../data/site";

const L: [string, string][] = [["About", "#about"], ["Stack", "#stack"], ["Work", "#work"], ["Experience", "#experience"], ["Education", "#education"], ["Contact", "#contact"]];

export default function Nav() {
  const [menu, setMenu] = useState(false), [act, setAct] = useState("");
  const sp = useRef<HTMLDivElement>(null), pr = useRef<HTMLButtonElement>(null);
  useModal(menu, () => setMenu(false));

  useEffect(() => {
    let tk = 0;
    const secs = L.map((l) => document.querySelector(l[1])).filter(Boolean) as Element[];
    const upd = () => {
      tk = 0;
      const h = document.documentElement.scrollHeight - innerHeight, k = h > 0 ? Math.min(1, scrollY / h) : 0;
      sp.current!.style.transform = `scaleX(${k})`;
      pr.current!.style.setProperty("--k", String(k));
      pr.current!.classList.toggle("show", scrollY > 400);
      let c = ""; secs.forEach((s) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) c = s.id; });
      setAct(c);
    };
    const on = () => { if (!tk) { tk = 1; requestAnimationFrame(upd); } };
    addEventListener("scroll", on, { passive: true }); upd();
    return () => removeEventListener("scroll", on);
  }, []);

  const theme = () => { const R = document.documentElement; R.dataset.theme = getComputedStyle(R).colorScheme === "light" ? "dark" : "light"; };
  return (<>
    <div id="sp" ref={sp} />
    <header className="nav" id="nl">
      <a className="lg" href="#top"><i />{site.shortName}</a>
      {L.map(([l, h]) => <a key={h} href={h} className={act === h.slice(1) ? "on" : ""}>{l}</a>)}
      <button onClick={openResume}>Resume</button>
      <button id="th" aria-label="Toggle theme" onClick={theme}>◐</button>
      <button id="mb" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} aria-controls="mm" onClick={() => setMenu(!menu)}><i /><i /><i /></button>
    </header>
    <nav id="mm" className={menu ? "open" : ""} aria-label="Mobile">{L.map(([l, h]) => <a key={h} href={h} onClick={() => setMenu(false)}>{l}</a>)}</nav>
    <button className="pr" id="pr" ref={pr} aria-label="Scroll to top" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}><span>↑</span></button>
  </>);
}
