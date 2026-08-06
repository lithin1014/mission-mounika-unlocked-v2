export function getMissionProgress() {
  const progress = localStorage.getItem("mission-progress");

  if (progress) {
    return JSON.parse(progress);
  }

  return {
    completed: [],
  };
}

export function completeMission(id: number) {
  const progress = getMissionProgress();

  if (!progress.completed.includes(id)) {
    progress.completed.push(id);
  }

  localStorage.setItem(
    "mission-progress",
    JSON.stringify(progress)
  );
}