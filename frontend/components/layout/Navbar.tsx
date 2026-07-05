import Button from "@/components/ui/Button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-xl text-white shadow-lg shadow-emerald-500/30">
            ♻️
          </div>

          <div>
            <h1 className="text-xl font-bold text-emerald-600">
              EcoSync AI
            </h1>

            <p className="text-xs text-slate-500">
              Smart Waste Management
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 font-medium md:flex">
          <a className="transition hover:text-emerald-600" href="#">
            Home
          </a>

          <a className="transition hover:text-emerald-600" href="#">
            Features
          </a>

          <a className="transition hover:text-emerald-600" href="#">
            Analytics
          </a>

          <a className="transition hover:text-emerald-600" href="#">
            About
          </a>

          <a className="transition hover:text-emerald-600" href="#">
            Contact
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button variant="secondary">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}