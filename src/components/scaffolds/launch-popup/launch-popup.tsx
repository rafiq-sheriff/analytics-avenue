"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const fontHeading = "font-[family-name:var(--font-heading)]";
const fontBody = "font-[family-name:var(--font-body)]";

export default function LaunchPopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    // Prevent background scroll while modal is open.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Industry Ready GenAI program offer"
    >
      <div className="aa-card relative w-full max-w-[680px] rounded-[var(--aa-radius-2xl)] bg-[var(--aa-surface)] px-5 pb-7 pt-8 sm:px-8">
        <button
          type="button"
          aria-label="Close popup"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-2xl leading-none text-slate-400 transition hover:text-[var(--aa-text-strong)]"
        >
          ×
        </button>

        <div className="text-center">
          <h2
            className={`${fontHeading} mx-auto max-w-[620px] text-3xl font-extrabold leading-tight text-[var(--aa-primary)] sm:text-4xl`}
          >
            Industry Ready GenAI program
            <br />
            for Data Aspirants
          </h2>

          <p
            className={`${fontBody} mt-4 text-2xl font-extrabold text-[var(--aa-text-strong)] sm:text-2xl`}
          >
            Only for Shortlisted 150 Aspirants
          </p>

          <Link
            href="/#curriculum-heading"
            className={`${fontBody} aa-btn-primary mt-7 min-w-44 px-8 py-3 text-base font-semibold`}
            style={{ backgroundColor: "#1C3D76" }}
            onClick={() => setIsOpen(false)}
          >
            Enroll Now
          </Link>
     
        </div>
      </div>
    </div>
  );
}
