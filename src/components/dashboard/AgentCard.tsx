import { motion } from "framer-motion";

export default function AgentCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="rounded-2xl border border-green-500/30 bg-black/70 p-6"
    >
      <p className="text-green-500 uppercase tracking-[0.35em] text-sm">
        AGENT PROFILE
      </p>

      <div className="mt-6 flex items-center gap-5">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-green-500 bg-green-500/10 text-4xl">
          👩
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            Agent Mounika
          </h2>

          <p className="mt-2 text-green-400">
            Clearance : OMEGA
          </p>

          <p className="text-green-400">
            Status : VERIFIED
          </p>
        </div>
      </div>
    </motion.div>
  );
}