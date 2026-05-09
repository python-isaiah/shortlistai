import * as pdfjsLib from "pdfjs-dist";
import mammoth from "mammoth";

/* -----------------------------
   TEXT EXTRACTION
----------------------------- */
/* -----------------------------
   SKILL EXTRACTION
----------------------------- */

const SKILL_KEYWORDS = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Node",
  "Express",
  "Python",
  "SQL",
  "AWS",
  "Docker",
  "Git",
  "REST",
  "API",
  "MongoDB",
  "PostgreSQL",
];

export function extractSkills(text) {
  const lower = text.toLowerCase();

  return SKILL_KEYWORDS.filter((skill) =>
    lower.includes(skill.toLowerCase())
  );
}

export async function extractTextFromFile(file) {
  const ext = file.name.split(".").pop().toLowerCase();

  if (ext === "pdf") {
    return extractPdfText(file);
  }

  if (ext === "docx") {
    return extractDocxText(file);
  }

  throw new Error("Unsupported file type");
}

async function extractPdfText(file) {
  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map((item) => item.str).join(" ") + " ";
  }

  return text;
}

async function extractDocxText(file) {
  const buffer = await file.arrayBuffer();
  const { value } = await mammoth.extractRawText({ arrayBuffer: buffer });
  return value;
}

/* -----------------------------
   PARSED RESUME
----------------------------- */

export function parseResume(text) {
  return {
    skills: extractSkills(text),
    length: text.length,
    hasEducation: /education|university|college|bachelor|master/i.test(text),
    hasProjects: /project/i.test(text),
  };
}
