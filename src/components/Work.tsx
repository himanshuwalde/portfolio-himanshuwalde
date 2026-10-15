import { useEffect, useRef } from "react";
import { allProjects as P, type Project } from "../data/projects";
import { Thumb } from "./Art";
import { Modal } from "./Modal";
import { useModal, useSel } from "../lib";

function PCard({ p, i, open }: { p: Project; i: number; open: (i: number) => void }) {
  return (
    <article className="card pj"><Thumb p={p} i={i} />
      <div className="pb2">
        <div className="tp"><span className="mono up">{p.c}</span>
          {p.ft ? <span className="bd">FEATURED</span> : p.ph ? <span className="bd" style={{ background: "none", color: "var(--mut)", border: "1px solid var(--ln)" }}>COMING SOON</span> : null}
        </div>
        <h3>{p.n}</h3><p>{p.t}</p>
        {!p.ph && <button className="go" onClick={() => open(i)} aria-label={`View case study: ${p.n}`}><span>View case study</span><span>→</span></button>}
      </div>
    </article>
  );
}

function Popup({ i, open, onClose }: { i: number | null; open: boolean; onClose: () => void }) {
  useModal(open, onClose);
  const x = useRef<HTMLButtonElement>(null), r = useRef<HTMLElement>(null);
  useEffect(() => { if (open) { r.current?.scrollTo(0, 0); x.current?.focus(); } }, [open]);
  const p = i === null ? null : P[i];
  return (<>
    <div className={"sc" + (open ? " open" : "")} onClick={onClose} />
    <aside ref={r} className={"dr" + (open ? " open" : "")} role="dialog" aria-modal="true" aria-labelledby="dt">
      {p && i !== null && (<>
        <div className="x"><span className="mono up">{p.c}</span><button ref={x} onClick={onClose}>Close · Esc</button></div>
        <Thumb p={p} i={i} />
        <h3 id="dt">{p.n}</h3><p>{p.t}</p>
        <h4>Problem</h4><p>{p.pr}</p>
        <h4>Highlights</h4><ul className="l">{p.f.map((x) => <li key={x}>{x}</li>)}</ul>
        <h4>Challenges</h4><ul className="l">{p.ch.map((x) => <li key={x}>{x}</li>)}</ul>
        <h4>Stack</h4><ul className="ch">{p.s.map((x) => <li key={x}>{x}</li>)}</ul>
        <div className="row" style={{ marginTop: 28 }}>
          {p.live && <a className="btn p" href={p.live} target="_blank" rel="noopener">Live demo ↗</a>}
          <a className="btn" href={p.repo} target="_blank" rel="noopener">Source ↗</a>
        </div>
      </>)}
    </aside>
  </>);
}

export default function Work() {
  const all = useSel<boolean>(), pr = useSel<number>();
  return (
    <section className="sec" id="work">
      <div className="w">
        <div className="sh rv"><div className="mono up">03 / Projects</div><h2>Selected <span className="ser">work</span></h2><p>A few things I've built. Open a project for the full case study.</p></div>
        <div className="pg">{P.slice(0, 6).map((p, i) => <PCard key={p.n} p={p} i={i} open={pr.show} />)}</div>
        <div className="vr rv"><button className="va" onClick={() => all.show(true)}>View all projects ↗</button></div>
      </div>
      <Modal open={all.o} onClose={all.hide} title="All projects" wide><div className="pg">{P.map((p, i) => <PCard key={p.n} p={p} i={i} open={pr.show} />)}</div></Modal>
      <Popup i={pr.v} open={pr.o} onClose={pr.hide} />
    </section>
  );
}
