import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const messages = [
  "Welcome Agent Mounika...",
  "Identity Confirmed.",
  "Loading Heart Protocol...",
  "7 Secret Missions Loaded.",
  "Today's objective: Complete Mission 01.",
  "Good Luck, Agent ❤️"
];

export default function AIAssistant() {

  const [text, setText] = useState("");

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {

    if (messageIndex >= messages.length) return;

    let char = 0;

    setText("");

    const typing = setInterval(() => {

      setText(messages[messageIndex].slice(0, char + 1));

      char++;

      if (char === messages[messageIndex].length) {

        clearInterval(typing);

        setTimeout(() => {

          setMessageIndex((prev) => prev + 1);

        }, 1200);

      }

    }, 40);

    return () => clearInterval(typing);

  }, [messageIndex]);

  return (

    <motion.div

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

      className="rounded-2xl border border-green-500/30 bg-black/70 p-6"

    >

      <p className="mb-4 text-green-500 uppercase tracking-[0.3em]">

        AI ASSISTANT

      </p>

      <p className="min-h-[70px] font-mono text-green-300">

        {messageIndex < messages.length
          ? text
          : "System Standing By..."}

        <span className="animate-pulse">▋</span>

      </p>

    </motion.div>

  );

}