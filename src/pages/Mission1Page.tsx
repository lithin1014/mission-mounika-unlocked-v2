import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import GlassPanel from "../components/ui/GlassPanel";
import Button from "../components/ui/Button";
import SectionTitle from "../components/common/SectionTitle";
import MissionTerminal from "../components/mission/MissionTerminal";

export default function Mission1Page() {
  const navigate = useNavigate();

  const [terminalFinished, setTerminalFinished] = useState(false);

  return (
    <main className="min-h-screen bg-black text-green-400 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-5xl">

        <GlassPanel>

          <SectionTitle
            subtitle="MISSION 01"
            title="Identity Verification"
          />

          <p className="mt-4 text-green-300">
            Accessing classified emotional database...
          </p>

          <div className="mt-10">

            <MissionTerminal
              lines={[
                "Connecting to Secure Server...",
                "Establishing Encrypted Channel...",
                "Access Granted.",
                "Scanning Emotional Database...",
                "Searching Agent Records...",
                "MATCH FOUND",
                "AGENT : MOUNIKA",
                "CLEARANCE LEVEL : OMEGA",
                "MISSION STATUS : READY",
              ]}
              onComplete={() => setTerminalFinished(true)}
            />

          </div>

          {terminalFinished && (

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 flex justify-center"
            >

              <Button
                onClick={() => navigate("/mission-1/questions")}
              >
                START MISSION
              </Button>

            </motion.div>

          )}

        </GlassPanel>

      </div>

    </main>
  );
}