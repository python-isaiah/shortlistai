import "./Results.css";
import { useResume } from "../context/ResumeContext";
import JobCard from "../components/JobCard";
import { calculateResumeScore } from "../utils/resumeScore";
import { mockJobs } from "../data/mockJobs";

export default function ResultsPreview() {
  const { resume, parsedResume } = useResume();

  const resumeSkills = Array.isArray(parsedResume?.skills)
    ? parsedResume.skills
    : [];

  const resumeScore = calculateResumeScore(parsedResume, mockJobs);

  if (!resume) {
    return (
      <div className="results-page">
        <div className="container">
          <p>No resume found. Please upload one first.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="results-page fade-up">
      <div className="container">
        {/* HEADER */}
        <div className="results-header">
          <h1>Your top job matches</h1>
          <p>
            These roles best match your resume based on skills derived from{" "}
            <strong>{resume.name}</strong>
          </p>
        </div>

        {/* RESUME SCORE */}
        <div className="score-card">
          <div className="score-left">
            <h2>Resume Strength</h2>
            <p className="score-sub">
              Overall fit based on current job market
            </p>
          </div>

          <div className="score-right">
            <span className="score-value">{resumeScore}</span>
            <span className="score-max">/ 100</span>
          </div>
        </div>

        {/* JOB RESULTS */}
        <div className="results-grid">
          {mockJobs.map((job, index) => {
            const matched = [];
            const missing = [];

            job.requirements.forEach((req) => {
              const reqLower = req.toLowerCase();

              const found = resumeSkills.some((skill) => {
                const skillLower = skill.toLowerCase();
                return (
                  reqLower.includes(skillLower) ||
                  skillLower.includes(reqLower)
                );
              });

              if (found) {
                matched.push(req);
              } else {
                missing.push(req);
              }
            });

            const matchPercent = Math.round(
              (matched.length / job.requirements.length) * 100
            );

            console.log(
              job.title,
              "MATCHED:",
              matched,
              "MISSING:",
              missing
            );

            return (
              <JobCard
                key={job.id}
                index={index}
                job={{
                  ...job,
                  match: matchPercent,
                  matchedSkills: matched,
                  missingSkills: missing,
                }}
              />
            );
          })}
        </div>

        {/* CTA */}
        <div className="results-cta">
          <p>Want unlimited auto-applies and full access?</p>
          <button className="btn-primary">Upgrade to Pro</button>
        </div>
      </div>
    </div>
  );
}
