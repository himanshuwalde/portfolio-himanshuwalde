import Counter from "./Counter";
import { d, openResume } from "../lib";
import { hero } from "../data/hero";

const k = (t: string) => `<span class="k">${t}</span>`, f = (t: string) => `<span class="f">${t}</span>`, s = (t: string) => `<span class="s">"${t}"</span>`;
const c = hero.code;
const CODE = `${k("const")} ${f(c.variable)} = {
  ${f("role")}: ${s(c.role)},
  ${f("based")}: ${s(c.based)},
  ${f("studying")}: ${s(c.studying)},
  ${f("focus")}: [${c.focus.map(s).join(", ")}],
  ${f("graduating")}: ${k(String(c.graduating))},
  ${f("openToWork")}: ${k(String(c.openToWork))},
};`;

export default function Hero() {
  return (
    <section className="hero"><div className="w">
      <div className="hg">
        <div>
          <div className="hi mono rv"><i />{hero.badge}</div>
          <h1 className="rv" style={d(0.06)}>{hero.firstName}<br /><span className="ser">{hero.lastName}</span></h1>
          <div className="rl rv" style={d(0.12)}>{hero.roleLine}</div>
          <p className="lede rv" style={d(0.18)}>{hero.intro}</p>
          <div className="row rv" style={d(0.24)}><a className="btn p" href="#work">View projects →</a><button className="btn" onClick={openResume}>Resume ↓</button><a className="btn" href="#contact">Contact</a></div>
        </div>
        <div className="code rv" style={d(0.2)}><div className="wh"><i /><i /><i /><span className="mono">profile.ts</span></div><pre dangerouslySetInnerHTML={{ __html: CODE }} /></div>
      </div>
      <div className="stats rv" style={d(0.3)}>
        {hero.stats.map((x) => <div key={x.label} className="stat"><Counter n={x.n} d={x.decimals} s={x.suffix} /><span className="mono">{x.label}</span></div>)}
      </div>
    </div></section>
  );
}
