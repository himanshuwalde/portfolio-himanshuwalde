import { useEffect, useState } from "react";
import IntroLoader from "./components/IntroLoader";
import ParticleBackground from "./components/ParticleBackground";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function App() {
  const [started, setStarted] = useState(false);

  // Scroll-reveal starts only after the intro finishes so the hero animates in visibly.
  useEffect(() => {
    if (!started) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1 });
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [started]);

  // Cursor-following spotlight on cards (fine pointers only)
  useEffect(() => {
    const m = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const c = (e.target as Element).closest?.(".card") as HTMLElement | null;
      if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty("--x", e.clientX - r.left + "px"); c.style.setProperty("--y", e.clientY - r.top + "px");
    };
    document.addEventListener("pointermove", m, { passive: true });
    return () => document.removeEventListener("pointermove", m);
  }, []);

  return (<>
    <IntroLoader onDone={() => setStarted(true)} />
    <ParticleBackground />
    <Nav />
    <main id="top"><Hero /><About /><Stack /><Work /><Experience /><Education /><Contact /></main>
    <Footer />
    <Toast />
  </>);
}
