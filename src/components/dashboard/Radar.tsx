import { motion } from "framer-motion";

export default function Radar() {
  return (
    <div className="flex justify-center items-center">

      <div className="relative h-72 w-72 rounded-full border-2 border-green-500/40 bg-black overflow-hidden">

        {/* Rings */}

        <div className="absolute inset-6 rounded-full border border-green-500/20" />
        <div className="absolute inset-12 rounded-full border border-green-500/20" />
        <div className="absolute inset-20 rounded-full border border-green-500/20" />

        {/* Horizontal */}

        <div className="absolute left-0 top-1/2 h-px w-full bg-green-500/20" />

        {/* Vertical */}

        <div className="absolute top-0 left-1/2 h-full w-px bg-green-500/20" />

        {/* Sweep */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 4,
          }}
          className="absolute left-1/2 top-1/2 h-36 w-1 origin-bottom bg-gradient-to-t from-green-500 via-green-400 to-transparent"
        />

        {/* Center */}

        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400 shadow-[0_0_20px_#22c55e]" />

        {/* Targets */}

        <div className="absolute left-24 top-16 h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        <div className="absolute right-16 bottom-20 h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        <div className="absolute right-24 top-28 h-2 w-2 rounded-full bg-green-400 animate-pulse" />

      </div>

    </div>
  );
}