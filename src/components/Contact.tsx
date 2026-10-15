import { useState, type FormEvent } from "react";
import { contact } from "../data/contact";
import { d, openResume, toast } from "../lib";

const M = contact.email, FORM = contact.formEndpoint, LINKS = contact.links;

export default function Contact() {
  const [err, setErr] = useState<Record<string, string>>({}), [busy, setBusy] = useState(false);
  const copy = () => navigator.clipboard?.writeText(M).then(() => toast("Email copied ✓"), () => toast(M)) ?? toast(M);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget, fd = new FormData(f), v = (n: string) => String(fd.get(n) || "").trim();
    if (v("company")) return; // honeypot
    const er: Record<string, string> = {};
    if (v("name").length < 2) er.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) er.email = "Enter a valid email address";
    if (v("message").length < 10) er.message = "Message should be at least 10 characters";
    setErr(er); if (Object.keys(er).length) return;
    setBusy(true);
    const sub = "Portfolio message from " + v("name");
    try {
      const r = await fetch(FORM, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ name: v("name"), email: v("email"), message: v("message"), _subject: sub }) });
      if (!r.ok) throw new Error("send failed");
      f.reset(); toast("Message sent ✓");
    } catch {
      location.href = `mailto:${M}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(v("message") + "\n\n— " + v("name") + " (" + v("email") + ")")}`;
      toast("Opening your email app…");
    }
    setBusy(false);
  }
  const fl = (k: string) => "fl" + (err[k] ? " bad" : "");
  return (
    <section className="sec" id="contact"><div className="w">
      <div className="sh rv"><div className="mono up">06 / Contact</div><h2>Let's build something <span className="ser">solid</span></h2><p>Hiring for SDE roles or have a project in mind? Send a message or find me online.</p></div>
      <div className="bento">
        <div className="card pad c2 rv"><span className="mono up">Email</span>
          <p style={{ margin: "6px 0 14px", wordBreak: "break-all" }}><a href={`mailto:${M}`}>{M}</a></p>
          <button className="btn" style={{ marginBottom: 18 }} onClick={copy}>Copy email</button>
          {LINKS.map(([n, h]) => <a key={n} className="sr" href={h} target="_blank" rel="noopener">{n} <span>↗</span></a>)}
          <button className="sr" style={{ border: 0 }} onClick={openResume}>Resume <span>↓</span></button>
        </div>
        <form className="card pad c4 rv" style={d(0.08)} onSubmit={submit} noValidate>
          <div className="f2">
            <div className={fl("name")}><label htmlFor="fn">Name</label><input id="fn" name="name" autoComplete="name" placeholder="Your name" /><span className="er" aria-live="polite">{err.name}</span></div>
            <div className={fl("email")}><label htmlFor="fe">Email</label><input id="fe" name="email" type="email" autoComplete="email" placeholder="you@example.com" /><span className="er" aria-live="polite">{err.email}</span></div>
          </div>
          <div className={fl("message")}><label htmlFor="fm">Message</label><textarea id="fm" name="message" rows={6} placeholder="Tell me about the role or project…" /><span className="er" aria-live="polite">{err.message}</span></div>
          <div className="hp" aria-hidden="true"><input name="company" tabIndex={-1} autoComplete="off" /></div>
          <button className="btn p" type="submit" disabled={busy}>{busy ? "Sending…" : "Send message →"}</button>
        </form>
      </div>
    </div></section>
  );
}
