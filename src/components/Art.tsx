import type { Cert } from "../data/education";
import { site } from "../data/site";

const G = [["#143a2a", "#b7ff3c"], ["#12304a", "#5eead4"], ["#33173f", "#f0abfc"]];

export function Shot({ i }: { i: number }) {
  const [a, b] = G[i % 3];
  return (
    <svg viewBox="0 0 640 360" role="img" aria-label="Placeholder screenshot">
      <defs><linearGradient id={`g${i}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor="#06080a" /></linearGradient></defs>
      <rect width="640" height="360" fill={`url(#g${i})`} />
      <rect x="24" y="24" width="592" height="312" rx="14" fill="#000" opacity=".35" stroke="#fff" strokeOpacity=".12" />
      {[46, 64, 82].map((x) => <circle key={x} cx={x} cy="46" r="5" fill="#fff" opacity=".35" />)}
      <rect x="48" y="80" width="200" height="26" rx="6" fill={b} opacity=".85" />
      {[70, 48, 86, 36, 62].map((w, k) => <rect key={k} x="48" y={132 + k * 26} width={w * 3} height="10" rx="5" fill={b} opacity={0.5 - k * 0.07} />)}
      <rect x="400" y="100" width="190" height="200" rx="12" fill={b} opacity=".13" />
      <path d="M416 270 L460 220 L500 244 L540 170 L576 196" fill="none" stroke={b} strokeWidth="3" />
      <text x="320" y="324" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#fff" opacity=".4">PLACEHOLDER · REPLACE WITH SCREENSHOT</text>
    </svg>
  );
}

export function Thumb({ p, i }: { p: { img?: string; n: string }; i: number }) {
  return <div className="th">{p.img ? <img src={p.img} alt={`${p.n} screenshot`} loading="lazy" /> : <Shot i={i} />}</div>;
}

export function CertArt({ c }: { c: Cert }) {
  return (
    <svg viewBox="0 0 800 560" role="img" aria-label="Placeholder certificate">
      <rect width="800" height="560" fill="#fbfaf3" />
      <rect x="24" y="24" width="752" height="512" fill="none" stroke="#b08d3c" strokeWidth="3" />
      <rect x="38" y="38" width="724" height="484" fill="none" stroke="#b08d3c" />
      <g textAnchor="middle" fontFamily="Georgia,serif" fill="#2a2a24">
        <text x="400" y="130" fontSize="20" letterSpacing="6" fill="#b08d3c">CERTIFICATE OF COMPLETION</text>
        <text x="400" y="200" fontSize="16" fontStyle="italic">This is to certify that</text>
        <text x="400" y="262" fontSize="44">{site.name}</text>
        <text x="400" y="322" fontSize="16" fontStyle="italic">has successfully completed</text>
        <text x="400" y="376" fontSize="28">{c.t}</text>
        <text x="400" y="420" fontSize="16">{c.i}</text>
        <text x="400" y="488" fontFamily="monospace" fontSize="12" fill="#999">PLACEHOLDER · REPLACE WITH YOUR CERTIFICATE IMAGE</text>
      </g>
    </svg>
  );
}

export const AW = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="5" /><path d="M9 13.5 8 21l4-2.4 4 2.4-1-7.5" /></svg>
);
export const EXT = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M9 2h5v5M14 2 7 9M12 10v3.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5H6" /></svg>
);
