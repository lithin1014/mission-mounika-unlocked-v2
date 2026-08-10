import {
  getCompletedMissions,
  completeMission as saveCompletedMission,
  isMissionCompleted,
} from "./missionProgress";

export function getMissionProgress() {
  return {
    completed: getCompletedMissions(),
  };
}

export function completeMission(id: number) {
  saveCompletedMission(id);
}

export { isMissionCompleted };