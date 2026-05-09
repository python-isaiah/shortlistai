import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResume } from "../context/ResumeContext";
import "./Processing.css";

const steps = [
  "Parsing resume structure",
  "Extracting skills & experience",
  "Analyzing job market demand",
  "Matching you to roles",
];

export default function Processing() {
  const navigate = useNavigate();
  const { resume } = useResume();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!resume) {
      navigate("/upload");
      return;
    }

    const stepInterval = setInterval(() => {
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
    }, 900);

    const timer = setTimeout(() => {
      navigate("/preview");
    }, 3600);

    return () => {
      clearTimeout(timer);
      clearInterval(stepInterval);
    };
  }, [resume, navigate]);

  return (
    <div className="processing-page fade-up" style={{ animationDelay: "0.1s" }}>
      <h1>Analyzing your resume</h1>
      <p className="subtitle">
        We’re extracting insights from <strong>{resume.name}</strong>
      </p>

      <div className="scan-card">
        <div className="scan-line" />
        <div className="resume-mock">
          <div className="line short" />
          <div className="line" />
          <div className="line medium" />
          <div className="line" />
        </div>
      </div>

      <ul className="steps">
        {steps.map((label, index) => (
          <li key={label} className={index <= step ? "active" : ""}>
            {index < step ? "✓" : "•"} {label}
          </li>
        ))}
      </ul>

      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${((step + 1) / steps.length) * 100}%` }}
        />
      </div>

      <span className="hint">This usually takes a few seconds</span>
    </div>
  );
}

