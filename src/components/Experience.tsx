import { internships as E, placeholders } from "../data/experience";
import { Modal, CertViewer } from "./Modal";
import { d, useSel } from "../lib";

export default function Experience() {
  const x = useSel<number>(), c = useSel<number>();
  const it = x.v === null ? null : E[x.v], ph = it ? !it.sum : false;
  return (
    <section className="sec" id="experience">
      <div className="w">
        <div className="sh rv"><div className="mono up">04 / Experience</div><h2>Where I've <span className="ser">worked</span></h2><p>Three internships across web, data and Java development.</p></div>
        <div className="xt">
          {E.map((e, i) => (
            <div key={e.r + e.d} className="xi rv" style={d(i * 0.08)}>
              <div className="dt">{e.d}</div>
              <button className="card pad xcard" onClick={() => x.show(i)} aria-label={`${e.r} at ${e.o} — view details`}>
                <span className="tg">Internship</span><span className="xh">{e.r}</span><span className="mono" style={{ display: "block" }}>{e.o}</span><span className="hint">View details →</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Modal open={x.o} onClose={x.hide} title={it?.r || ""}>
        {it && (
          <div className="xm">
            <div className="row" style={{ alignItems: "center" }}><span className="tg">Internship</span><span className="mono">{it.o} · {it.d}</span></div>
            <h4>Overview</h4><p className={ph ? "phn" : ""}>{it.sum || placeholders.summary}</p>
            <h4>What I worked on</h4><ul className={ph ? "phn" : ""}>{(it.tasks.length ? it.tasks : placeholders.tasks).map((t) => <li key={t}>{t}</li>)}</ul>
            {it.tools.length > 0 && <><h4>Tools &amp; tech</h4><ul className="ch">{it.tools.map((t) => <li key={t}>{t}</li>)}</ul></>}
            {it.out && <><h4>Outcome</h4><p>{it.out}</p></>}
            <div className="row" style={{ marginTop: 28 }}><button className="btn p" onClick={() => c.show(x.v!)}>View certificate ↗</button></div>
            {ph && <div className="nt">Placeholder text — edit the E array in src/data/experience.ts to add your real details.</div>}
          </div>
        )}
      </Modal>
      <CertViewer c={c.v === null ? null : E[c.v].cert} open={c.o} onClose={c.hide} />
    </section>
  );
}
