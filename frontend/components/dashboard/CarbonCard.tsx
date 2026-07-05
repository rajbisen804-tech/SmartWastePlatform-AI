"use client";

import { Leaf } from "lucide-react";

export default function CarbonCard() {
  return (
    <div className="glass rounded-3xl p-6 shadow-xl">

      <div className="flex items-center gap-3">

        <Leaf className="text-green-600" />

        <h2 className="text-2xl font-bold">
          Carbon Saved
        </h2>

      </div>

      <h1 className="mt-8 text-6xl font-bold text-green-600">
        2.4T
      </h1>

      <p className="mt-4 text-slate-500">
        Estimated CO₂ reduction this month.
      </p>

    </div>
  );
}