import { useNavigate } from "react-router-dom";
import GlassPanel from "../components/ui/GlassPanel";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/ui/Card";

import AgentCard from "../components/dashboard/AgentCard";
import LiveTerminal from "../components/dashboard/LiveTerminal";
import ProgressBar from "../components/dashboard/ProgressBar";
import MissionCard from "../components/dashboard/MissionCard";
import Radar from "../components/dashboard/Radar";
import AnimatedBackground from "../components/dashboard/AnimatedBackground";
import AIAssistant from "../components/dashboard/AIAssistant";

import { getMissionProgress } from "../utils/progress";
import { missions } from "../data/missions";

export default function DashboardPage() {
  const navigate = useNavigate();

  const progress = getMissionProgress();

  const completedMissions = progress.completed.length;
  const progressPercent = (completedMissions / 7) * 100;

  return (
  <>
  <AnimatedBackground />

  <main className="min-h-screen text-green-400 px-6 py-10 relative">
      <div className="mx-auto max-w-7xl">
        <GlassPanel>
          <SectionTitle
            subtitle="MISSION CONTROL"
            title="Welcome Agent Mounika"
          />

          <p className="mt-4 text-green-300">
            Secure communication established.
          </p>

          {/* Top Section */}

          <div className="mt-10 grid gap-8 lg:grid-cols-2">

    <AgentCard />

    <Radar />

</div>

<div className="mt-8">

    <LiveTerminal />

</div>

<div className="mt-8">

    <AIAssistant />

</div>

          {/* Progress */}

          <ProgressBar progress={progressPercent} />

          {/* Agent Info */}

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card>
              <p className="text-sm text-gray-400">Agent Status</p>

              <h2 className="mt-2 text-2xl font-bold text-green-400">
                VERIFIED
              </h2>
            </Card>

            <Card>
              <p className="text-sm text-gray-400">Clearance</p>

              <h2 className="mt-2 text-2xl font-bold text-green-400">
                OMEGA
              </h2>
            </Card>

            <Card>
              <p className="text-sm text-gray-400">
                Missions Completed
              </p>

              <h2 className="mt-2 text-2xl font-bold text-green-400">
                {completedMissions} / 7
              </h2>
            </Card>
          </div>

          {/* Mission Cards */}

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {missions.map((mission) => {
              const completed = progress.completed.includes(mission.id);

              const unlocked =
                mission.id === 1 ||
                progress.completed.includes(mission.id - 1);

              return (
                <MissionCard
                  key={mission.id}
                  id={mission.id}
                  title={mission.title}
                  completed={completed}
                  unlocked={unlocked}
                  onEnter={() =>
                    navigate(`/mission-${mission.id}`)
                  }
                />
              );
            })}
          </div>
        </GlassPanel>
      </div>
    </main>
    </>
  );
}