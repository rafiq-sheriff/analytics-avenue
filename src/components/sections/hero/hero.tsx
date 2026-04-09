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
    <section className="aa-section relative overflow-hidden bg-[var(--aa-surface-soft)]">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-24 top-[-140px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(26,115,232,0.28),rgba(26,115,232,0))] blur-3xl" />
        <div className="absolute -right-20 bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),rgba(56,189,248,0))] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_50%_40%,black,transparent_75%)]" />
      </div>

      <div className="aa-container relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-xl">
          <div className="mb-10 flex items-center gap-3 text-base font-semibold text-slate-900 sm:text-xl">
            <span>AI Business Partner For</span>
            <span className="inline-block h-[50px] min-w-[11ch] overflow-hidden align-middle text-[var(--aa-primary)]">
              <ul ref={listRef} className="m-0 list-none p-0">
                {rotatingIndustriesLoop.map((industry, index) => (
                  <li
                    key={`${industry}-${index}`}
                    className="h-[50px] text-[24px] leading-[50px]"
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

          <h1 className="font-[family-name:var(--font-heading)] text-5xl font-extrabold leading-[1.08] text-slate-900 sm:text-6xl lg:text-5xl">
            AI Workforce for
            <br />
            Sales and Marketing
          </h1>

          <h2 className="font-[family-name:var(--font-heading)] mt-12 flex flex-wrap items-baseline gap-x-2 text-4xl font-bold leading-tight text-slate-900 sm:text-3xl">
            <RotatingText
              text={rotatingAiCapabilities}
              duration={2200}
              y={12}
              containerClassName="align-middle"
              textClassName="text-[var(--aa-primary)]"
            />
            in one platform
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-xl">
            So that your business runs like an enterprise.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
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

          <div className="mt-8 flex items-center gap-4">
            <div className="-space-x-2">
              {["RK", "AM", "PS", "SJ"].map((name, index) => (
                <span
                  key={name}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white ${
                    index === 0
                      ? "bg-[var(--aa-primary)]"
                      : index === 1
                        ? "bg-sky-500"
                        : index === 2
                          ? "bg-indigo-500"
                          : "bg-violet-500"
                  }`}
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="text-sm leading-6 text-slate-600">
              <strong className="font-semibold text-slate-800">
                500+ students placed
              </strong>{" "}
              in top data roles
              <br />
              4.9/5 average client satisfaction score
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
              className="h-[500px] w-full rounded-[20px] object-cover object-top"
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