import { useEffect, useState } from "react";

const lines = [
  "> Connecting to Memory Vault...",
  "> Checking security clearance...",
  "> Bypassing firewall...",
  "> Establishing secure connection...",
  "> Access granted.",
];

export default function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, lines[index]]);
      index++;

      if (index >= lines.length) {
        clearInterval(interval);
      }
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 rounded-2xl border border-green-500/30 bg-black p-5 font-mono text-green-400">
      {visibleLines.map((line, i) => (
        <p key={i} className="mb-2">
          {line}
        </p>
      ))}

      <span className="animate-pulse">█</span>
    </div>
  );
}