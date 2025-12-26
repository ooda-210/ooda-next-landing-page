import Image from "next/image";
export default function Home() {
  return (
    <main className="h-full bg-white">

      {/* This wrapper makes the columns fill the viewport height minus the 10px padding top+bottom */}
      <div className="grid h-screen grid-cols-1 md:grid-cols-3">

        {/* Left: 2/3 */}
        <section className="md:col-span-2 bg-sky-100">
          <div className="h-full flex items-center">
            <div className="px-10">
              <h1 className="text-[102px] font-medium leading-none text-red-600">
                Hello.
              </h1>

              <p className="mt-10 max-w-xl text-xl leading-relaxed text-slate-900">
                Thanks for stopping by. If you want to find out more about us,
                our services or latest projects, please get in touch.
              </p>
            </div>
          </div>
        </section>

        {/* Right: 1/3 */}
        <aside className="relative md:col-span-1 bg-white">
        {/* Centered content */}
        <div className="h-full flex items-center">
          <div className="w-full px-10">
            <div>
              <div className="text-2xl font-medium text-slate-900">
                hello@ooda.uk
              </div>
              <div className="mt-2 text-xs font-medium tracking-widest text-red-600">
                EMAIL
              </div>
              <div className="mt-4 h-px w-full bg-slate-300" />
            </div>

            <div className="mt-16">
              <div className="text-2xl font-medium text-slate-900">
                Leave a message
              </div>
              <div className="mt-2 text-xs font-medium tracking-widest text-red-600">
                SUBMIT
              </div>
              <div className="mt-4 h-px w-full bg-slate-300" />
            </div>
          </div>
        </div>

        {/* Anchored logo */}
        <div className="absolute bottom-12.5 right-9.5">
          <Image
            src="/ooda-logo.jpg"
            alt="Ooda logo"
            width={120}
            height={50}
          />
        </div>
      </aside>
      </div>
    </main>
  );
}