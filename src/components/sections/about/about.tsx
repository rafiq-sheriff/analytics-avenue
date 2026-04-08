"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const primary = "#2563EB";

const features = [
  {
    title: "Intelligent Decision-Making",
    description:
      "Make faster, data-backed decisions with real-time insights and predictive intelligence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M4 19V5M4 19H20M4 19L8 15M20 19L16 15M8 9L12 5L16 9M12 5V15"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Scalable Data Systems",
    description:
      "Build data pipelines and AI systems that scale with your business growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M4 7H20M4 12H20M4 17H20M8 7V5M16 7V5M12 12V10M8 17V15M16 17V15"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "End-to-End Automation",
    description:
      "Automate workflows and processes with AI-powered systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

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
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const revealed = reduceMotion || visible;

  return { ref, visible: revealed, reduceMotion };
}

const About = () => {
  const { ref, visible, reduceMotion } = useSectionReveal();

  const reveal = (delayMs: number) => {
    const on = visible;
    return {
      opacity: on ? 1 : 0,
      transform: on ? "translateY(0)" : "translateY(1.5rem)",
      transition: reduceMotion
        ? "none"
        : `opacity 0.65s ease, transform 0.65s ease`,
      transitionDelay: reduceMotion ? "0ms" : `${delayMs}ms`,
    } as const;
  };

  return (
    <section
      ref={ref}
      id="about"
      aria-labelledby="about-heading"
      className="bg-white px-6 "
    >

      <div className="mx-auto w-full max-w-7xl">
      <div className="mx-auto w-full max-w-7xl text-center mb-10">
       <h2
                  id="about-heading"
                  className=" text-3xl font-bold leading-tight text-slate-900 sm:text-[2.2rem]"
                >
                  Transforming Data Into Real Business Impact
                </h2>
       </div>
        <div
          className="overflow-hidden rounded-[2rem] border border-slate-100 bg-[#f8fbff] p-4 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.35)] sm:p-6 lg:p-8"
          style={reveal(0)}
        >
          <div className="grid items-stretch gap-5 lg:grid-cols-[1.06fr_1fr]">
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] sm:min-h-[460px]">
              <Image
                src="/assets/images/Subramani.jpg"
                alt="Analytics and AI consulting professionals collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />

              <div
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6"
                style={
                  reduceMotion
                    ? undefined
                    : { animation: "kpi-float 4s ease-in-out infinite" }
                }
              >
                <div className="max-w-[220px] rounded-xl border border-white/70 bg-white/95 px-3.5 py-3 shadow-[0_12px_30px_-12px_rgba(37,99,235,0.35)] backdrop-blur-md">
                  <p className="text-sm font-semibold leading-snug text-slate-900">
                    Trusted by{" "}
                    <span style={{ color: primary }}>2000+</span> professionals
                    worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.3)] sm:p-8">
              <div style={reveal(80)}>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{ color: primary }}
                >
                  About Analytics Avenue
                </p>

                <h2
                  id="about-heading"
                  className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-[2.2rem]"
                >
                  Transforming Data Into Real Business Impact
                </h2>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  At Analytics Avenue, we go beyond dashboards — we build
                  intelligent systems that help businesses grow smarter, faster,
                  and more efficiently.
                </p>

                <div className="mt-7">
                  <a
                    href="#about-features"
                    className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/35 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                    style={{ backgroundColor: primary }}
                  >
                    Explore Our Approach
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>

              <div
                id="about-features"
                className="mt-7 grid gap-3.5 sm:grid-cols-2"
              >
                {features.slice(0, 2).map((item, i) => (
                  <article
                    key={item.title}
                    className="group rounded-xl border border-slate-100 bg-[#fbfdff] p-4 shadow-[0_8px_22px_-16px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_16px_36px_-16px_rgba(37,99,235,0.22)] motion-reduce:hover:translate-y-0"
                    style={reveal(140 + i * 90)}
                  >
                    <div
                      className="mb-3 inline-flex rounded-lg bg-blue-50 p-2 text-[#2563EB] transition group-hover:bg-blue-100"
                      aria-hidden
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>

              <article
                className="group mt-3.5 rounded-xl border border-slate-100 bg-[#fbfdff] p-4 shadow-[0_8px_22px_-16px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_16px_36px_-16px_rgba(37,99,235,0.22)] motion-reduce:hover:translate-y-0"
                style={reveal(290)}
              >
                <div
                  className="mb-3 inline-flex rounded-lg bg-blue-50 p-2 text-[#2563EB] transition group-hover:bg-blue-100"
                  aria-hidden
                >
                  {features[2].icon}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {features[2].title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {features[2].description}
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
