export const mockJobs = [
  {
    id: "frontend-techcorp",
    title: "Frontend Engineer",
    company: "TechCorp",
    location: "Remote",

    // still mock for now (we’ll compute later)
    
    probability: 68,

    // ✅ REAL source of truth
    requirements: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "REST APIs",
    ],
  },
  {
    id: "product-designly",
    title: "Product Designer",
    company: "Designly",
    location: "New York, NY",
    
    probability: 61,
    requirements: [
      "Figma",
      "UI Design",
      "Design Systems",
      "Accessibility",
      "User Research",
    ],
  },
  {
    id: "data-insightlabs",
    title: "Data Analyst",
    company: "Insight Labs",
    location: "Remote",
    
    probability: 79,
    requirements: [
      "SQL",
      "Python",
      "Data Visualization",
      "Statistics",
      "Machine Learning",
    ],
  },
];
