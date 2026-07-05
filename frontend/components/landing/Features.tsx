import { FEATURES } from "@/constants/features"

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Powerful Features
        </h2>

        <p className="mt-4 text-gray-500">
          Everything required for a modern AI-powered waste management platform.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.id}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-zinc-900"
          >
            <div className="mb-5 text-5xl">
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}