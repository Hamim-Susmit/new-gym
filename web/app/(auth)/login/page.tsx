export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold text-white">Welcome back</h1>
      <p className="text-slate-300">Sign in to access your gym dashboard.</p>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
        <p className="text-sm text-slate-400">
          Authentication UI will live here once Supabase Auth or Clerk is connected.
        </p>
      </div>
    </main>
  )
}
