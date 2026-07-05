export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="flex min-h-screen items-center justify-center px-6">
        {children}
      </div>
    </main>
  )
}