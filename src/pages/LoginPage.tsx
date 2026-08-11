import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  hasProjectStarted,
  getCountdown,
} from "../utils/timeLock";

const PASSWORD = "redvelevt&bbapizza";

export default function LoginPage() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function verify() {
    if (password.trim().toUpperCase() !== PASSWORD) {
      setError("ACCESS DENIED");
      return;
    }

    if (!hasProjectStarted()) {
      setError(
        "MISSION NETWORK OFFLINE\nMission access begins on 7 August 2026."
      );
      return;
    }

    navigate("/dashboard");
  }

  return (
    <main className="min-h-screen bg-black text-green-400 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl rounded-3xl border border-green-500/30 bg-green-500/5 p-10"
      >
        <p className="font-mono tracking-[0.4em] uppercase text-green-500">
          Secure Terminal
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Agent Authentication
        </h1>

        <p className="mt-6 text-green-300">
          Enter your classified access key.
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") verify();
          }}
          placeholder="Security Key"
          className="mt-10 w-full rounded-xl border border-green-500/30 bg-black px-5 py-4 text-lg outline-none focus:border-green-400"
        />

        {error && (
          <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
            <p className="whitespace-pre-line font-mono text-red-400">
              {error}
            </p>

            {!hasProjectStarted() && countdown && (
              <div className="mt-4 text-center">
                <p className="text-green-300">
                  Mission starts in
                </p>

                <h2 className="mt-2 text-3xl font-bold text-green-400">
                  {countdown.days}d {countdown.hours}h{" "}
                  {countdown.minutes}m {countdown.seconds}s
                </h2>
              </div>
            )}
          </div>
        )}

        <button
          onClick={verify}
          className="mt-8 w-full rounded-xl bg-green-500 py-4 font-bold text-black transition hover:bg-green-400"
        >
          Authenticate
        </button>
      </motion.div>
    </main>
  );
}