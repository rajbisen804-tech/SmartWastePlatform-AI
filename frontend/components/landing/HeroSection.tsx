import Button from "@/components/ui/Button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      <div className="mx-auto flex min-h-[88vh] max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              🌍 AI Powered Smart Waste Platform
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Smarter Cities
              <br />
              Cleaner Future
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              EcoSync AI helps citizens, municipalities and waste
              collection teams manage waste efficiently using AI,
              analytics and real-time monitoring.
            </p>

            <div className="mt-10 flex gap-4">
              <Button>
                Get Started
              </Button>

              <Button variant="secondary">
                Live Demo
              </Button>
            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="flex h-[420px] w-[420px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-[120px] shadow-2xl shadow-emerald-500/30">

              🌍

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}