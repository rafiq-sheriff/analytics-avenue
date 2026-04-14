import type { CSSProperties, ReactNode } from "react";

/**
 * Sci-fi style "Our Services" panel for the careers hero (matches brand services list).
 * Frame + accents: --aa-primary; panel: --aa-surface (see globals.css).
 */

const CHAMFER = 18;
const FRAME_W = 6;

const services: { title: string; icon: ReactNode }[] = [
  {
    title: "AI Enhanced Digital Marketing Solutions",
    icon: <IconAiChip />,
  },
  {
    title: "Data Engineering & Data Analytics",
    icon: <IconDataStack />,
  },
  {
    title: "Predictive Dashboards and CRM Pipeline Designs",
    icon: <IconTrendSearch />,
  },
  {
    title: "End to End GenAI Automation",
    icon: <IconGenAiAutomation />,
  },
  {
    title: "Nationwide Data Analytics / AI Programs",
    icon: <IconGradCap />,
  },
];

/** Outer chamfered rect — full frame */
const clipOuter = `polygon(0 ${CHAMFER}px,${CHAMFER}px 0,calc(100% - ${CHAMFER}px) 0,100% ${CHAMFER}px,100% calc(100% - ${CHAMFER}px),calc(100% - ${CHAMFER}px) 100%,${CHAMFER}px 100%,0 calc(100% - ${CHAMFER}px))`;

/**
 * Inset by FRAME_W so the navy ring is parallel to the outer edge at every segment
 * (uniform thickness, sharp corners — no box-shadow approximation).
 */
const clipInner = `polygon(${FRAME_W}px calc(${CHAMFER}px + ${FRAME_W}px),calc(${CHAMFER}px + ${FRAME_W}px) ${FRAME_W}px,calc(100% - ${CHAMFER}px - ${FRAME_W}px) ${FRAME_W}px,calc(100% - ${FRAME_W}px) calc(${CHAMFER}px + ${FRAME_W}px),calc(100% - ${FRAME_W}px) calc(100% - ${CHAMFER}px - ${FRAME_W}px),calc(100% - ${CHAMFER}px - ${FRAME_W}px) calc(100% - ${FRAME_W}px),calc(${CHAMFER}px + ${FRAME_W}px) calc(100% - ${FRAME_W}px),${FRAME_W}px calc(100% - ${CHAMFER}px - ${FRAME_W}px))`;

export default function CareersHeroServicesCard() {
  const outerStyle: CSSProperties = {
    clipPath: clipOuter,
    backgroundColor: "var(--aa-primary)",
  };

  const innerStyle: CSSProperties = {
    clipPath: clipInner,
    backgroundColor: "var(--aa-surface)",
  };

  return (
    <div className="relative mb-3 w-full max-w-lg lg:max-w-none">
      <div className="relative" style={outerStyle}>
        <div className="px-5 pb-8 pt-7 sm:px-7 sm:pb-9 sm:pt-8" style={innerStyle}>
          <h2
            className="text-center font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-[0.14em] text-slate-900 sm:text-xl"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.12)" }}
          >
            Our services
          </h2>

          <ul className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
            {services.map(({ title, icon }) => (
              <li key={title} className="flex gap-3.5 items-center sm:gap-4">
                <span
                  className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12"
                  aria-hidden
                >
                  {icon}
                </span>
                <span className="font-[family-name:var(--font-body)] text-sm font-bold leading-snug text-slate-900 sm:text-[0.95rem]">
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 translate-y-[6px] gap-1.5"
      >
        <span
          className="h-3 w-6 -skew-x-[28deg]"
          style={{ backgroundColor: "var(--aa-primary)" }}
        />
        <span
          className="h-3 w-6 -skew-x-[28deg]"
          style={{ backgroundColor: "var(--aa-primary)" }}
        />
      </div>
    </div>
  );
}

function IconAiChip() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" aria-hidden>
      <rect x="10" y="14" width="28" height="22" rx="2" stroke="#0f172a" strokeWidth="1.75" />
      <path
        stroke="#0f172a"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M14 10v4M24 10v4M34 10v4M14 34v4M24 34v4M34 34v4M10 20h4M10 28h4M34 20h4M34 28h4"
      />
      <text x="24" y="29" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="700">
        AI
      </text>
      <circle cx="6" cy="24" r="2" fill="#0f172a" />
      <circle cx="42" cy="24" r="2" fill="#0f172a" />
    </svg>
  );
}

function IconDataStack() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden>
      <ellipse cx="24" cy="14" rx="12" ry="4" fill="#7c3aed" opacity="0.95" />
      <path d="M12 14v8c0 2.2 5.4 4 12 4s12-1.8 12-4v-8" fill="#6d28d9" />
      <path d="M12 22v8c0 2.2 5.4 4 12 4s12-1.8 12-4v-8" fill="#5b21b6" />
      <rect x="30" y="8" width="10" height="14" rx="1" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.2" />
      <path d="M32 18h6M32 14h4" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="36" cy="28" r="7" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
      <path d="M39 31l3 3" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
      <circle cx="36" cy="28" r="3" stroke="#0f172a" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function IconTrendSearch() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" aria-hidden>
      <path
        d="M8 32 L16 24 L22 28 L32 14 L40 18"
        stroke="#0f172a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="16" r="9" stroke="#0f172a" strokeWidth="2" />
      <path d="M40 22l6 6" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function IconGenAiAutomation() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" aria-hidden>
      <rect x="6" y="14" width="28" height="20" rx="2" stroke="#0f172a" strokeWidth="1.75" />
      <path d="M10 20h20M10 26h14" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M30 22c4 0 8 2 10 6l-3 2c-1.5-2.5-4-4-7-4v-4z"
        fill="#0f172a"
        stroke="#0f172a"
        strokeWidth="0.5"
      />
      <path d="M38 12v6h6" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="32" r="2" fill="#0f172a" />
      <path d="M20 32h12" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
    </svg>
  );
}

function IconGradCap() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full" fill="#0f172a" aria-hidden>
      <path d="M24 8L6 16l18 8 18-8-18-8zm-14 12v10l14 7 14-7V20" />
      <path d="M24 35c0 0 8-2 8-6v-5" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
