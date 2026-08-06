import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function MissionCompletePage() {

  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {

      navigate("/dashboard");

    }, 6000);

    return () => clearTimeout(timer);

  }, [navigate]);

  return (

    <main className="min-h-screen bg-black flex items-center justify-center text-green-400">

      <motion.div

        initial={{ scale: .8, opacity: 0 }}

        animate={{ scale: 1, opacity: 1 }}

        transition={{ duration: .8 }}

        className="w-full max-w-3xl rounded-3xl border border-green-500/30 bg-black/70 p-12 text-center"

      >

        <motion.h1

          initial={{ y: -30 }}

          animate={{ y: 0 }}

          className="text-5xl font-bold"

        >

          ✓ MISSION COMPLETE

        </motion.h1>

        <p className="mt-8 text-xl">

          Identity Successfully Verified

        </p>

        <motion.div

          initial={{ scale: 0 }}

          animate={{ scale: 1 }}

          transition={{ delay: 1 }}

          className="mt-12"

        >

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-yellow-400 text-6xl">

            🔑

          </div>

        </motion.div>

        <motion.h2

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 2 }}

          className="mt-8 text-3xl font-bold text-yellow-400"

        >

          KEY FRAGMENT ACQUIRED

        </motion.h2>

        <motion.p

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 3 }}

          className="mt-4"

        >

          Security Key 1 / 7 Stored

        </motion.p>

        <motion.p

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 4 }}

          className="mt-12 text-sm text-green-500"

        >

          Returning to Mission Control...

        </motion.p>

      </motion.div>

    </main>

  );

}