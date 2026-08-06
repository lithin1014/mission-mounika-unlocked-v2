import { useEffect, useState } from "react";

const lines = [
  "> Initializing secure connection...",
  "> Connecting to Agent Mounika...",
  "> Identity Verified",
  "> Clearance Level : OMEGA",
  "> Mission Database Loaded",
  "> Awaiting Orders..."
];

export default function LiveTerminal() {
  const [visible, setVisible] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setVisible((prev) => [...prev, lines[index]]);
      index++;

      if (index === lines.length) {
        clearInterval(timer);
      }
    }, 700);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-green-500/30 bg-black/70 p-6 font-mono text-green-400">
      <h3 className="mb-4 text-lg font-bold">
        SECURE TERMINAL
      </h3>

      {visible.map((line, i) => (
        <p key={i} className="mb-2">
          {line}
        </p>
      ))}

      <span className="animate-pulse">▋</span>
    </div>
  );
}