// Experience section (internships) — each card opens a popup with these details.
// - sum: short overview, tasks: what you worked on, tools: tech used, out: outcome/impact.
// - Leave sum/tasks/tools/out empty to show placeholder text.
// - cert.img: URL of the internship certificate image, cert.url: optional verification link.
import type { Cert } from "./education";

export type Intern = {
  d: string; // date, e.g. "June 2025"
  r: string; // role
  o: string; // organisation
  sum: string;
  tasks: string[];
  tools: string[];
  out: string;
  cert: Cert;
};

// Newest first
export const internships: Intern[] = [
  {
    d: "June 2025",
    r: "Java Development Intern",
    o: "Oasis Infobyte",
    sum: "",
    tasks: [],
    tools: [],
    out: "",
    cert: {
      t: "Java Development Internship",
      i: "Oasis Infobyte",
      y: "2025",
      img: "",
      url: ""
    }
  },
  {
    d: "May 2025",
    r: "Web Development Intern",
    o: "Cognifyz Technologies",
    sum: "",
    tasks: [],
    tools: [],
    out: "",
    cert: {
      t: "Web Development Internship",
      i: "Cognifyz Technologies",
      y: "2025",
      img: "",
      url: ""
    }
  },
  {
    d: "April 2025",
    r: "Data Analytics Intern",
    o: "Oasis Infobyte",
    sum: "",
    tasks: [],
    tools: [],
    out: "",
    cert: {
      t: "Data Analytics Internship",
      i: "Oasis Infobyte",
      y: "2025",
      img: "",
      url: ""
    }
  }
];

// Shown while an internship has no description yet
export const placeholders = {
  summary: "Placeholder — a short summary of this internship: what the company does, your role and what you delivered.",
  tasks: [
    "Placeholder — a key task or feature you built",
    "Placeholder — the tools, frameworks or datasets you used",
    "Placeholder — a result, or what you learned",
  ],
};
