import { useEffect, useState } from "react";

const STORAGE_KEY = "saved_jobs";

export function useSavedJobs() {
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
  }, [savedIds]);

  const isSaved = (jobId) => savedIds.includes(jobId);

  const toggleSave = (jobId) => {
    setSavedIds((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  return { savedIds, isSaved, toggleSave };
}
