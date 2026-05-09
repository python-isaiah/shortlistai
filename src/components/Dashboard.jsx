import { useState, useEffect } from "react";
import { useSavedJobs } from "../hooks/useSavedJobs";

import "./Dashboard.css";

const mockJobs = [
  {
    id: "frontend-techcorp",
    title: "Frontend Engineer",
    company: "TechCorp",
    location: "Remote",
    status: "Ready",
    match: 82,
    probability: 68,
    description:
      "TechCorp is looking for a Frontend Engineer to build scalable, user-friendly interfaces for our core SaaS platform.",
    responsibilities: [
      "Develop reusable UI components using React",
      "Collaborate with designers and backend engineers",
      "Optimize applications for performance and accessibility",
      "Participate in code reviews and sprint planning",
    ],
    requirements: [
      "React",
      "JavaScript (ES6+)",
      "HTML & CSS",
      "TypeScript",
      "REST APIs",
    ],
    matchedSkills: ["React", "JavaScript", "CSS", "REST APIs"],
    missingSkills: ["TypeScript"],
    seniority: "Mid-level",
    jobType: "Full-time",
    source: "LinkedIn",
    postedDaysAgo: 3,
  },
  {
    id: "product-designly",
    title: "Product Designer",
    company: "Designly",
    location: "New York, NY",
    status: "Applied",
    match: 74,
    probability: 61,
    description:
      "Designly is seeking a Product Designer to shape intuitive digital experiences and work closely with product and engineering teams.",
    responsibilities: [
      "Design user flows, wireframes, and prototypes",
      "Collaborate with engineers to ship features",
      "Conduct user research and usability testing",
      "Maintain the design system",
    ],
    requirements: [
      "Figma",
      "UI/UX Design",
      "Design Systems",
      "Accessibility",
      "User Research",
    ],
    matchedSkills: ["Figma", "UI Design"],
    missingSkills: ["Accessibility", "User Research"],
    seniority: "Mid-level",
    jobType: "Full-time",
    source: "Indeed",
    postedDaysAgo: 6,
  },
  {
    id: "data-insightlabs",
    title: "Data Analyst",
    company: "Insight Labs",
    location: "Remote",
    status: "Ready",
    match: 91,
    probability: 79,
    description:
      "Insight Labs is hiring a Data Analyst to transform data into insights that guide business decisions.",
    responsibilities: [
      "Analyze large datasets to identify trends",
      "Build dashboards and reports",
      "Collaborate with product teams",
      "Ensure data accuracy",
    ],
    requirements: [
      "SQL",
      "Python",
      "Data Visualization",
      "Statistics",
      "Machine Learning (nice to have)",
    ],
    matchedSkills: ["SQL", "Python", "Data Visualization"],
    missingSkills: ["Machine Learning"],
    seniority: "Junior–Mid",
    jobType: "Full-time",
    source: "Company Site",
    postedDaysAgo: 1,
  },
];

export default function Dashboard() {
  const [filter, setFilter] = useState("All");
  const [mounted, setMounted] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const { isSaved, toggleSave } = useSavedJobs();


  // animate summary cards
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // close drawer with ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelectedJob(null);
    if (selectedJob) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedJob]);

  // derived metrics
  const totalJobs = mockJobs.length;
  const readyJobs = mockJobs.filter((j) => j.status === "Ready").length;
  const appliedJobs = mockJobs.filter((j) => j.status === "Applied").length;

  const avgMatch = Math.round(
    mockJobs.reduce((sum, j) => sum + j.match, 0) / totalJobs
  );

  const filteredJobs = (() => {
  if (filter === "All") return mockJobs;

  if (filter === "Saved") {
    return mockJobs.filter((job) => isSaved(job.id));
  }

  return mockJobs.filter((job) => job.status === filter);
})();

  return (
    <div className="dashboard">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">ShortlistAI</h2>
        <nav className="nav">
          <a className="active">Job matches</a>
          <a>Applications</a>
          <a>Resume</a>
          <a>Settings</a>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="main">
        {/* TOPBAR */}
        <header className="topbar">
          <h1>Job matches</h1>
          <button className="btn-primary" disabled>
            Auto-apply 🔒
          </button>
        </header>

        {/* SUMMARY */}
        <section className="summary">
          {[
            ["Total matches", totalJobs],
            ["Jobs ready", readyJobs],
            ["Applications sent", appliedJobs],
            ["Avg match", `${avgMatch}%`],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`summary-card ${mounted ? "show" : ""}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <label>{label}</label>
              <strong>{value}</strong>
            </div>
          ))}
        </section>

        {/* FILTERS */}
        <div className="filters">
          {["All", "Ready", "Applied" , "Saved"].map((s) => (
            <button
              key={s}
              className={filter === s ? "active" : ""}
              onClick={() => setFilter(s)}
            >
              {s}
            </button>
          ))}
        </div>

        {/* JOB LIST */}
        <section className="jobs">
          {filteredJobs.map((job) => (
            <div className="job-row" key={job.id}>
              <div className="job-info">
                <strong>{job.title}</strong>
                <span>{job.company}</span>
              </div>

              <div className="metric">
                <label>Match</label>
                <strong>{job.match}%</strong>
              </div>

              <div className="metric">
                <label>Interview odds</label>
                <strong>{job.probability}%</strong>
              </div>

              <div className={`status ${job.status.toLowerCase()}`}>
                {job.status}
              </div>

              <button
                className="btn-secondary small"
                onClick={() => setSelectedJob(job)}
              >
                View
              </button>
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <p className="empty">No jobs found.</p>
          )}
        </section>
      </main>

      {/* JOB DRAWER */}
      {selectedJob && (
        <div className="drawer-overlay" onClick={() => setSelectedJob(null)}>
          <aside
            className="job-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="drawer-header">
              <h2>{selectedJob.title}</h2>
              <p>
                {selectedJob.company} · {selectedJob.location}
              </p>
              <button
                className="close-btn"
                onClick={() => setSelectedJob(null)}
              >
                ✕
              </button>
            </header>

            <section className="drawer-section">
              <h3>About the role</h3>
              <p>{selectedJob.description}</p>
            </section>

            <section className="drawer-section">
              <h3>Responsibilities</h3>
              <ul>
                {selectedJob.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>

            <section className="drawer-section">
              <h3>Requirements</h3>
              <ul>
                {selectedJob.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>

            <section className="drawer-section">
              <h3>Your fit</h3>
              <ul className="fit-list">
                {selectedJob.matchedSkills.map((s) => (
                  <li key={s} className="good">✓ {s}</li>
                ))}
                {selectedJob.missingSkills.map((s) => (
                  <li key={s} className="bad">✕ {s}</li>
                ))}
              </ul>
            </section>

            <footer className="drawer-actions">
              <button
  className="drawer-btn-secondary"
  onClick={() => toggleSave(selectedJob.id)}
>
  {isSaved(selectedJob.id) ? "★ Saved" : "☆ Save job"}
</button>

              <button className="btn-primary" disabled>
                Auto-apply 🔒
              </button>
            </footer>
          </aside>
        </div>
      )}
    </div>
  );
}
