import { useEffect, useRef, type ReactNode } from "react";
import { useModal } from "../lib";
import { CertArt } from "./Art";
import type { Cert } from "../data/education";

export function Modal({ open, onClose, title, wide, id, children }: { open: boolean; onClose: () => void; title: string; wide?: boolean; id?: string; children: ReactNode }) {
  useModal(open, onClose);
  const x = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (open) x.current?.focus(); }, [open]);
  return (
    <div className={"mo" + (open ? " open" : "")} id={id} role="dialog" aria-modal="true" aria-label={title} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={"mp" + (wide ? "" : " nm")}>
        <div className="mh"><h3>{title}</h3><button className="xb" ref={x} onClick={onClose}>Close · Esc</button></div>
        {children}
      </div>
    </div>
  );
}

export function CertViewer({ c, open, onClose }: { c: Cert | null; open: boolean; onClose: () => void }) {
  return (
    <Modal id="lb" open={open} onClose={onClose} title={c?.t || ""}>
      {c && (<>
        {c.img ? <img src={c.img} alt={`${c.t} certificate`} /> : <CertArt c={c} />}
        <div className="row" style={{ marginTop: 18, alignItems: "center" }}>
          <span className="mono">{c.i}{c.y ? " · " + c.y : ""}</span>
          {c.url && <a className="btn p" href={c.url} target="_blank" rel="noopener">Verify ↗</a>}
        </div>
      </>)}
    </Modal>
  );
}
