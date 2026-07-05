"use client";

import { motion } from "framer-motion";

export default function ProgressCard() {
  const progress = 84;

  return (
    <motion.div
      initial={{ opacity: 0, scale: .9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass rounded-3xl p-7 shadow-xl"
    >
      <h2 className="text-2xl font-bold">
        Collection Efficiency
      </h2>

      <div className="mt-8 flex justify-center">

        <div className="relative">

          <svg
            width="180"
            height="180"
          >

            <circle
              cx="90"
              cy="90"
              r="70"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />

            <circle
              cx="90"
              cy="90"
              r="70"
              stroke="#10B981"
              strokeWidth="12"
              fill="none"
              strokeDasharray="440"
              strokeDashoffset={440-(440*progress)/100}
              strokeLinecap="round"
              transform="rotate(-90 90 90)"
            />

          </svg>

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="text-center">

              <h1 className="text-4xl font-bold text-emerald-600">

                {progress}%

              </h1>

              <p className="text-slate-500">
                Today
              </p>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}