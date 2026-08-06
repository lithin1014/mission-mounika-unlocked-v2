import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/ui/Button";
import { mission2Challenges } from "../data/mission2";
import { completeMission } from "../utils/missionProgress";
import TerminalWindow from "../components/terminal/TerminalWindow";
import MatrixRain from "../components/terminal/MatrixRain";
import HackingLoader from "../components/terminal/HackingLoader";

export default function Mission2Page() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");
  const [attempts, setAttempts] = useState(3);
  const [error, setError] = useState("");

  const challenge = mission2Challenges[current];
  const [loading, setLoading] = useState(true);

  function submit() {
    if (
      answer.trim().toUpperCase() ===
      challenge.answer.toUpperCase()
    ) {
      setAnswer("");
      setError("");

      // Last challenge completed
      if (current === mission2Challenges.length - 1) {
        completeMission(2);
        navigate("/mission-complete");
        return;
      }

      // Next challenge
      setCurrent((prev) => prev + 1);
      return;
    }

    const left = attempts - 1;

    setAttempts(left);

    if (left <= 0) {
      alert("Firewall Locked!\nMission Failed.");
      navigate("/dashboard");
      return;
    }

    setError(`ACCESS DENIED\nAttempts Left : ${left}`);
  }
    if (loading) {
  return (
    <HackingLoader
      onComplete={() => setLoading(false)}
    />
  );
}
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#021b08] to-black text-green-400 flex items-center justify-center px-6">

    <MatrixRain />
    <div className="relative z-10">


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-4xl rounded-3xl border border-green-500/30 bg-black/70 p-10"
      >
        <p className="tracking-[0.35em] uppercase text-green-500">
          CYBER TERMINAL
        </p>

        <h1 className="mt-5 text-4xl font-bold">
          Firewall Authentication
        </h1>
        <TerminalWindow />
        <div className="mt-8 flex justify-between">
          <span>
            Challenge {current + 1} / {mission2Challenges.length}
          </span>

          <span>Attempts : {attempts}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <pre className="mt-10 whitespace-pre-wrap font-mono text-xl leading-9">
              {challenge.question}
            </pre>

            {challenge.hint && (
              <p className="mt-6 text-yellow-400">
                Hint: {challenge.hint}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <input
          autoFocus
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submit();
            }
          }}
          placeholder="Type Answer..."
          className="mt-8 w-full rounded-xl border border-green-500 bg-black/80 px-5 py-4 font-mono text-xl text-green-400 outline-none transition-all duration-300 focus:border-green-300 focus:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
        />

        {error && (
          <p className="mt-4 whitespace-pre-line text-red-500">
            {error}
          </p>
        )}

        <Button className="mt-8 w-full" onClick={submit}>
          VERIFY
        </Button>
      </motion.div>
      </div>
    </main>
  );
}