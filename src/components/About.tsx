import { about } from "../data/about";
import { d } from "../lib";

export default function About() {
  return (
    <section className="sec" id="about"><div className="w">
      <div className="sh rv"><div className="mono up">01 / About</div><h2>Ideas into <span className="ser">shipped</span> software</h2></div>
      <div className="bento">
        <div className="card pad bio c4 rv"><h3>{about.bioTitle}</h3>{about.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
        <div className="card pad fa c2 rv" style={d(0.08)}><span className="mono up" style={{ display: "block", marginBottom: 8 }}>Quick facts</span>
          {about.facts.map((f) => <div key={f.label}><span className="mono">{f.label}</span><span>{f.value}</span></div>)}
        </div>
        <div className="card pad c6 rv"><div className="jr">{about.journey.map((j) => <div key={j.year}><span className="mono">{j.year}</span><p>{j.text}</p></div>)}</div></div>
      </div>
    </div></section>
  );
}
