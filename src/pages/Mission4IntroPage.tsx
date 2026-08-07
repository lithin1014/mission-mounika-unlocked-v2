import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function Mission4IntroPage() {

  const navigate = useNavigate();

  return (

    <main className="min-h-screen bg-black text-green-400 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        className="max-w-5xl rounded-3xl border border-green-500/30 bg-green-500/5 p-10"
      >

        <p className="tracking-[0.4em] uppercase text-green-500">

          Mission 04

        </p>

        <h1 className="mt-6 text-5xl font-bold">

          Laser Security Maze

        </h1>

        <div className="mt-10 space-y-6 text-xl leading-9">

          <p>
            Agent Mounika...
          </p>

          <p>
            Mission Control has located the fourth key fragment.
          </p>

          <p>
            Unfortunately...
          </p>

          <p>
            The entire vault is protected by laser beams.
          </p>

          <p>
            Reach the gift without touching a laser.
          </p>

          <p className="text-yellow-400">

            One wrong move...

            <br/>

            Security will restart the mission.

          </p>

        </div>

        <Button
          className="mt-12 w-full"
          onClick={()=>navigate("/mission-4/play")}
        >

          ENTER MAZE

        </Button>

      </motion.div>

    </main>

  );

}