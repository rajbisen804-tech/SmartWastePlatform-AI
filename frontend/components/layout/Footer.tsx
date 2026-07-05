export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold text-emerald-400">
            ♻ EcoSync AI
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            AI-powered Smart Waste Management Platform helping citizens,
            municipalities and drivers build cleaner, smarter cities.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Platform</h3>

          <ul className="space-y-2 text-sm">
            <li>Dashboard</li>
            <li>Analytics</li>
            <li>Smart Bins</li>
            <li>AI Detection</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Resources</h3>

          <ul className="space-y-2 text-sm">
            <li>Documentation</li>
            <li>Support</li>
            <li>API</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Contact</h3>

          <ul className="space-y-2 text-sm">
            <li>support@ecosync.ai</li>
            <li>India</li>
            <li>Available 24×7</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © 2026 EcoSync AI • Built with Next.js + FastAPI
      </div>
    </footer>
  )
}