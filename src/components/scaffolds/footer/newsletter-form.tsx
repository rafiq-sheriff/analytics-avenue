"use client";

import { useEffect, useState, type FormEvent } from "react";

const fontBody = "font-[family-name:var(--font-body)]";

export default function NewsletterForm() {
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    if (!showThanks) return;
    const t = window.setTimeout(() => setShowThanks(false), 5000);
    return () => window.clearTimeout(t);
  }, [showThanks]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    if (!email) return;
    setShowThanks(true);
    e.currentTarget.reset();
    // Wire to your provider (e.g. API route, ConvertKit, etc.) here.
  };

  return (
    <div className="mx-auto mt-7 w-full max-w-lg">
      <p className={`${fontBody} mb-3 text-sm text-white/90`}>
        Subscribe to our newsletter for product updates, learning tips, and data
        insights.
      </p>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2"
      >
        <label htmlFor="footer-newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@company.com"
          className={`${fontBody} min-h-[2.75rem] w-full flex-1 rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/55 focus:border-white/70 focus:outline-none focus:ring-2 focus:ring-white/40`}
        />
        <button
          type="submit"
          className={`${fontBody} aa-btn-inverse shrink-0 transition hover:-translate-y-0.5`}
        >
          Subscribe
        </button>
      </form>
      {showThanks && (
        <p className={`${fontBody} mt-3 text-sm text-white/90`} role="status">
          Thanks — you&apos;re on the list.
        </p>
      )}
      <p className={`${fontBody} mt-3 text-xs text-white/65`}>
        We respect your inbox. Unsubscribe anytime.
      </p>
    </div>
  );
}
