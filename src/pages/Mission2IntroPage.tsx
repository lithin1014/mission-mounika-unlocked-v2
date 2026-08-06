import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function Mission2IntroPage() {

  const navigate = useNavigate();

  return (

    <main className="min-h-screen bg-black text-green-400 flex items-center justify-center">

      <motion.div

        initial={{opacity:0}}

        animate={{opacity:1}}

        className="max-w-4xl rounded-3xl border border-green-500/30 bg-black/70 p-10"

      >

        <p className="tracking-[0.4em] uppercase text-green-500">

          MISSION 02

        </p>

        <h1 className="mt-6 text-5xl font-bold">

          CYBER SECURITY

        </h1>

        <p className="mt-8 leading-8">

          Agent Mounika...

          <br/><br/>

          The Memory Vault is protected by
          a military-grade firewall.

          <br/><br/>

          Only a cybersecurity expert can
          break through.

          <br/><br/>

          You have THREE attempts.

        </p>

        <Button

          className="mt-12 w-full"

          onClick={()=>navigate("/mission-2/play")}

        >

          BEGIN HACK

        </Button>

      </motion.div>

    </main>

  );

}