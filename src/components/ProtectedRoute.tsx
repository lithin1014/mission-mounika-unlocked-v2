import { Navigate, useLocation } from "react-router-dom";
import { MISSION_DATES } from "../config/schedule";
import { isMissionCompleted } from "../utils/missionProgress";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const location = useLocation();
  const path = location.pathname;
  const now = new Date();

  function locked(date: Date) {
    return now < date;
  }

  function canPlay(
    missionNumber: number,
    unlockDate: Date
  ) {
    if (locked(unlockDate)) return false;

    if (missionNumber === 1) return true;

    return isMissionCompleted(missionNumber - 1);
  }

  if (
    path.startsWith("/mission-1") &&
    !canPlay(1, MISSION_DATES.mission1)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  if (
    path.startsWith("/mission-2") &&
    !canPlay(2, MISSION_DATES.mission2)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  if (
    path.startsWith("/mission-3") &&
    !canPlay(3, MISSION_DATES.mission3)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  if (
    path.startsWith("/mission-4") &&
    !canPlay(4, MISSION_DATES.mission4)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  if (
    path.startsWith("/mission-5") &&
    !canPlay(5, MISSION_DATES.mission5)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  if (
    path.startsWith("/mission-6") &&
    !canPlay(6, MISSION_DATES.mission6)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  if (
    path.startsWith("/mission-7") &&
    !canPlay(7, MISSION_DATES.mission7)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  if (
    (path.startsWith("/vault") ||
      path.startsWith("/gift") ||
      path.startsWith("/gallery") ||
      path.startsWith("/letter") ||
      path.startsWith("/birthday")) &&
    locked(MISSION_DATES.vault)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}