// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top nav */}
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-slate-900" />
            <span className="font-semibold tracking-tight">YourBrand</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:text-slate-600" href="#features">Features</a>
            <a className="hover:text-slate-600" href="#how">How it works</a>
            <a className="hover:text-slate-600" href="#faq">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-slate-100"
              href="#"
            >
              Sign in
            </a>
            <a
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              href="#"
            >
              Get started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-slate-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              New: Launch your landing page in minutes
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              A clean landing page that converts — built with Next.js + Tailwind
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Ship a modern marketing page with a hero, feature grid, social proof,
              and a simple call-to-action. Customize copy and links in minutes.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Start free
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                See features
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border bg-slate-100" />
                <div className="h-8 w-8 rounded-full border bg-slate-100" />
                <div className="h-8 w-8 rounded-full border bg-slate-100" />
              </div>
              <p>
                Trusted by <span className="font-semibold text-slate-900">1,200+</span> makers
              </p>
            </div>
          </div>

          {/* Mock preview card */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-4xl bg-linear-to-tr from-slate-100 to-white" />
            <div className="rounded-4xl border bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="h-3 w-20 rounded bg-slate-100" />
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-slate-100" />
                  <div className="h-3 w-3 rounded-full bg-slate-100" />
                  <div className="h-3 w-3 rounded-full bg-slate-100" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="h-10 w-3/4 rounded-xl bg-slate-100" />
                <div className="h-4 w-full rounded bg-slate-100" />
                <div className="h-4 w-5/6 rounded bg-slate-100" />

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-2xl bg-slate-100" />
                  <div className="h-20 rounded-2xl bg-slate-100" />
                  <div className="h-20 rounded-2xl bg-slate-100" />
                </div>

                <div className="mt-6 flex gap-3">
                  <div className="h-10 w-28 rounded-2xl bg-slate-900" />
                  <div className="h-10 w-28 rounded-2xl bg-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Everything you need</h2>
            <p className="mt-3 text-slate-600">
              A practical set of sections that work for most products. Replace text, add your logo, ship.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Fast", desc: "Optimized Next.js defaults and lightweight UI." },
              { title: "Responsive", desc: "Looks great on mobile, tablet, and desktop." },
              { title: "Easy to edit", desc: "Simple Tailwind classes and clean structure." },
              { title: "SEO-friendly", desc: "Good semantics and clear headings out of the box." },
              { title: "Accessible", desc: "Readable contrast and sensible focus states." },
              { title: "Deploy in minutes", desc: "Push to GitHub → import in Vercel → done." },
            ].map((f) => (
              <div key={f.title} className="rounded-3xl border bg-white p-6">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { step: "01", title: "Customize", desc: "Update copy, links, and sections in page.tsx." },
            { step: "02", title: "Commit", desc: "Push your repo to GitHub from VS Code." },
            { step: "03", title: "Deploy", desc: "Import repo in Vercel. Auto-deploy on every push." },
          ].map((s) => (
            <div key={s.step} className="rounded-3xl border p-6">
              <p className="text-sm font-semibold text-slate-500">{s.step}</p>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { q: "Is Vercel free?", a: "Yes — the Hobby plan is free for personal projects and small sites." },
              { q: "Do I need a custom domain?", a: "No. You’ll get a vercel.app URL automatically. Add a domain later if you want." },
              { q: "Will it redeploy on changes?", a: "Yes. Every push to your connected GitHub repo triggers a new deployment." },
              { q: "Can I add analytics?", a: "Yes. Vercel has built-in options, or drop in your own provider." },
            ].map((item) => (
              <div key={item.q} className="rounded-3xl border bg-white p-6">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border bg-white p-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-semibold">Ready to launch?</h3>
                <p className="mt-1 text-slate-600">Deploy your landing page to Vercel in under 2 minutes.</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Create project
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500">
        <div className="flex flex-col justify-between gap-3 sm:flex-row">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-slate-700" href="#">Privacy</a>
            <a className="hover:text-slate-700" href="#">Terms</a>
            <a className="hover:text-slate-700" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}