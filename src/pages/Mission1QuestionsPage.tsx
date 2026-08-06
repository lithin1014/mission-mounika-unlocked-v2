import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import GlassPanel from "../components/ui/GlassPanel";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import SectionTitle from "../components/common/SectionTitle";

import { mission1Questions } from "../data/questions";
import { completeMission } from "../utils/progress";

export default function Mission1QuestionsPage() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const question = mission1Questions[current];

  function verifyAnswer() {
    if (
      answer.trim().toLowerCase() !==
      question.answer.trim().toLowerCase()
    ) {
      setError("ACCESS DENIED");
      return;
    }

    setError("");
    setAnswer("");

    if (current < mission1Questions.length - 1) {
      setCurrent(current + 1);
      return;
    }

    completeMission(1);

   navigate("/mission-complete");
  }

  return (
    <main className="min-h-screen bg-black text-green-400 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl">
        <GlassPanel>

          <SectionTitle
            subtitle="MISSION 01"
            title="Identity Verification"
          />

          <div className="mt-8">

            <div className="flex justify-between mb-4">
              <span>
                Question {current + 1}
              </span>

              <span>
                {current + 1} / {mission1Questions.length}
              </span>
            </div>

            <div className="h-2 rounded-full bg-gray-800">
              <motion.div
                className="h-full rounded-full bg-green-500"
                animate={{
                  width: `${
                    ((current + 1) /
                      mission1Questions.length) *
                    100
                  }%`,
                }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="mt-10"
              >
                <h2 className="text-2xl font-bold">
                  {question.question}
                </h2>
                            <div className="mt-8">
                  <Input
                    autoFocus
                    placeholder="Type your answer..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        verifyAnswer();
                      }
                    }}
                  />
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 text-red-500 font-mono"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="mt-8">
                  <Button onClick={verifyAnswer}>
                    VERIFY ANSWER
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </GlassPanel>
      </div>
    </main>
  );
}