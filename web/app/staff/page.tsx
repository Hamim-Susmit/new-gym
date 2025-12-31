export default function StaffDashboard() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-16">
      <header>
        <h1 className="text-3xl font-semibold text-white">Staff dashboard</h1>
        <p className="mt-2 text-slate-300">
          Monitor today’s check-ins, search members, and manage class capacity in real time.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        {['Live check-ins', 'Member lookup', 'Active classes', 'Revenue snapshot'].map((title) => (
          <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <p className="mt-2 text-sm text-slate-400">Placeholder content for staff workflows.</p>
          </div>
        ))}
      </section>
    </main>
  )
}
