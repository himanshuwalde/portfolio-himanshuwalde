// Tech stack section. span = width of the card (out of 6 columns): 2 = narrow, 3 = half, 4 = wide.
export type StackGroup = { group: string; span: number; items: string[] };

export const stack: StackGroup[] = [
  {
    group: "Languages",
    span: 2,
    items: [
      "Java",
      "TypeScript",
      "Python",
      "C"
    ]
  },
  {
    group: "Frontend",
    span: 4,
    items: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS"
    ]
  },
  {
    group: "Backend",
    span: 3,
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Supabase"
    ]
  },
  {
    group: "Tooling",
    span: 3,
    items: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Linux",
      "Vite",
      "VS Code",
      "IntelliJ IDEA"
    ]
  }
];
