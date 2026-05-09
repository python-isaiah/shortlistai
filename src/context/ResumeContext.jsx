import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resume, setResume] = useState(null);
  const [parsedResume, setParsedResume] = useState(null);

  function uploadResume(file, parsed) {
    setResume({ name: file.name });
    setParsedResume(parsed);
  }

  return (
    <ResumeContext.Provider
      value={{
        resume,
        parsedResume,
        uploadResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}
