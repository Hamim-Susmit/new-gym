export default function MemberDashboard() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-16">
      <header>
        <h1 className="text-3xl font-semibold text-white">Member dashboard</h1>
        <p className="mt-2 text-slate-300">
          Track your membership, view recent check-ins, and access your digital QR code.
        </p>
      </header>
      <section className="grid gap-6 lg:grid-cols-3">
        {['Membership status', 'Upcoming classes', 'Recent visits'].map((title) => (
          <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <p className="mt-2 text-sm text-slate-400">Connect Supabase to load live data.</p>
          </div>
        ))}
      </section>
    </main>
  )
}
