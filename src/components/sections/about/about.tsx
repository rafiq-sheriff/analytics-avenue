"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const primary = "var(--aa-primary)";

function useSectionReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.14, rootMargin: "0px 0px -5% 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible: reduceMotion || visible, reduceMotion };
}

const About = () => {
  const { ref, visible, reduceMotion } = useSectionReveal();

  const reveal = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(1rem)",
    transition: reduceMotion
      ? "none"
      : `opacity 0.6s ease, transform 0.6s ease ${delay}ms`,
  });

  return (
    <section
      ref={ref}
      id="about"
      aria-labelledby="about-title"
      className="aa-section bg-white pb-20 pt-12 sm:pb-28 sm:pt-16"
    >
      <div className="aa-container">
        <h2
          id="about-title"
          className="mb-8 text-center text-3xl font-extrabold leading-tight text-slate-900 sm:mb-10 sm:text-4xl"
          style={reveal(0)}
        >
          Transforming Data Into{" "}
          <span
            className="rounded-sm px-2 py-0.5 text-white"
            style={{ backgroundColor: primary }}
          >
            Real Business Impact
          </span>
        </h2>

        <div
          className="grid gap-5 rounded-3xl border border-slate-100 bg-[#f7fbff] p-4 shadow-[0_18px_55px_-30px_rgba(15,23,42,0.35)] sm:p-6 lg:grid-cols-[1.03fr_1fr] lg:p-8"
          style={reveal(90)}
        >
          <div className="relative min-h-[340px] sm:min-h-[470px]">
            <div className="relative h-full overflow-hidden rounded-[1.4rem]">
              <Image
                src="/assets/images/Subramani.jpg"
                alt="Analytics Avenue leadership and consulting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
            </div>

            <div className="kpi-float absolute -left-3 top-10 hidden w-56 items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:flex">
              <div className="rounded-full bg-[#1A73E8]/10 p-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                <p className="text-xs font-semibold text-slate-800">
                  Trusted by 2000+
                </p>
                <p className="text-[11px] text-slate-500">
                  Professionals worldwide
                </p>
              </div>
            </div>

            <div
              className="kpi-float kpi-float-delay absolute -right-3 top-1/2 hidden w-52 -translate-y-1/2 items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:flex"
              style={
                reduceMotion
                  ? undefined
                  : { animation: "kpi-float 4s ease-in-out infinite" }
              }
            >
              <div className="rounded-full bg-emerald-50 p-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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

            <div className="kpi-float absolute -left-3 bottom-6 hidden w-56 items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:flex">
              <div className="rounded-full bg-violet-50 p-2.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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

          <div className="rounded-[1.4rem] bg-white p-5 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.28)] sm:p-7">
            <p
              className="text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ color: primary, ...reveal(140) }}
            >
              About Analytics Avenue
            </p>

            <p
              className="mt-3 text-lg leading-relaxed text-slate-600 sm:text-[1.2rem] sm:leading-[1.3]"
              style={reveal(180)}
            >
              At Analytics Avenue, we empower professionals and businesses
              through impactful learning and real-world data solutions, backed
              by experts across multiple industries.
            </p>

            <div className="mt-6" style={reveal(230)}>
              <a
                href="#approach"
            className="aa-btn-primary shadow-lg shadow-blue-300/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--aa-primary)]"
              >
                Explore Our Approach
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  aria-hidden
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
            </div>

            <div id="approach" className="mt-7" style={reveal(280)}>
              <div className="mb-3 flex items-center gap-3">
                <h3
                  className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em]"
                  style={{ color: primary }}
                >
                  Leadership Excellence
                </h3>
                <span className="h-px w-full bg-blue-200" />
              </div>

              <ul className="space-y-2.5 text-base leading-relaxed text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 text-sm font-bold text-[var(--aa-primary)]" aria-hidden>
                    ✓
                  </span>
                  <span>
                  Worked with 15+ global brands, delivering data-driven
                  strategies and intelligent solutions.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 text-sm font-bold text-[var(--aa-primary)]" aria-hidden>
                    ✓
                  </span>
                  <span>
                  Recognized as a leading AI speaker for contributions to AI
                  education and industry adoption.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 text-sm font-bold text-[var(--aa-primary)]" aria-hidden>
                    ✓
                  </span>
                  <span>
                  Empowered 1,000+ students through focused data and analytics
                  initiatives.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 text-sm font-bold text-[var(--aa-primary)]" aria-hidden>
                    ✓
                  </span>
                  <span>
                  Driving efforts to bridge academia and industry by building
                  future-ready AI talent.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
