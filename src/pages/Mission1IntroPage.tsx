import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function Mission1IntroPage() {
  const navigate = useNavigate();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-green-400 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl rounded-3xl border border-green-500/30 bg-black/70 p-10"
      >
        <p className="tracking-[0.5em] text-sm uppercase text-green-500">
          TOP SECRET
        </p>

        <h1 className="mt-5 text-5xl font-bold">
          Mission 01
        </h1>

        <h2 className="mt-4 text-2xl">
          Identity Verification
        </h2>

        <p className="mt-8 leading-8 text-green-300">
          Agent Mounika...

          <br /><br />

          Your identity must be verified before
          access to the classified memory vault
          is granted.

          <br /><br />

          Complete all security protocols.

          <br /><br />

          Good Luck, Agent.
        </p>

        {showButton && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12"
          >
            <Button
              className="w-full py-5 text-lg"
              onClick={() => navigate("/mission-1/questions")}
            >
              BEGIN MISSION
            </Button>
          </motion.div>

        )}

      </motion.div>

    </main>
  );
}