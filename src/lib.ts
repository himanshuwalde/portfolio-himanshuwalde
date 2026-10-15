import { useEffect, useRef, useState, type CSSProperties } from "react";
import { contact } from "./data/contact";

export const d = (v: number) => ({ "--d": v + "s" }) as CSSProperties;
export const toast = (m: string) => window.dispatchEvent(new CustomEvent("toast", { detail: m }));
export const openResume = () => {
  if (!contact.resumeUrl) return toast("Resume link coming soon");
  window.open(contact.resumeUrl, "_blank", "noopener");
};

// Shared modal behaviour: Esc closes only the top-most layer, body scroll is locked, focus returns on close.
let locks = 0;
const stack: symbol[] = [];
export function useModal(open: boolean, onClose: () => void) {
  const id = useRef(Symbol()).current;
  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    stack.push(id);
    locks++;
    document.documentElement.style.overflow = "hidden";
    document.documentElement.classList.add("modal-open");
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape" && stack[stack.length - 1] === id) onClose();
    };
    window.addEventListener("keydown", k);
    return () => {
      window.removeEventListener("keydown", k);
      stack.splice(stack.indexOf(id), 1);
      if (--locks === 0) { document.documentElement.style.overflow = ""; document.documentElement.classList.remove("modal-open"); }
      prev?.focus?.();
    };
  }, [open]);
}

// Keeps the last selected item so content stays visible while the popup fades out.
export function useSel<T>() {
  const [v, s] = useState<T | null>(null);
  const [o, so] = useState(false);
  return { v, o, show: (x: T) => { s(x); so(true); }, hide: () => so(false) };
}
