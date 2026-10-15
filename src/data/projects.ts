// Projects section.
// - The first 6 projects appear on the page; "View all projects" shows every project.
// - img: URL of a screenshot (leave "" to show a generated placeholder).
// - ft: 1 marks the featured project. live is optional.
export type Project = {
  n: string; // name
  c: string; // category
  ft?: number;
  ph?: number;
  img?: string;
  t: string; // one-line tagline
  s: string[]; // tech stack
  live?: string;
  repo: string;
  pr: string; // the problem it solves
  f: string[]; // highlights
  ch: string[]; // challenges -> solutions
};

// ADD YOUR REAL PROJECTS HERE
export const projects: Project[] = [
  {
    n: "FinGuru",
    c: "AI / ML",
    ft: 1,
    img: "",
    t: "AI-powered personal finance platform that reads bank statements and flags unusual spending.",
    s: [
      "Python",
      "PostgreSQL",
      "Supabase",
      "Streamlit",
      "Gemini",
      "GitHub Actions"
    ],
    live: "https://finguru-app-1.streamlit.app/",
    repo: "https://github.com/himanshuwalde/finguru-webapp",
    pr: "Most people don't know where their money goes, miss recurring charges and can't spot unusual transactions.",
    f: [
      "Gemini analysis of spending patterns",
      "OCR extraction from PDF bank statements",
      "Anomaly detection and cash-flow forecasting",
      "Row Level Security for per-user data"
    ],
    ch: [
      "Varied bank layouts → multi-template OCR with LLM post-processing",
      "Responsive UI → batch jobs via GitHub Actions + caching"
    ]
  },
  {
    n: "Online Examination System",
    c: "Systems",
    img: "",
    t: "Java desktop app for timed MCQ exams with authentication, auto-submission and grading.",
    s: [
      "Java",
      "OOP",
      "JDBC",
      "Swing"
    ],
    repo: "https://github.com/himanshuwalde/Online-Examination-System",
    pr: "Institutions need reliable exams with instant results and no manual grading.",
    f: [
      "Admin and Student flows",
      "Countdown with auto-submit",
      "Instant grading and reports",
      "Periodic answer auto-save"
    ],
    ch: [
      "Progress loss mid-exam → local persistence with recovery",
      "Offline integrity → focus tracking, randomized questions"
    ]
  },
  {
    n: "Number Guessing Game",
    c: "Systems",
    img: "",
    t: "Console game showcasing clean OOP, input validation and exception handling.",
    s: [
      "Java",
      "OOP",
      "Exceptions"
    ],
    repo: "https://github.com/himanshuwalde/Guessing-Game",
    pr: "Beginner projects often skip validation and structure, which makes them fragile.",
    f: [
      "Robust input validation",
      "Proximity-based hints",
      "Attempt-based scoring",
      "Persistent leaderboard"
    ],
    ch: [
      "Bad input crashes → custom exception hierarchy",
      "Testing randomness → injected Random provider"
    ]
  }
];

// "Coming soon" filler cards so the grid shows 6 cards. Delete these (and the line below) once you have 6+ real projects.
export const placeholderProjects: Project[] = [
  {
    n: "Project 4",
    c: "Placeholder",
    ph: 1,
    t: "Placeholder card — add your project details in the P array.",
    s: [],
    f: [],
    ch: [],
    pr: "",
    repo: ""
  },
  {
    n: "Project 5",
    c: "Placeholder",
    ph: 1,
    t: "Placeholder card — add your project details in the P array.",
    s: [],
    f: [],
    ch: [],
    pr: "",
    repo: ""
  },
  {
    n: "Project 6",
    c: "Placeholder",
    ph: 1,
    t: "Placeholder card — add your project details in the P array.",
    s: [],
    f: [],
    ch: [],
    pr: "",
    repo: ""
  }
];

export const allProjects: Project[] = [...projects, ...placeholderProjects];
