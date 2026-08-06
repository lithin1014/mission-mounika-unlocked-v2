export function completeMission(id: number) {
  const completed = getCompletedMissions();

  if (!completed.includes(id)) {
    completed.push(id);
  }

  localStorage.setItem(
    "completedMissions",
    JSON.stringify(completed)
  );

  localStorage.setItem(
    "lastCompletedMission",
    id.toString()
  );
}

export function getCompletedMissions(): number[] {
  return JSON.parse(
    localStorage.getItem("completedMissions") || "[]"
  );
}

export function isMissionCompleted(id: number) {
  return getCompletedMissions().includes(id);
}

export function getLastCompletedMission() {
  return Number(
    localStorage.getItem("lastCompletedMission") || "0"
  );
}