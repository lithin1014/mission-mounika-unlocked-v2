import { useMemo } from "react";
import { motion } from "framer-motion";

export default function MatrixRain() {
  const columns = useMemo(() => Array.from({ length: 30 }), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">

      {columns.map((_, index) => {

        const left = `${index * 3.5}%`;
        const duration = 6 + (index % 5);
        const delay = (index % 6) * 0.5;

        return (
          <motion.div
            key={index}
            initial={{ y: "-120%" }}
            animate={{ y: "120%" }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay,
            }}
            className="absolute top-0 text-green-500 font-mono text-xs leading-4 whitespace-pre"
            style={{ left }}
          >
            {Array.from({ length: 80 })
              .map(() =>
                Math.random() > 0.5 ? "1" : "0"
              )
              .join("\n")}
          </motion.div>
        );

      })}

    </div>
  );
}