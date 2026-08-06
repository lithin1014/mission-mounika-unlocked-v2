import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function GiftChallengePage() {
  const navigate = useNavigate();

  const [tries, setTries] = useState(0);
  const [finished, setFinished] = useState(false);

  const [position, setPosition] = useState({
    left: window.innerWidth / 2 - 50,
    top: window.innerHeight / 2 - 50,
  });

  const messages = [
    "Hmm... almost 😏",
    "Too slow, Agent...",
    "Not today 😂",
    "You can do better...",
    "Catch me if you can!",
    "Mission Control is watching...",
    "Still trying? 😄",
    "Interesting...",
    "😂 Nice try, Agent..."
  ];

  function moveGift() {
    if (finished) return;

    if (tries >= 8) {
      setFinished(true);

      setTimeout(() => {
        navigate("/countdown");
      }, 5000);

      return;
    }

    setPosition({
      left: Math.random() * (window.innerWidth - 120),
      top: Math.random() * (window.innerHeight - 120),
    });

    setTries((prev) => prev + 1);
  }

  return (
    <main className="relative h-screen overflow-hidden bg-black text-green-400">

      <div className="absolute inset-0 bg-[radial-gradient(circle,#00ff8810,transparent_70%)]"></div>

      {[...Array(60)].map((_, index) => (
        <div
          key={index}
          className="absolute h-1 w-1 rounded-full bg-green-500/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {!finished ? (
        <>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-20 text-center text-5xl font-bold"
          >
            CLASSIFIED PACKAGE DETECTED
          </motion.h1>

          <p className="mt-8 text-center text-xl text-green-300">
            Agent Mounika...
            <br />
            Capture the encrypted package.
          </p>

          <motion.button
            onMouseEnter={moveGift}
            onClick={moveGift}
            animate={{
              left: position.left,
              top: position.top,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
            className="absolute cursor-pointer select-none text-8xl"
            style={{
              position: "absolute",
            }}
          >
            🎁
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.p
              key={tries}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-16 left-0 w-full text-center text-2xl text-green-400"
            >
              {messages[Math.min(tries, messages.length - 1)]}
            </motion.p>
          </AnimatePresence>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-full flex-col items-center justify-center px-8 text-center"
        >
          <motion.h1
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
            className="text-5xl font-bold"
          >
            ACCESS DENIED
          </motion.h1>

          <p className="mt-10 max-w-3xl text-2xl leading-10">
            😂 Nice Try Agent...
            <br />
            <br />
            This package is protected.
            <br />
            Synchronizing Mission Control...
          </p>

          <div className="mt-10 h-2 w-80 overflow-hidden rounded-full bg-gray-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 4 }}
              className="h-full bg-green-500"
            />
          </div>
        </motion.div>
      )}
    </main>
  );
}