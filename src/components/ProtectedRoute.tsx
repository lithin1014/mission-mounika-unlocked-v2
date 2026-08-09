import { Navigate, useLocation } from "react-router-dom";
import { MISSION_DATES } from "../config/schedule";
import { getMissionProgress } from "../utils/progress";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const location = useLocation();
  const path = location.pathname;
  const now = new Date();

  const progress = getMissionProgress();

  function locked(date: Date) {
    return now < date;
  }

  function canPlay(missionNumber: number, unlockDate: Date) {
    // Mission is not available yet
    if (locked(unlockDate)) {
      return false;
    }

    // Mission 1 is available when its date arrives
    if (missionNumber === 1) {
      return true;
    }

    // Every mission after Mission 1 requires
    // the previous mission to be completed.
    return progress.completed.includes(missionNumber - 1);
  }

  /* =========================
     MISSION 1
  ========================= */

  if (
    path.startsWith("/mission-1") &&
    !canPlay(1, MISSION_DATES.mission1)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  /* =========================
     MISSION 2
  ========================= */

  if (
    path.startsWith("/mission-2") &&
    !canPlay(2, MISSION_DATES.mission2)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  /* =========================
     MISSION 3
  ========================= */

  if (
    path.startsWith("/mission-3") &&
    !canPlay(3, MISSION_DATES.mission3)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  /* =========================
     MISSION 4
  ========================= */

  if (
    path.startsWith("/mission-4") &&
    !canPlay(4, MISSION_DATES.mission4)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  /* =========================
     MISSION 5
  ========================= */

  if (
    path.startsWith("/mission-5") &&
    !canPlay(5, MISSION_DATES.mission5)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  /* =========================
     MISSION 6
  ========================= */

  if (
    path.startsWith("/mission-6") &&
    !canPlay(6, MISSION_DATES.mission6)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  /* =========================
     MISSION 7
  ========================= */

  if (
    path.startsWith("/mission-7") &&
    !canPlay(7, MISSION_DATES.mission7)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  /* =========================
     FINAL VAULT / SURPRISE
  ========================= */

  if (
    (
      path.startsWith("/vault") ||
      path.startsWith("/gift") ||
      path.startsWith("/gallery") ||
      path.startsWith("/letter") ||
      path.startsWith("/birthday")
    ) &&
    locked(MISSION_DATES.vault)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}