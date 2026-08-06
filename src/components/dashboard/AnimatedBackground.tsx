import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,197,94,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Glows */}

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.2,
          }}
          animate={{
            y: [null, -120],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute h-2 w-2 rounded-full bg-green-400 blur-[1px]"
        />
      ))}

      {/* Scan Line */}

      <motion.div
        initial={{ y: -100 }}
        animate={{ y: "100vh" }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
        className="absolute left-0 h-1 w-full bg-green-500/20 blur-sm"
      />
    </div>
  );
}