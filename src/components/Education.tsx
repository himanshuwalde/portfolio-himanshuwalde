import { useEffect, useRef } from "react";
import { certifications as CT, education, type Cert } from "../data/education";
import { AW, EXT } from "./Art";
import { Modal, CertViewer } from "./Modal";
import { useSel } from "../lib";

function Card({ c, open }: { c: Cert; open: () => void }) {
  return (
    <button className="cc" onClick={open}>
      <span className="ct0"><span className="ic"><AW /></span>{c.y && <span className="yr">{c.y}</span>}</span>
      <span className="tt">{c.t}</span><span className="is">{c.i}</span>
      <span className="vw"><span>View certificate</span><EXT /></span>
    </button>
  );
}

export default function Education() {
  const all = useSel<boolean>(), cert = useSel<Cert>();
  const cr = useRef<HTMLDivElement>(null), pi = useRef<HTMLElement>(null);
  useEffect(() => {
    const c = cr.current!, i = pi.current!, tr = i.parentElement!;
    const f = () => {
      const w = c.scrollWidth, v = c.clientWidth;
      if (w <= v + 2) { tr.style.visibility = "hidden"; return; }
      tr.style.visibility = "";
      const t = tr.clientWidth, tw = Math.max(0.15, v / w) * t;
      i.style.width = tw + "px"; i.style.transform = `translateX(${(c.scrollLeft / (w - v)) * (t - tw)}px)`;
    };
    c.addEventListener("scroll", f, { passive: true }); addEventListener("resize", f); f();
    const id = setTimeout(f, 600);
    return () => { c.removeEventListener("scroll", f); removeEventListener("resize", f); clearTimeout(id); };
  }, []);
  return (
    <section className="sec" id="education"><div className="w">
      <div className="sh rv"><div className="mono up">05 / Education</div><h2>Where I <span className="ser">learn</span></h2></div>
      <div className="card pad ed rv"><span className="mono">{education.period}</span><h3>{education.degree}</h3><p>{education.description}</p></div>
      <div className="ch2 rv"><div className="chl"><span className="ic"><AW /></span><h3>Certifications</h3></div><button className="va" onClick={() => all.show(true)}>View all ↗</button></div>
      <div className="cr rv" ref={cr}>{CT.map((c) => <Card key={c.t} c={c} open={() => cert.show(c)} />)}</div>
      <div className="cp" aria-hidden="true"><i ref={pi} /></div>
      <Modal open={all.o} onClose={all.hide} title="All certifications" wide><div className="cgrid">{CT.map((c) => <Card key={c.t} c={c} open={() => cert.show(c)} />)}</div></Modal>
      <CertViewer c={cert.v} open={cert.o} onClose={cert.hide} />
    </div></section>
  );
}
