import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function Mission3IntroPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-black text-green-400 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl rounded-3xl border border-green-500/30 bg-green-500/5 p-10 backdrop-blur-md"
      >

        <p className="font-mono uppercase tracking-[0.45em] text-green-500">
          Mission 03
        </p>

        <h1 className="mt-5 text-5xl font-bold">
          Agent Investigation
        </h1>

        <div className="mt-10 space-y-6 text-xl leading-9 text-green-300">

          <p>
            Agent Mounika...
          </p>

          <p>
            Mission Control has recovered several encrypted intelligence files.
          </p>

          <p>
            These files contain memories that only you can decrypt.
          </p>

          <p>
            Every correct answer unlocks one classified file.
          </p>

          <p>
            Recover every file to obtain the third secret key fragment.
          </p>

          <p className="text-yellow-400">
            WARNING :
            Incorrect answers will trigger the security system.
          </p>

        </div>

        <Button
          className="mt-12 w-full"
          onClick={() => navigate("/mission-3/play")}
        >
          START INVESTIGATION
        </Button>

      </motion.div>

    </main>
  );
}