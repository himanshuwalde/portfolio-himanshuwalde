import { useEffect, useState } from "react";

export default function Toast() {
  const [m, setM] = useState("");
  const [s, setS] = useState(false);
  useEffect(() => {
    let t = 0;
    const h = (e: Event) => { setM((e as CustomEvent<string>).detail); setS(true); clearTimeout(t); t = window.setTimeout(() => setS(false), 2000); };
    window.addEventListener("toast", h);
    return () => window.removeEventListener("toast", h);
  }, []);
  return <div id="t" className={s ? "s" : ""} role="status">{m}</div>;
}
