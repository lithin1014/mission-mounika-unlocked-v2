import { useEffect, useState } from "react";

export default function CountdownTimer() {
  // Change this date if needed
  const targetDate = new Date("2026-08-14T00:00:00");

  const calculateTime = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        expired: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      expired: false,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
      <TimeCard value={timeLeft.days} label="Days" />
      <TimeCard value={timeLeft.hours} label="Hours" />
      <TimeCard value={timeLeft.minutes} label="Minutes" />
      <TimeCard value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

interface TimeCardProps {
  value: number;
  label: string;
}

function TimeCard({ value, label }: TimeCardProps) {
  return (
    <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-6 text-center shadow-lg">
      <h2 className="text-5xl font-bold text-green-400">
        {String(value).padStart(2, "0")}
      </h2>

      <p className="mt-2 uppercase tracking-[0.3em] text-sm text-green-300">
        {label}
      </p>
    </div>
  );
}