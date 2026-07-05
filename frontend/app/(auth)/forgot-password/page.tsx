export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900">

      <h1 className="text-3xl font-bold">
        Forgot Password
      </h1>

      <p className="mt-3 text-slate-500">
        Enter your email address to receive a password reset link.
      </p>

      <form className="mt-8 space-y-5">

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Email Address"
        />

        <button className="w-full rounded-xl bg-emerald-600 py-3 text-white">
          Send Reset Link
        </button>

      </form>

    </div>
  )
}