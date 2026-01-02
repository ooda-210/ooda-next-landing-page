"use client";

import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import Image from "next/image";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <main className="h-full bg-white">

      {/* This wrapper makes the columns fill the viewport height */}
      <div className="grid h-screen grid-rows-[1fr_2fr] md:grid-rows-1 md:grid-cols-3">

        {/* Left: 2/3 */}
        <section className="md:col-span-2 bg-sky-100">
          <div className="h-full flex md:items-center">
            <div className="px-6 md:px-10 pt-20 md:pt-0">
              <h1 className="text-[80px] md:text-[102px] font-medium leading-none text-red-600">
                Hello.
              </h1>

              <p className="mt-5 md:mt-10 pb-20 md:pb-0  max-w-xl text-lg md:text-xl leading-relaxed text-slate-900">
                Thanks for stopping by. If you want to find out more about us,
                our services or latest projects, please get in touch.
              </p>
            </div>
          </div>
        </section>

        {/* Right: 1/3 */}
        <aside className="relative md:col-span-1 bg-white">
        {/* Centered content */}
        <div className="md:h-full flex md:items-center">
          <div className="w-full pt-10 md:pt-0 px-6 md:px-10">
            <div>
              <div className="text-2xl font-medium text-slate-900">
                hello@ooda.uk
              </div>
              <div className="mt-2 text-xs font-medium tracking-widest text-red-600">
                EMAIL
              </div>
              <div className="mt-4 h-px w-full bg-slate-300" />
            </div>

            {/* Replace "Leave a message" block */}
            <button
              onClick={() => setContactOpen(true)}
              type="button"
              className="mt-16 w-full text-left cursor-pointer"
            >
              <div className="text-2xl font-medium text-slate-900">
                Leave a message
              </div>
              <div className="mt-2 text-xs font-medium tracking-widest text-red-600">
                SUBMIT
              </div>
              <div className="mt-4 h-px w-full bg-slate-300" />
            </button>

            <ContactModal
              open={contactOpen}
              onClose={() => setContactOpen(false)}
            />
          </div>
        </div>

        {/* Anchored logo */}
        <div className="float-right pt-20 pb-10 pr-5 md:pb-0 md:p-0 md:absolute md:bottom-12.5 md:right-10">
          <Image
            src="/ooda-logo.jpg"
            alt="Ooda logo"
            width={240}
            height={100}
            className="w-25 md:w-30 h-auto"
            priority
          />
        </div>
      </aside>
      </div>
    </main>
  );
}