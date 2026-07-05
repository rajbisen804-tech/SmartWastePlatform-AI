"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

export default function ChartCard() {

  const data = [
    { name: "Mon", reports: 12 },
    { name: "Tue", reports: 18 },
    { name: "Wed", reports: 10 },
    { name: "Thu", reports: 25 },
    { name: "Fri", reports: 16 },
    { name: "Sat", reports: 28 },
    { name: "Sun", reports: 20 },
  ];

  return (

    <div className="glass rounded-3xl p-6 shadow-xl">

      <h2 className="mb-6 text-2xl font-bold">
        Weekly Reports
      </h2>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart data={data}>

            <XAxis dataKey="name"/>

            <Tooltip/>

            <Bar
              dataKey="reports"
              radius={[10,10,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}