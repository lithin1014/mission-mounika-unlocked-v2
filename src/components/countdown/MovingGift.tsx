import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MISSION_DATES } from "../../config/schedule";

export default function MovingGift() {
  const navigate = useNavigate();

  const [position, setPosition] = useState({
    x: 60,
    y: 60,
  });

  const [tries, setTries] = useState(0);

  const unlocked =
    new Date() >= MISSION_DATES.vault;

  function moveGift() {
    if (unlocked) {
      navigate("/vault");
      return;
    }

    if (tries >= 8) return;

    setPosition({
      x: Math.random() * 75,
      y: Math.random() * 70,
    });

    setTries((t) => t + 1);
  }

  return (
    <>
      <button
        onMouseEnter={moveGift}
        onClick={moveGift}
        className="absolute text-6xl transition-all duration-300"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
      >
        🎁
      </button>

      {tries >= 8 && !unlocked && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 rounded-2xl border border-green-500/30 bg-black/80 p-6 text-center">
          <h2 className="text-2xl font-bold text-green-400">
            😂 Nice Try Agent!
          </h2>

          <p className="mt-3 text-green-300">
            This gift is protected.
          </p>

          <p className="mt-2 text-green-300">
            Complete every mission to unlock it.
          </p>
        </div>
      )}
    </>
  );
}