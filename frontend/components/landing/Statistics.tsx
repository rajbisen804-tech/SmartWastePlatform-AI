import { STATISTICS } from "@/constants/statistics"

export default function Statistics() {
  return (
    <section className="bg-emerald-600 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center md:grid-cols-2 lg:grid-cols-4">
        {STATISTICS.map((item) => (
          <div key={item.id}>
            <h2 className="text-5xl font-extrabold">
              {item.number}
            </h2>

            <p className="mt-3 text-lg text-emerald-100">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}