"use client";

import { useForm, ValidationError } from "@formspree/react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const FORM_ID = "mvzoazek"; // your Formspree form id

export default function ContactModal({ open, onClose }: Props) {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">

      {/* Backdrop */}
      <button className="absolute inset-0 bg-black/40" onClick={onClose} aria-label="Close contact form"/>

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-lg bg-white p-4 md:p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-medium text-red-500">Leave a message</h2>
          </div>

          <button className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-slate-100" onClick={onClose}>✕</button>
        </div>

        {state.succeeded ? (
          <div className="mt-6 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            Message sent — thank you.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 grid-cols-1">

              <div className="grid gap-2 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium tracking-widest">
                    First Name<span className="text-red-500 text-md">*</span>
                  </span>
                  <input
                    name="firstname"
                    className="mt-2 w-full rounded-sm border border-red-300 px-2 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium tracking-widest">
                    Last Name<span className="text-red-500 text-md">*</span>
                  </span>
                  <input
                    name="lastname"
                    className="mt-2 w-full rounded-sm border border-red-300 px-2 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
                  />
                </label>
              </div>


              <label className="block">
                <span className="text-sm font-medium tracking-widest">
                  Email<span className="text-red-500 text-md">*</span>
                </span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-sm border-red-300 border px-2 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium tracking-widest">
                  Organisation
                </span>
                <input
                  name="organisation"
                  className="mt-2 w-full rounded-sm border-red-300 border px-2 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium tracking-widest">
                Message<span className="text-red-500 text-md">*</span>
              </span>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="mt-2 w-full resize-none rounded-sm border-red-300 border px-2 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </label>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                className="rounded-l px-4 py-3 text-sm font-semibold hover:bg-slate-100"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
              >
                {state.submitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}