// src/data/data.js
// Dummy seed data used in UI until you connect Spring Boot APIs.
// Replace these with API responses later.

export const seedJobs = [
  {
    id: "job_1001",
    title: "Build Landing Page UI",
    description: "Need a responsive landing page for a SaaS product.",
    skills: ["React", "Tailwind"],
    budgetType: "fixed", // "hourly" | "fixed"
    budgetMin: 250,
    budgetMax: 400,
    duration: "2-3 weeks",
    visibility: "public", // "public" | "inviteOnly" | "private"
    status: "open", // "open" | "in_progress" | "closed"
    createdAt: "2026-01-10",
  },
  {
    id: "job_1002",
    title: "Spring Boot REST API (CRUD)",
    description: "Create REST endpoints for Jobs and Proposals with JWT auth.",
    skills: ["Java", "Spring Boot", "MySQL"],
    budgetType: "hourly",
    budgetMin: 8,
    budgetMax: 12,
    duration: "1-2 weeks",
    visibility: "public",
    status: "in_progress",
    createdAt: "2026-01-14",
  },
  {
    id: "job_1003",
    title: "Logo + Brand Kit",
    description: "Need logo, color palette, and basic brand guidelines.",
    skills: ["Figma", "Branding"],
    budgetType: "fixed",
    budgetMin: 80,
    budgetMax: 150,
    duration: "3-5 days",
    visibility: "public",
    status: "closed",
    createdAt: "2026-01-05",
  },
];

export const seedProposals = [
  {
    id: "prop_2001",
    jobId: "job_1001",
    jobTitle: "Build Landing Page UI",
    freelancerName: "Aarav Desai",
    coverLetter:
      "Hi! I can build a clean and modern landing page with responsive UI. I’ve delivered similar work for SaaS products.",
    bidAmount: 320,
    timeline: "10 days",
    attachments: [
      { type: "link", label: "Portfolio", url: "https://example.com/portfolio" },
      { type: "file", label: "sample-ui.png", url: "#" },
    ],
    status: "sent", // "sent" | "shortlisted" | "accepted" | "rejected" | "withdrawn"
    createdAt: "2026-01-16",
  },
  {
    id: "prop_2002",
    jobId: "job_1002",
    jobTitle: "Spring Boot REST API (CRUD)",
    freelancerName: "Meera Kulkarni",
    coverLetter:
      "I can implement Job/Proposal CRUD with Spring Boot + MySQL, add validation, and provide Postman collection.",
    bidAmount: 10,
    timeline: "7 days",
    attachments: [{ type: "link", label: "GitHub", url: "https://github.com/example" }],
    status: "shortlisted",
    createdAt: "2026-01-18",
  },
  {
    id: "prop_2003",
    jobId: "job_1001",
    jobTitle: "Build Landing Page UI",
    freelancerName: "You (Freelancer)",
    coverLetter:
      "I will deliver pixel-perfect landing page with reusable components and clean CSS. I can also connect it to APIs later.",
    bidAmount: 280,
    timeline: "8 days",
    attachments: [{ type: "link", label: "LinkedIn", url: "https://linkedin.com/in/example" }],
    status: "sent",
    createdAt: "2026-01-19",
  },
];
