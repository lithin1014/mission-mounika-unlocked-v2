import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MissionTerminalProps {
  lines: string[];
  onComplete?: () => void;
}

export default function MissionTerminal({
  lines,
  onComplete,
}: MissionTerminalProps) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [visibleLines, lines, onComplete]);

  return (
    <div className="rounded-2xl border border-green-500/30 bg-black/70 p-6 font-mono shadow-2xl">

      <div className="mb-6 flex items-center gap-2">

        <div className="h-3 w-3 rounded-full bg-red-500" />

        <div className="h-3 w-3 rounded-full bg-yellow-500" />

        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-4 text-green-400">
          SECURE TERMINAL
        </span>

      </div>

      {lines.slice(0, visibleLines).map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-green-400"
        >
          {"> "} {line}
        </motion.p>
      ))}

      {visibleLines < lines.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1,
          }}
          className="text-green-500"
        >
          █
        </motion.span>
      )}

    </div>
  );
}