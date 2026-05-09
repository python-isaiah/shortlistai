import "./Resume.css";
import { useNavigate } from "react-router-dom";
import { useResume } from "../context/ResumeContext";
import { useState } from "react";
import { extractTextFromFile, parseResume } from "../services/resumeParser";

export default function ResumeUpload() {
  const navigate = useNavigate();
  const { uploadResume } = useResume();
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    const selected = e.target.files[0];
    if (!selected) return;

    if (
      !selected.type.includes("pdf") &&
      !selected.type.includes("word")
    ) {
      alert("Please upload a PDF or DOCX file");
      return;
    }

    setFile(selected);
  }

 async function handleContinue() {
  if (!file) return;

  const text = await extractTextFromFile(file);
  const parsed = parseResume(text);

  console.log("PARSED RESUME:", parsed);

  uploadResume(file, parsed); // 🔑 STORE PARSED DATA
  navigate("/processing");
}


  return (
    <div className="resume-page fade-up" style={{ animationDelay: "0.1s" }}>
      <div className="resume-card">
        <h1>Upload your resume</h1>
        <p>
          We’ll use your resume to find jobs you’re most likely to get.
        </p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />

        {file && (
          <p className="file-preview">
            Uploaded: <strong>{file.name}</strong>
          </p>
        )}

        <button className="btn-primary full" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}
