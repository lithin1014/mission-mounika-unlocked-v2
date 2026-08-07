import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  GRID_SIZE,
  START,
  GOAL,
  LASERS,
} from "../data/mission4";
import { completeMission } from "../utils/missionProgress";

export default function Mission4Page() {
  const navigate = useNavigate();

  const [player, setPlayer] = useState(START);
  const [message, setMessage] = useState("");

  useEffect(() => {
    function move(e: KeyboardEvent) {
      let { x, y } = player;

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          y--;
          break;

        case "ArrowDown":
        case "s":
        case "S":
          y++;
          break;

        case "ArrowLeft":
        case "a":
        case "A":
          x--;
          break;

        case "ArrowRight":
        case "d":
        case "D":
          x++;
          break;

        default:
          return;
      }

      if (
        x < 0 ||
        y < 0 ||
        x >= GRID_SIZE ||
        y >= GRID_SIZE
      ) {
        return;
      }

      const hitLaser = LASERS.some(
        (l) => l.x === x && l.y === y
      );

      if (hitLaser) {
        setMessage("🚨 ACCESS DENIED\nRestarting Mission...");

        setTimeout(() => {
          setPlayer(START);
          setMessage("");
        }, 1500);

        return;
      }

      if (x === GOAL.x && y === GOAL.y) {
        setPlayer({ x, y });

        completeMission(4);

        setMessage(
          "🎉 Mission Complete!\nKey Fragment 04 Recovered."
        );

        setTimeout(() => {
          navigate("/mission-complete");
        }, 2500);

        return;
      }

      setPlayer({ x, y });
    }

    window.addEventListener("keydown", move);

    return () => {
      window.removeEventListener("keydown", move);
    };
  }, [player, navigate]);

  return (
    <main className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center px-6">

      <h1 className="mb-3 text-5xl font-bold">
        Laser Security Maze
      </h1>

      <p className="mb-8 text-green-300">
        Use Arrow Keys or WASD
      </p>

      <div
        className="grid border-4 border-green-500"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE},42px)`,
        }}
      >
        {Array.from({ length: GRID_SIZE }).map((_, y) =>
          Array.from({ length: GRID_SIZE }).map((_, x) => {
            const laser = LASERS.some(
              (l) => l.x === x && l.y === y
            );

            const goal =
              GOAL.x === x &&
              GOAL.y === y;

            const me =
              player.x === x &&
              player.y === y;

            return (
              <div
                key={`${x}-${y}`}
                className="flex h-10 w-10 items-center justify-center text-xl"
              >
                {me ? (
                  "🕵️"
                ) : goal ? (
                  "🎁"
                ) : laser ? (
                  "🔴"
                ) : (
                  ""
                )}
              </div>
            );
          })
        )}
      </div>

      {message && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 whitespace-pre-line text-center text-3xl text-yellow-400"
        >
          {message}
        </motion.div>
      )}
    </main>
  );
}