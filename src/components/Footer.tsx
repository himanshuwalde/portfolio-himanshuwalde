import { useEffect, useState } from "react";
import { site } from "../data/site";

const now = () => new Date().toLocaleTimeString("en-IN", { timeZone: site.timeZone, hour: "2-digit", minute: "2-digit", hour12: false }) + " " + site.timeZoneLabel;
export default function Footer() {
  const [t, setT] = useState(now());
  useEffect(() => { const i = setInterval(() => setT(now()), 30000); return () => clearInterval(i); }, []);
  return <footer><div className="w mono"><span>© {new Date().getFullYear()} {site.name}</span><span>Built in {site.city} · {t}</span></div></footer>;
}
