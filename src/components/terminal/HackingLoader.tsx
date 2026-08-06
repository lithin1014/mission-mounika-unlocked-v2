import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  onComplete: () => void;
}

const logs = [
  "Connecting to classified server...",
  "Checking agent clearance...",
  "Decrypting encrypted packets...",
  "Bypassing firewall...",
  "Loading mission database...",
  "Verifying identity...",
  "Secure connection established.",
];

export default function HackingLoader({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  useEffect(() => {
    let value = 0;
    let logIndex = 0;

    const interval = setInterval(() => {
      value += 2;

      setProgress(value);

      if (
        value % 14 === 0 &&
        logIndex < logs.length
      ) {
        setVisibleLogs((prev) => [
          ...prev,
          logs[logIndex],
        ]);

        logIndex++;
      }

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 700);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="w-full max-w-3xl rounded-3xl border border-green-500/30 bg-black p-10">

        <p className="text-green-500 tracking-[0.4em] uppercase">
          INITIALIZING
        </p>

        <h1 className="mt-5 text-4xl font-bold text-green-400">
          Establishing Secure Connection
        </h1>

        <div className="mt-8 h-4 overflow-hidden rounded-full bg-gray-800">
          <motion.div
            animate={{
              width: `${progress}%`,
            }}
            className="h-full bg-green-500"
          />
        </div>

        <p className="mt-3">{progress}%</p>

        <div className="mt-10 rounded-xl border border-green-500/20 bg-black p-5 font-mono text-green-400">

          {visibleLogs.map((log, index) => (
            <p key={index}>{"> "}{log}</p>
          ))}

          <span className="animate-pulse">█</span>

        </div>

      </div>
    </motion.div>
  );
}