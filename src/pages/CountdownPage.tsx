import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CountdownTimer from "../components/common/CountdownTimer";
import MovingGift from "../components/countdown/MovingGift";
import { hasProjectStarted } from "../utils/timeLock";

export default function CountdownPage() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-green-400 flex items-center justify-center px-6">

      {/* Moving Gift */}
      <MovingGift />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl rounded-3xl border border-green-500/30 bg-green-500/5 p-10 backdrop-blur-md"
      >
        <p className="font-mono uppercase tracking-[0.45em] text-green-500 text-sm">
          OPERATION HEART PROTOCOL
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Mission Countdown
        </h1>

        <p className="mt-6 text-lg text-green-300 leading-8">
          Agent Mounika,
          <br />
          Your classified mission will unlock when the countdown reaches zero.
        </p>

        <CountdownTimer />

        <div className="mt-10 rounded-2xl border border-green-500/20 bg-black/40 p-6">
          <h2 className="text-xl font-bold text-green-400">
            Mission Rules
          </h2>

          <ul className="mt-4 space-y-2 text-green-300">
            <li>✔ One mission unlocks every 24 hours.</li>
            <li>✔ Previous mission must be completed.</li>
            <li>✔ The final vault unlocks on 14 August.</li>
            <li>✔ Don't forget to catch the 🎁 if you can...</li>
          </ul>
        </div>

        <div className="mt-12">
          <p className="font-mono text-green-500 uppercase tracking-[0.3em]">
            Decrypting Memories...
          </p>

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-gray-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="h-full bg-green-500"
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center">

          {hasProjectStarted() ? (
            <button
              onClick={() => navigate("/login")}
              className="rounded-xl border border-green-500 px-8 py-3 font-mono uppercase tracking-[0.3em] transition hover:bg-green-500 hover:text-black"
            >
              Start Mission
            </button>
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded-xl border border-gray-700 bg-gray-900 px-8 py-3 font-mono uppercase tracking-[0.3em] text-gray-500"
            >
              Waiting For Mission...
            </button>
          )}

        </div>
      </motion.div>

    </main>
  );
}