import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import {
  mission5Fragments,
  mission5Code,
} from "../data/mission5";
import { completeMission } from "../utils/missionProgress";

export default function Mission5Page() {
  const navigate = useNavigate();

  const [fragments, setFragments] = useState(
    [...mission5Fragments].sort(() => Math.random() - 0.5)
  );

  const [selected, setSelected] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");
  const [solved, setSolved] = useState(false);

  function selectFragment(index: number) {
    if (solved) return;

    if (selected === null) {
      setSelected(index);
      setMessage("");
      return;
    }

    if (selected === index) {
      setSelected(null);
      return;
    }

    const updated = [...fragments];

    [updated[selected], updated[index]] = [
      updated[index],
      updated[selected],
    ];

    setFragments(updated);
    setSelected(null);
    setMessage("");
  }

  function verifySequence() {
    const correct = fragments.every(
      (fragment, index) =>
        fragment.correctPosition === index + 1
    );

    if (!correct) {
      setMessage("SEQUENCE INVALID // RECONSTRUCTION FAILED");
      return;
    }

    setMessage("MEMORY SEQUENCE VERIFIED");
    setSolved(true);
  }

  function verifyCode() {
    if (code.trim().toUpperCase() !== mission5Code) {
      setMessage("ACCESS DENIED // INVALID MEMORY CODE");
      return;
    }

    completeMission(5);

    setMessage("MISSION 05 COMPLETE");

    setTimeout(() => {
      navigate("/mission-complete");
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-green-400">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.4em] text-green-500">
            OPERATION HEART PROTOCOL // MISSION 05
          </p>

          <h1 className="mt-5 text-center text-5xl font-bold">
            MEMORY RECONSTRUCTION
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-green-300">
            Agent Mounika, the memory archive has been corrupted.
            Reconstruct the classified fragments in their original
            chronological sequence.
          </p>
        </motion.div>

        {!solved && (
          <>
            <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-green-500/30 bg-green-500/5 p-6">
              <p className="text-center font-mono text-sm uppercase tracking-[0.25em] text-green-500">
                Select two fragments to swap their positions
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {fragments.map((fragment, index) => (
                <motion.button
                  key={fragment.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => selectFragment(index)}
                  className={`rounded-2xl border p-6 text-left transition-all ${
                    selected === index
                      ? "border-yellow-400 bg-yellow-400/10"
                      : "border-green-500/30 bg-green-500/5 hover:border-green-400"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-green-500">
                      POSITION {index + 1}
                    </span>

                    <span className="text-2xl">🧠</span>
                  </div>

                  <h2 className="mt-5 text-xl font-bold">
                    {fragment.title}
                  </h2>

                  <p className="mt-4 leading-7 text-green-300">
                    {fragment.text}
                  </p>
                </motion.button>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button onClick={verifySequence}>
                VERIFY MEMORY
              </Button>
            </div>
          </>
        )}

        {solved && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mt-16 max-w-2xl rounded-3xl border border-green-500 bg-green-500/5 p-10 text-center"
          >
            <div className="text-6xl">🔓</div>

            <h2 className="mt-6 text-3xl font-bold">
              MEMORY ARCHIVE RESTORED
            </h2>

            <p className="mt-5 text-green-300">
              The chronological sequence has been successfully
              reconstructed.
            </p>

            <p className="mt-8 font-mono uppercase tracking-[0.3em] text-green-500">
              CLASSIFIED CODE REQUIRED
            </p>

            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  verifyCode();
                }
              }}
              placeholder="ENTER MEMORY CODE"
              className="mt-6 w-full rounded-xl border border-green-500/40 bg-black px-5 py-4 text-center font-mono text-lg uppercase tracking-[0.25em] outline-none focus:border-green-400"
            />

            <div className="mt-6">
              <Button
                className="w-full"
                onClick={verifyCode}
              >
                UNLOCK MISSION 05
              </Button>
            </div>
          </motion.div>
        )}

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-8 text-center font-mono ${
              message.includes("COMPLETE") ||
              message.includes("VERIFIED")
                ? "text-green-400"
                : "text-red-500"
            }`}
          >
            {message}
          </motion.p>
        )}

      </div>
    </main>
  );
}