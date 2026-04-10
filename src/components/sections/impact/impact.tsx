"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

const primary = "var(--aa-primary)";

type ImpactRow = {
  /** Numeric endpoints for count-up; displayed as `${a}–${b}%` */
  range: readonly [number, number];
  title: string;
  description: string;
};

const IMPACT_ROWS: readonly ImpactRow[] = [
  {
    range: [60, 65],
    title: "Improvement in customer retention",
    description:
      "Seen with churn prediction, cohort analysis, and behavioral segmentation in retail, BFSI, and SaaS.",
  },
  {
    range: [70, 80],
    title: "Faster delivery of business insights",
    description:
      "Achieved through automated pipelines, BI self-service, and reduced manual reporting cycles.",
  },
  {
    range: [80, 90],
    title: "Improvement in sales forecasting accuracy",
    description:
      "Typical for time-series models, demand forecasting, and scenario-based planning.",
  },
  {
    range: [90, 95],
    title: "Higher accuracy in customer targeting",
    description:
      "Driven by ML-based segmentation, propensity models, and campaign analytics.",
  },
  {
    range: [80, 90],
    title: "Reduction in operational and financial risk exposure",
    description:
      "Observed with anomaly detection, rule-based + predictive risk analytics.",
  },
  {
    range: [85, 90],
    title: "Increase in revenue realization",
    description:
      "From pricing optimization, funnel analytics, and performance-driven decisioning.",
  },
] as const;

function CountUpPercentRange({
  target,
}: {
  target: readonly [number, number];
}) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    const controls = animate(0, 1, {
      duration: 1.15,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setA(Math.round(target[0] * v));
        setB(Math.round(target[1] * v));
      },
    });
    return () => controls.stop();
  }, [target]);

  return (
    <span className="tabular-nums tracking-tight">
      {a}–{b}%
    </span>
  );
}

function AnimatedPercentRange({
  target,
  active,
}: {
  target: readonly [number, number];
  active: boolean;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <span className="tabular-nums tracking-tight">
        {target[0]}–{target[1]}%
      </span>
    );
  }

  if (!active) {
    return (
      <span className="tabular-nums tracking-tight">
        {target[0]}–{target[1]}%
      </span>
    );
  }

  return <CountUpPercentRange target={target} />;
}

function Impact() {
  const sectionId = useId();
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-12% 0px" });

  return (
    <section
      id="impact"
      className="aa-section relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f6f9ff]"
      aria-labelledby={`${sectionId}-heading`}
    >
      {/* Faint dot grid — no boxes */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.35) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div className="aa-container relative px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mx-auto max-w-3xl text-center">
          <motion.h2
            id={`${sectionId}-heading`}
            className="mb-8 text-center text-3xl font-extrabold leading-tight text-slate-900 sm:mb-10 sm:text-4xl"
            initial={false}
            animate={
              headerInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 16 }
            }
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Business{" "}
            <span
              className="rounded-sm px-2 py-0.5 text-white"
              style={{ backgroundColor: primary }}
            >
              Impact
            </span>{" "}
            of Adopting Advanced Analytics
          </motion.h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl md:mt-16">
          <ul className="relative m-0 list-none space-y-0 p-0">
            {IMPACT_ROWS.map((row, index) => (
              <ImpactRowItem
                key={`${row.title}-${row.range.join("-")}`}
                row={row}
                index={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ImpactRowItem({
  row,
  index,
}: {
  row: ImpactRow;
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35, margin: "0px 0px -8% 0px" });

  return (
    <li ref={ref}>
      <motion.article
        className="group border-b border-[color-mix(in_srgb,var(--aa-border)_85%,transparent)] py-6 transition-colors duration-300 last:border-b-0 md:grid md:grid-cols-[minmax(0,17.5rem)_1fr] md:gap-x-0 md:gap-y-0 md:py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.55,
          delay: Math.min(index * 0.06, 0.36),
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="relative md:pr-6 lg:pr-8">
          <p
            className="font-[family-name:var(--font-heading)] text-[clamp(2.25rem,5vw,3.25rem)] font-extrabold leading-none tracking-[-0.03em] text-[var(--aa-primary)] transition-[color] duration-300 group-hover:text-[var(--aa-primary-hover)] md:text-right"
          >
            <AnimatedPercentRange target={row.range} active={inView} />
          </p>
        </div>

        <div className="relative mt-4 md:mt-0 md:flex md:flex-col md:justify-center md:border-l md:border-[var(--aa-border)] md:pl-8 lg:pl-10">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold leading-snug tracking-tight text-[var(--aa-text-strong)] underline-offset-[6px] transition-[color,text-decoration-color] duration-300 group-hover:text-[var(--aa-primary)] group-hover:underline group-hover:decoration-[color-mix(in_srgb,var(--aa-primary)_45%,transparent)] sm:text-xl">
            {row.title}
          </h3>
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-[var(--aa-text-muted)] transition-colors duration-300 group-hover:text-[color-mix(in_srgb,var(--aa-text-muted)_92%,var(--aa-text-strong)_8%)]">
            {row.description}
          </p>
        </div>
      </motion.article>
    </li>
  );
}

export default Impact;
