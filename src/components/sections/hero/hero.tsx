"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import RotatingText from "./rotating-text";

const rotatingIndustries = [
  "Startups",
  "Enterprises",
  "E-Commerce",
  "Healthcare",
  "FinTech",
  "EdTech",
  "SaaS",
];

const rotatingAiCapabilities = [
  "AI Agents",
  "Data Analytics",
  "Automation",
  "Predictive Models",
  "Business Intelligence",
  "Data Pipelines",
  "GenAI Solutions",
];

function IconBrain(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M12 5a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v1a3 3 0 1 1-6 0v-1H7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1V8a3 3 0 0 1 3-3Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10.5h5M10 13.5h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconStopwatch(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <circle cx="12" cy="14" r="8" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 10v4l2.5 1.5M9 5h6M12 5V3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLightning(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className} aria-hidden>
      <path
        d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const heroValueChain = [
  "Unify your data",
  "Activate AI agents",
  "One integrated platform",
];

const heroStats = [
  {
    value: "2000+",
    label: "Professionals worldwide",
    sublabel: "Trust our training & platform",
    Icon: IconBrain,
  },
  {
    value: "1000+",
    label: "Learners upskilled",
    sublabel: "Career-focused programs",
    Icon: IconStopwatch,
  },
  {
    value: "50+",
    label: "Solutions delivered",
    sublabel: "Industry-ready implementations",
    Icon: IconLightning,
  },
] as const;

const heroTrustSignals = [
  "No credit card to start",
  "Guided onboarding included",
  "Enterprise-grade security",
];

const Hero = () => {
  const rotatingIndustriesLoop = [...rotatingIndustries, rotatingIndustries[0]];
  const listRef = useRef<HTMLUListElement | null>(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }

    const slides = list.querySelectorAll<HTMLLIElement>("[data-v-slide]");
    const duration = 0.3;
    const lineHeight = 50;

    const timeline = gsap.timeline({ repeat: -1 });

    slides.forEach((slide, index) => {
      if (index === 0) {
        return;
      }

      const label = `slide-${index}`;
      timeline.add(label);
      timeline.to(
        list,
        {
          duration,
          y: index * -1 * lineHeight,
          ease: "power1.inOut",
        },
        label,
      );

      const letters = slide.querySelectorAll<HTMLElement>("[data-v-char]");
      timeline.from(
        letters,
        {
          duration,
          y: lineHeight,
          opacity: 0,
          stagger: duration / 10,
          ease: "power2.out",
        },
        label,
      );

      timeline.to(letters, {
        duration,
        y: -lineHeight,
        opacity: 0,
        stagger: duration / 10,
        ease: "power2.in",
      }, "+=1");
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="aa-section relative overflow-hidden bg-[var(--aa-surface-soft)]"
    >
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-24 top-[-140px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(26,115,232,0.28),rgba(26,115,232,0))] blur-3xl" />
        <div className="absolute -right-20 bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),rgba(56,189,248,0))] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_50%_40%,black,transparent_75%)]" />
      </div>

      <div className="aa-container relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-xl">
          <div className="mb-8 flex flex-row flex-nowrap items-center gap-2 text-xl font-semibold sm:mb-10 sm:gap-3">
            <span className="shrink-0 whitespace-nowrap text-slate-900">AI Business Partner For</span>
            <span className="inline-block h-[50px] min-w-[11ch] shrink-0 overflow-hidden align-middle text-xl font-semibold text-[var(--aa-primary)]">
              <ul ref={listRef} className="m-0 list-none p-0 text-inherit">
                {rotatingIndustriesLoop.map((industry, index) => (
                  <li
                    key={`${industry}-${index}`}
                    className="h-[50px] text-inherit leading-[50px]"
                    data-v-slide
                  >
                    {industry.split("").map((char, charIndex) => (
                      <span
                        key={`${industry}-${index}-${charIndex}`}
                        className="inline-block"
                        data-v-char
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl">
            AI Workforce for
            <br />
            Sales and Marketing
          </h1>

          <h2 className="font-[family-name:var(--font-heading)] mt-8 flex flex-col gap-1 text-2xl font-bold leading-snug text-slate-900 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-2 sm:text-3xl">
            <RotatingText
              text={rotatingAiCapabilities}
              duration={2200}
              y={12}
              containerClassName="align-middle min-w-0 max-w-full"
              textClassName="text-[var(--aa-primary)] break-words"
            />
            <span className="text-balance">in one platform</span>
          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:mt-6 sm:leading-8 sm:text-xl">
            So that your business runs like an enterprise.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="#cta" className="aa-btn-primary shadow-lg shadow-blue-300/40">
              Get Started Free
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M8.5 3.5L12 7.5L8.5 11.5M3 7.5H12"
                  stroke="white"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="#services" className="aa-btn-secondary">
              Explore Services
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M8.5 3.5L12 7.5L8.5 11.5M3 7.5H12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="mt-9 space-y-8 sm:mt-10">
            <p
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] leading-snug text-slate-600 sm:text-sm"
              aria-label={heroValueChain.join(". ")}
            >
              {heroValueChain.map((phrase, index) => (
                <span key={phrase} className="inline-flex items-center gap-x-2">
                  {index > 0 && (
                    <span className="text-slate-400" aria-hidden>
                      &gt;
                    </span>
                  )}
                  <span>{phrase}</span>
                </span>
              ))}
            </p>

            <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
              {heroStats.map(({ value, label, sublabel, Icon }) => (
                <div
                  key={value}
                  className="flex min-w-0 items-start gap-3"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--aa-primary)_14%,transparent)] text-[var(--aa-primary)]"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-[family-name:var(--font-heading)] text-2xl font-extrabold tracking-tight text-slate-900 sm:text-[1.65rem]">
                      {value}
                    </p>
                    <p className="mt-0.5 text-[13px] leading-snug text-slate-600 sm:text-sm">
                      <span className="block">{label}</span>
                      <span className="block text-slate-500">{sublabel}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-slate-600 sm:text-sm">
              {heroTrustSignals.map((signal, index) => (
                <span key={signal} className="inline-flex items-center gap-x-2">
                  {index > 0 && (
                    <span className="text-slate-300" aria-hidden>
                      |
                    </span>
                  )}
                  <span className="text-emerald-600" aria-hidden>
                    ✓
                  </span>
                  <span>{signal}</span>
                </span>
              ))}
            </p>
          </div>
        </div>
      

        <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl">
          <div className="overflow-hidden rounded-3xl border border-blue-200/70 bg-white p-2 shadow-xl shadow-slate-300/40">
            <Image
              src="/assets/images/Subramani.jpg"
              alt="Subramani"
              width={768}
              height={1024}
              priority
              className="h-[min(420px,62vh)] w-full rounded-[20px] object-cover object-top sm:h-[min(480px,70vh)] lg:h-[500px]"
            />
          </div>

          <div className="kpi-float absolute -left-4 top-10 hidden w-56 items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:flex">
            <div className="rounded-full bg-[#1A73E8]/10 p-2.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="#1A73E8"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800">Trusted by 2000+</p>
              <p className="text-[11px] text-slate-500">Professionals worldwide</p>
            </div>
          </div>

          <div className="kpi-float kpi-float-delay absolute -right-4 top-1/2 hidden w-52 -translate-y-1/2 items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:flex">
            <div className="rounded-full bg-emerald-50 p-2.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <polyline
                  points="22 7 13.5 15.5 8.5 10.5 2 17"
                  stroke="#16A34A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="16 7 22 7 22 13"
                  stroke="#16A34A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-600">1000+ Learners</p>
              <p className="text-[11px] text-slate-500">Career-focused training</p>
            </div>
          </div>

          <div className="kpi-float absolute -left-4 bottom-6 hidden w-56 items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:flex">
            <div className="rounded-full bg-violet-50 p-2.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M3 12L8 17L21 4"
                  stroke="#7C3AED"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800">50+ Solutions</p>
              <p className="text-[11px] text-slate-500">Industry-ready delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;