const PROJECT_START = new Date("2026-08-07T00:00:00");

export function hasProjectStarted() {
  return new Date() >= PROJECT_START;
}

export function getProjectStart() {
  return PROJECT_START;
}

export function getCountdown() {
  const now = new Date().getTime();
  const target = PROJECT_START.getTime();

  const diff = target - now;

  if (diff <= 0) {
    return null;
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (diff % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    ),
    minutes: Math.floor(
      (diff % (1000 * 60 * 60)) /
      (1000 * 60)
    ),
    seconds: Math.floor(
      (diff % (1000 * 60)) /
      1000
    )
  };
}