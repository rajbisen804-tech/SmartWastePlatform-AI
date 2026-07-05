import { HOW_IT_WORKS } from "@/constants/howItWorks"

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            How EcoSync AI Works
          </h2>

          <p className="mt-4 text-slate-500">
            Three simple steps for smarter waste management.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {HOW_IT_WORKS.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 dark:bg-slate-900"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <div className="mt-6 text-sm font-bold text-emerald-600">
                STEP {item.step}
              </div>

              <h3 className="mt-3 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-500">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}