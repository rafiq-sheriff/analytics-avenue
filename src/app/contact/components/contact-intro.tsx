import Link from "next/link";

/** Tiny SVG noise tile — adds film-grain over the gradient (no extra assets). */
const NOISE_DATA_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")";

type ContactIntroProps = {
  phoneDisplay: string;
  phoneTel: string;
  email: string;
};

export default function ContactIntro({ phoneDisplay, phoneTel, email }: ContactIntroProps) {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-200/60 pb-12 pt-8 sm:pb-16 sm:pt-10"
      aria-labelledby="contact-page-title"
    >
      {/* —— Background stack (decorative only) —— */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f0f6ff] via-[#f8fafc] to-white" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_0%_-20%,rgba(26,115,232,0.18),transparent_55%),radial-gradient(ellipse_100%_70%_at_100%_0%,rgba(127,134,255,0.14),transparent_50%),radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(56,189,248,0.08),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[min(28vw,220px)] top-[8%] h-[min(85vw,560px)] w-[min(85vw,560px)] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(26,115,232,0.35),transparent_68%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[min(22vw,180px)] bottom-[-10%] h-[min(75vw,500px)] w-[min(75vw,500px)] rounded-full bg-[radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.22),transparent_65%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_0%,rgba(255,255,255,0.5)_45%,rgba(255,255,255,0.15)_52%,transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-soft-light"
        style={{ backgroundImage: NOISE_DATA_URI }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_85%_75%_at_50%_35%,#080808,transparent)]"
        aria-hidden
      />

      <div className="aa-container relative z-10 px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition hover:text-[var(--aa-primary)]">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-slate-300">
              /
            </li>
            <li className="font-medium text-slate-800">Contact Us</li>
          </ol>
        </nav>

        <div className="mt-8 max-w-3xl">
          <p className="aa-kicker">Get in touch</p>
          <h1 id="contact-page-title" className="aa-title mt-2">
            Contact Us
          </h1>
          <p className="aa-subtitle mt-4">We&apos;re always here to help you.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-[var(--aa-radius-2xl)] border border-[var(--aa-border)] bg-[var(--aa-surface-soft)] p-6 shadow-[var(--aa-shadow-sm)]">
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-slate-900">
              Our Address
            </h2>
            <p className="mt-1 text-sm font-medium text-[var(--aa-primary)]">Our location</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Delhi</p>
          </article>

          <article className="rounded-[var(--aa-radius-2xl)] border border-[var(--aa-border)] bg-[var(--aa-surface-soft)] p-6 shadow-[var(--aa-shadow-sm)]">
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-slate-900">
              Contact Info
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Open a chat or give us call at
            </p>
            <a
              href={phoneTel}
              className="mt-2 inline-block text-base font-semibold text-[var(--aa-primary)] transition hover:text-[var(--aa-primary-hover)]"
            >
              {phoneDisplay}
            </a>
          </article>

          <article className="rounded-[var(--aa-radius-2xl)] border border-[var(--aa-border)] bg-[var(--aa-surface-soft)] p-6 shadow-[var(--aa-shadow-sm)] sm:col-span-2 lg:col-span-1">
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-slate-900">
              Contact Email
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Send your message</p>
            <a
              href={`mailto:${email}`}
              className="mt-2 inline-block break-all text-base font-semibold text-[var(--aa-primary)] transition hover:text-[var(--aa-primary-hover)]"
            >
              {email}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
