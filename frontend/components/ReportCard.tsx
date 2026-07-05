interface Report {
  id: number;
  image_url: string;
  description: string;
  address: string;
  status: string;
}

interface Props {
  report: Report;
  updateStatus: (
    id: number,
    status: string
  ) => void;
}

export default function ReportCard({
  report,
  updateStatus,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:scale-[1.02]">

      <img
        src={report.image_url}
        alt="Waste"
        className="h-60 w-full object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {report.description}
        </h2>

        <p className="mt-2 text-slate-600">
          📍 {report.address}
        </p>

        <div className="mt-4 flex items-center justify-between">

          <span
            className={`rounded-full px-4 py-1 text-sm font-semibold ${
              report.status === "completed"
                ? "bg-green-100 text-green-700"
                : report.status === "in_progress"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {report.status}
          </span>

          <span className="text-sm text-slate-500">
            Report #{report.id}
          </span>

        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">

          <button
            onClick={() =>
              updateStatus(
                report.id,
                "pending"
              )
            }
            className="rounded-lg bg-yellow-500 py-2 text-white transition hover:bg-yellow-600"
          >
            Pending
          </button>

          <button
            onClick={() =>
              updateStatus(
                report.id,
                "in_progress"
              )
            }
            className="rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700"
          >
            Progress
          </button>

          <button
            onClick={() =>
              updateStatus(
                report.id,
                "completed"
              )
            }
            className="rounded-lg bg-green-600 py-2 text-white transition hover:bg-green-700"
          >
            Complete
          </button>

        </div>

      </div>

    </div>
  );
}