"use client";

import { useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Challenges", href: "#challenges" },
  { label: "Team", href: "#team-heading" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonial-title" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/92 backdrop-blur-md">
      <div className="aa-container flex items-center justify-between px-6 py-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl"
          aria-label="Analytics Avenue home"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--aa-primary)] text-sm font-bold text-white">
            AA
          </span>
          <span>
            Analytics <span className="text-[var(--aa-primary)]">Avenue</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[var(--aa-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#about"
            className="aa-btn-secondary rounded-lg px-4 py-2 text-sm"
          >
            EDTech Solutions
          </a>
          <a
            href="#cta"
            className="aa-btn-primary rounded-lg px-4 py-2 text-sm shadow-md shadow-blue-300/40"
          >
            Free Consultation
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            {isMenuOpen ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-[var(--aa-primary)]"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <a
                href="#about"
                onClick={closeMenu}
                className="aa-btn-secondary rounded-lg px-4 py-2 text-center text-sm"
              >
                EDTech Solutions
              </a>
              <a
                href="#cta"
                onClick={closeMenu}
                className="aa-btn-primary rounded-lg px-4 py-2 text-center text-sm"
              >
                Free Consultation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;