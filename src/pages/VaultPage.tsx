import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function VaultPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-green-400">

      <motion.div
        initial={{ scale: .8, opacity:0 }}
        animate={{ scale:1, opacity:1 }}
        className="text-center max-w-4xl"
      >

        <h1 className="text-6xl font-bold">

          🔐 MEMORY VAULT

        </h1>

        <p className="mt-8 text-xl">

          Seven security keys detected.

        </p>

        <p className="mt-3">

          Access Granted.

        </p>

        <motion.div

          animate={{
            rotate:360
          }}

          transition={{
            repeat:Infinity,
            duration:8,
            ease:"linear"
          }}

          className="mx-auto mt-12 h-48 w-48 rounded-full border-4 border-green-500"

        />

        <Button

          className="mt-12"

          onClick={()=>navigate("/gallery")}

        >

          OPEN MEMORY VAULT

        </Button>

      </motion.div>

    </main>
  );
}