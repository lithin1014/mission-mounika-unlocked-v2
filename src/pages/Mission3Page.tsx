import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { mission3Files } from "../data/mission3";
import { completeMission } from "../utils/missionProgress";

export default function Mission3Page() {
  const navigate = useNavigate();

  const [opened, setOpened] = useState<number | null>(null);
  const [answer, setAnswer] = useState("");
  const [completed, setCompleted] = useState<number[]>([]);
  const [error, setError] = useState("");

  function verify() {
    if (opened === null) return;

    const file = mission3Files.find((f) => f.id === opened);

    if (!file) return;

    if (answer.trim().toLowerCase() === file.answer.toLowerCase()) {
      const updated = [...completed, opened];

      setCompleted(updated);
      setAnswer("");
      setError("");
      setOpened(null);

      if (updated.length === mission3Files.length) {
        completeMission(3);

        setTimeout(() => {
          navigate("/mission-complete");
        }, 1500);
      }

      return;
    }

    setError("ACCESS DENIED");
  }

  return (
    <main className="min-h-screen bg-black text-green-400 px-6 py-10">

      <div className="mx-auto max-w-6xl">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-5xl font-bold"
        >
          Agent Investigation
        </motion.h1>

        <p className="mt-4 text-center text-green-300">
          Recover every classified file.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {mission3Files.map((file) => {

            const solved = completed.includes(file.id);

            return (

              <motion.div
                whileHover={{ scale: 1.04 }}
                key={file.id}
                onClick={() => {
                  if (!solved) {
                    setOpened(file.id);
                    setAnswer("");
                    setError("");
                  }
                }}
                className={`
                  cursor-pointer
                  rounded-2xl
                  border
                  p-8
                  transition-all
                  ${
                    solved
                      ? "border-green-500 bg-green-500/10"
                      : "border-green-500/30 bg-black"
                  }
                `}
              >

                <div className="text-6xl text-center">

                  {solved ? "✅" : "📁"}

                </div>

                <h2 className="mt-5 text-center text-xl font-bold">

                  {file.title}

                </h2>

                <p className="mt-3 text-center text-green-300">

                  {solved
                    ? "FILE DECRYPTED"
                    : "Encrypted"}

                </p>

              </motion.div>

            );

          })}

        </div>

        <AnimatePresence>

          {opened !== null && (

            <motion.div
              initial={{ opacity: 0, scale: .9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6"
            >

              <div className="w-full max-w-2xl rounded-3xl border border-green-500 bg-black p-8">

                <h2 className="text-3xl font-bold">

                  {
                    mission3Files.find(
                      (f) => f.id === opened
                    )?.title
                  }

                </h2>

                <p className="mt-8 text-xl leading-9">

                  {
                    mission3Files.find(
                      (f) => f.id === opened
                    )?.question
                  }

                </p>

                <p className="mt-5 text-yellow-400">

                  Hint :
                  {
                    mission3Files.find(
                      (f) => f.id === opened
                    )?.hint
                  }

                </p>

                <input
                  value={answer}
                  onChange={(e) =>
                    setAnswer(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      verify();
                    }
                  }}
                  placeholder="Decrypt..."
                  className="mt-8 w-full rounded-xl border border-green-500 bg-black px-5 py-4 outline-none"
                />

                {error && (

                  <p className="mt-4 text-red-500">

                    {error}

                  </p>

                )}

                <div className="mt-8 flex gap-4">

                  <Button
                    className="flex-1"
                    onClick={verify}
                  >
                    DECRYPT
                  </Button>

                  <Button
                    className="flex-1"
                    onClick={() => {
                      setOpened(null);
                      setAnswer("");
                      setError("");
                    }}
                  >
                    CLOSE
                  </Button>

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </main>
  );
}