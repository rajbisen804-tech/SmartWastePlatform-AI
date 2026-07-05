"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

interface Props {
  total: number;
  pending: number;
  progress: number;
  completed: number;
}

export default function ReportCharts({
  total,
  pending,
  progress,
  completed,
}: Props) {
  const pieData = [
    { name: "Pending", value: pending },
    { name: "Progress", value: progress },
    { name: "Completed", value: completed },
  ];

  const barData = [
    {
      name: "Reports",
      Pending: pending,
      Progress: progress,
      Completed: completed,
    },
  ];

  const COLORS = [
    "#EAB308",
    "#2563EB",
    "#16A34A",
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-2">

      <div className="rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="mb-4 text-2xl font-bold">
          Report Distribution
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <PieChart>

            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={120}
              label
            >
              {pieData.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>
        </ResponsiveContainer>

      </div>

      <div className="rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="mb-4 text-2xl font-bold">
          Status Analytics
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={barData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="Pending"
              fill="#EAB308"
            />

            <Bar
              dataKey="Progress"
              fill="#2563EB"
            />

            <Bar
              dataKey="Completed"
              fill="#16A34A"
            />

          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}