// Hero section: badge, name, role line, intro, code card and the four stats.
export const hero = {
  badge: "Open to SDE roles · Class of 2027",
  firstName: "Himanshu",
  lastName: "Walde",
  roleLine: "Software Engineer · Problem Solver",
  intro:
    "Final-year CS student who takes ideas from rough sketch to something people actually use — clean APIs, readable code, and systems that hold up.",
  // Shown in the profile.ts code card
  code: {
    variable: "himanshu",
    role: "Software Engineer",
    based: "Nagpur, IN",
    studying: "B.Tech CSE · YCCE",
    focus: ["Java", "Python", "Full-stack"],
    graduating: 2027,
    openToWork: true,
  },
  // n = number, decimals = digits after the point, suffix = text after the number
  stats: [
    { n: 8.9, decimals: 1, suffix: "", label: "CGPA / 10" },
    { n: 5, decimals: 0, suffix: "th", label: "Department rank" },
    { n: 250, decimals: 0, suffix: "+", label: "Problems solved" },
    { n: 1, decimals: 0, suffix: "", label: "Research paper" },
  ],
};
