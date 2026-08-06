import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BootPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/gift-challenge");
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="min-h-screen bg-black text-green-400 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-widest"
        >
          OPERATION
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-3xl"
        >
          HEART PROTOCOL
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "300px" }}
          transition={{ duration: 4 }}
          className="mx-auto mt-12 h-2 rounded-full bg-green-500"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2 }}
          className="mt-8 text-sm tracking-[0.4em]"
        >
          INITIALIZING...
        </motion.p>
      </motion.div>
    </main>
  );
}