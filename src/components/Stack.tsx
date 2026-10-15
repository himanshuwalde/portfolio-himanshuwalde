import { stack } from "../data/stack";
import { d } from "../lib";

export default function Stack() {
  return (
    <section className="sec" id="stack"><div className="w">
      <div className="sh rv"><div className="mono up">02 / Tech stack</div><h2>Area of <span className="ser">expertise</span></h2><p>Languages, frameworks and tools I use to build and ship.</p></div>
      <div className="bento">
        {stack.map((g, i) => (
          <div key={g.group} className={`card pad sg c${g.span} rv`} style={d(i * 0.06)}>
            <h3>{g.group}<span>0{i + 1} · {g.items.length}</span></h3>
            <ul className="ch">{g.items.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        ))}
      </div>
    </div></section>
  );
}
