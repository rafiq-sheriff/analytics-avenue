"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  CircleDollarSign,
  Gauge,
  Heart,
  LineChart,
  ShieldAlert,
  Target,
} from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

const primary = "var(--aa-primary)";
const fontHeading = "font-[family-name:var(--font-heading)]";

type ImpactRow = {
  /** Numeric endpoints for count-up; displayed as `${a}–${b}%` */
  range: readonly [number, number];
  title: string;
  description: string;
  Icon: LucideIcon;
};

const IMPACT_ROWS: readonly ImpactRow[] = [
  {
    range: [60, 65],
    title: "Improvement in customer retention",
    description:
      "Seen with churn prediction, cohort analysis, and behavioral segmentation in retail, BFSI, and SaaS.",
    Icon: Heart,
  },
  {
    range: [70, 80],
    title: "Faster delivery of business insights",
    description:
      "Achieved through automated pipelines, BI self-service, and reduced manual reporting cycles.",
    Icon: Gauge,
  },
  {
    range: [80, 90],
    title: "Improvement in sales forecasting accuracy",
    description:
      "Typical for time-series models, demand forecasting, and scenario-based planning.",
    Icon: LineChart,
  },
  {
    range: [90, 95],
    title: "Higher accuracy in customer targeting",
    description:
      "Driven by ML-based segmentation, propensity models, and campaign analytics.",
    Icon: Target,
  },
  {
    range: [80, 90],
    title: "Reduction in operational and financial risk exposure",
    description:
      "Observed with anomaly detection, rule-based + predictive risk analytics.",
    Icon: ShieldAlert,
  },
  {
    range: [85, 90],
    title: "Increase in revenue realization",
    description:
      "From pricing optimization, funnel analytics, and performance-driven decisioning.",
    Icon: CircleDollarSign,
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
  const headerInView = useInView(headerRef, {
    once: true,
    margin: "-12% 0px",
  });

  return (
    <section
      id="impact"
      className="aa-section relative overflow-hidden bg-gradient-to-b from-[#faf8f4] via-[#fbfaf7] to-[#f5f4f0]"
      aria-labelledby={`${sectionId}-heading`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(120 113 108 / 0.12) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[420px] w-[70%] rounded-full bg-[color-mix(in_srgb,var(--aa-primary)_6%,transparent)] blur-3xl"
        aria-hidden
      />
      <div className="aa-container relative px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            id={`${sectionId}-heading`}
            className={`${fontHeading} text-balance text-3xl font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--aa-text-strong)] sm:text-4xl lg:text-[2.65rem]`}
            initial={false}
            animate={
              headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
            }
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Business{" "}
            <span
              className="rounded-md px-2 py-0.5 text-white"
              style={{ backgroundColor: primary }}
            >
              Impact
            </span>{" "}
            of Adopting Advanced Analytics
          </motion.h2>
        </div>

        <ul className="mx-auto mt-10 grid max-w-5xl list-none grid-cols-1 gap-5 p-0 sm:mt-12 md:grid-cols-2 md:gap-6 lg:mt-14">
          {IMPACT_ROWS.map((row, index) => (
            <ImpactCard
              key={`${row.title}-${row.range.join("-")}`}
              row={row}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ImpactCard({
  row,
  index,
}: {
  row: ImpactRow;
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.35,
    margin: "0px 0px -8% 0px",
  });
  const { Icon } = row;

  return (
    <li ref={ref}>
      <motion.article
        className="group h-full rounded-2xl border border-stone-200/80 bg-white p-5 shadow-[0_12px_40px_-18px_rgba(15,23,42,0.14)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)] sm:p-6"
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        transition={{
          duration: 0.55,
          delay: Math.min(index * 0.07, 0.42),
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="flex gap-4 sm:gap-5">
          <div
            className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-slate-950/[0.04] transition-[border-color,box-shadow,background-color] duration-300 group-hover:border-[color-mix(in_srgb,var(--aa-primary)_22%,var(--aa-border))] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_color-mix(in_srgb,var(--aa-primary)_12%,transparent)] sm:size-[3.25rem]"
            aria-hidden
          >
            <Icon
              className="size-[1.25rem] text-[var(--aa-primary)] transition-colors duration-300 group-hover:text-[var(--aa-primary-hover)] sm:size-[1.375rem]"
              strokeWidth={1.65}
              absoluteStrokeWidth
            />
          </div>
          <div className="min-w-0 flex-1">
            <p
              className={`${fontHeading} text-[clamp(1.85rem,4.2vw,2.35rem)] font-extrabold leading-none tracking-[-0.03em] text-[var(--aa-text-strong)] transition-colors duration-300 group-hover:text-[var(--aa-primary)]`}
            >
              <AnimatedPercentRange target={row.range} active={inView} />
            </p>
            <h3
              className={`${fontHeading} mt-2 text-base font-semibold leading-snug tracking-tight text-[var(--aa-text-strong)] sm:text-lg`}
            >
              {row.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--aa-text-muted)] sm:text-[0.9375rem]">
              {row.description}
            </p>
          </div>
        </div>
      </motion.article>
    </li>
  );
}

export default Impact;
