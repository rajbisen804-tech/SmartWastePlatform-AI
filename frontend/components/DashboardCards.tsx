interface Props {
  total: number;
  pending: number;
  progress: number;
  completed: number;
}

export default function DashboardCards({
  total,
  pending,
  progress,
  completed,
}: Props) {
  const cards = [
    {
      title: "Total Reports",
      value: total,
      color: "bg-emerald-600",
      icon: "🗑️",
    },
    {
      title: "Pending",
      value: pending,
      color: "bg-yellow-500",
      icon: "🟡",
    },
    {
      title: "In Progress",
      value: progress,
      color: "bg-blue-600",
      icon: "🔵",
    },
    {
      title: "Completed",
      value: completed,
      color: "bg-green-600",
      icon: "✅",
    },
  ];

  return (
    <div className="mb-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.color} rounded-2xl p-6 text-white shadow-xl transition hover:scale-105`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg">{card.title}</p>

              <h2 className="mt-3 text-5xl font-bold">
                {card.value}
              </h2>
            </div>

            <span className="text-5xl">
              {card.icon}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}