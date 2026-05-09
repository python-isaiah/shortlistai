export function calculateResumeScore(parsedResume, jobs) {
  if (!parsedResume?.skills?.length || !jobs?.length) return 0;

  let totalRequirements = 0;
  let totalMatched = 0;

  jobs.forEach((job) => {
    const requirements = job.requirements || [];
    totalRequirements += requirements.length;

    const matched = requirements.filter((req) =>
      parsedResume.skills.includes(req)
    );

    totalMatched += matched.length;
  });

  if (totalRequirements === 0) return 0;

  // 🎯 Resume strength = how well you cover market requirements
  const score = (totalMatched / totalRequirements) * 100;

  return Math.round(Math.min(100, Math.max(0, score)));
}
