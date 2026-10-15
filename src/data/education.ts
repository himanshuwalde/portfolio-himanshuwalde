// Education section: degree card and certifications.
export type Cert = {
  t: string; // certificate title
  i: string; // issuer
  y: string; // year ("" to hide)
  img: string; // URL of the certificate image ("" = generated placeholder)
  url: string; // optional verification link ("" = no button)
};

export const education = {
  period: "2023 — 2027",
  degree: "B.Tech, Computer Science & Engineering",
  description:
    "Yeshwantrao Chavan College of Engineering, Nagpur. Algorithms, operating systems, databases, networks and applied AI — backed by competitive programming and research-led projects.",
};

export const certifications: Cert[] = [
  {
    t: "Java Programming",
    i: "GeeksforGeeks",
    y: "2024",
    img: "",
    url: ""
  },
  {
    t: "Data Structures & Algorithms",
    i: "GeeksforGeeks",
    y: "2024",
    img: "",
    url: ""
  },
  {
    t: "SQL & Relational Databases",
    i: "GeeksforGeeks",
    y: "2024",
    img: "",
    url: ""
  },
  {
    t: "Git & GitHub Essentials",
    i: "GeeksforGeeks",
    y: "2024",
    img: "",
    url: ""
  },
  {
    t: "Python Foundations",
    i: "HackerRank",
    y: "2024",
    img: "",
    url: ""
  }
];
