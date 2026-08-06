import { motion } from "framer-motion";

interface Props {
  progress: number;
}

export default function ProgressBar({ progress }: Props) {
  return (
    <div className="mt-8">
      <div className="mb-2 flex justify-between text-green-400">
        <span>MISSION PROGRESS</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <div className="h-4 rounded-full bg-gray-900 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5 }}
          className="h-full rounded-full bg-green-500"
        />
      </div>
    </div>
  );
}