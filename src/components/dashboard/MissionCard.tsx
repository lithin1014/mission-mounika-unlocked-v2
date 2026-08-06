import { motion } from "framer-motion";
import Button from "../ui/Button";

interface Props {
  id: number;
  title: string;
  completed: boolean;
  unlocked: boolean;
  onEnter: () => void;
}

export default function MissionCard({
  id,
  title,
  completed,
  unlocked,
  onEnter,
}: Props) {
  return (
    <motion.div
      whileHover={unlocked ? { scale: 1.03 } : {}}
      transition={{ duration: 0.25 }}
      className={`
        rounded-2xl
        border
        p-6
        backdrop-blur-md
        transition-all
        duration-300

        ${
          completed
            ? "border-blue-500/60 shadow-[0_0_25px_rgba(59,130,246,.35)]"
            : unlocked
            ? "border-green-500/60 shadow-[0_0_25px_rgba(34,197,94,.25)]"
            : "border-gray-700 opacity-70"
        }
      `}
    >
      <p className="text-xs uppercase tracking-[0.35em] text-green-500">
        Operation {id.toString().padStart(2, "0")}
      </p>

      <h2 className="mt-3 text-2xl font-bold text-white">
        {title}
      </h2>

      <div className="mt-6">

        {completed ? (
          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
            ✓ COMPLETED
          </span>
        ) : unlocked ? (
          <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">
            READY
          </span>
        ) : (
          <span className="rounded-full bg-gray-700 px-3 py-1 text-xs font-bold text-white">
            CLASSIFIED
          </span>
        )}

      </div>

      <Button
        disabled={!unlocked}
        onClick={onEnter}
        className="mt-8 w-full"
      >
        {completed
          ? "Replay Mission"
          : unlocked
          ? "Enter Mission"
          : "Locked"}
      </Button>
    </motion.div>
  );
}