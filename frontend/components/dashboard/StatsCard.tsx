"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

interface Props {
  title: string;
  value: number;
  color: string;
  icon: React.ReactNode;
}

export default function StatsCard({
  title,
  value,
  color,
  icon,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      className={`${color}
      relative
      overflow-hidden
      rounded-3xl
      p-7
      text-white
      shadow-2xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:scale-[1.03]
      hover:shadow-[0_0_50px_rgba(16,185,129,.35)]`}
    >
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-lg font-medium opacity-90">
            {title}
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            <CountUp
              end={Number(value)}
              duration={2}
            />
          </h2>
        </div>

        <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-xl transition duration-300 hover:rotate-6">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}