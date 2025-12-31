import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-16">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Gym Platform</p>
        <h1 className="text-4xl font-semibold text-white">Cloud-native gym management</h1>
        <p className="max-w-2xl text-lg text-slate-300">
          Manage memberships, check-ins, classes, and billing in one unified experience across web and mobile.
        </p>
      </header>
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-xl font-semibold text-white">Member experience</h2>
          <p className="mt-2 text-sm text-slate-300">
            QR-based check-ins, class bookings, and personalized dashboards that stay in sync across devices.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <h2 className="text-xl font-semibold text-white">Staff operations</h2>
          <p className="mt-2 text-sm text-slate-300">
            Real-time dashboards, member search, and revenue reporting for teams and owners.
          </p>
        </div>
      </section>
      <section className="flex flex-wrap gap-4">
        <Link
          className="rounded-full border border-indigo-400 px-5 py-2 text-sm font-semibold text-indigo-200"
          href="/member"
        >
          Member dashboard
        </Link>
        <Link
          className="rounded-full border border-emerald-400 px-5 py-2 text-sm font-semibold text-emerald-200"
          href="/staff"
        >
          Staff dashboard
        </Link>
        <Link
          className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-200"
          href="/login"
        >
          Sign in
        </Link>
      </section>
    </main>
  )
}
