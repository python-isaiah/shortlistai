import { useEffect, useState } from "react";

export default function JobCard({ job, index }) {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  // ✅ SAFE DEFAULTS (THIS FIXES YOUR ISSUE)
  const matchedSkills = job.matchedSkills || [];
  const missingSkills = job.missingSkills || [];

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="job-card fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* MAIN INFO */}
      <div className="job-main">
        <h3>{job.title}</h3>
        <span>
          {job.company} · {job.location}
        </span>
      </div>

      {/* METRICS */}
      <div className="job-metrics">
        <div className="metric">
          <label>Resume match</label>
          <div className="bar">
            <div
              className="bar-fill"
              style={{
                width: animate ? `${job.match}%` : "0%",
              }}
            />
          </div>
          <strong>{job.match}%</strong>
        </div>

        <div className="metric">
          <label>Interview probability</label>
          <div className="bar secondary">
            <div
              className="bar-fill"
              style={{
                width: animate ? `${job.probability}%` : "0%",
              }}
            />
          </div>
          <strong>{job.probability}%</strong>
        </div>
      </div>

      {/* TOGGLE BUTTON */}
      <button
        className="why-btn"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        Why you match
        <span className={`caret ${open ? "open" : ""}`}>▾</span>
      </button>

      {/* WHY PANEL */}
      <div className={`why-panel ${open ? "open" : ""}`}>
        <div className="why-inner">
          <div>
            <strong>Matched skills ({matchedSkills.length})</strong>
            <ul>
              {matchedSkills.map((skill) => (
                <li key={skill}> {skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <strong>Missing skills ({missingSkills.length})</strong>
            <ul>
              {missingSkills.map((skill) => (
                <li key={skill}> {skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ACTION */}
      <button className="btn-disabled" title="Upgrade to unlock">
        Apply automatically 🔒
      </button>
    </div>
  );
}
