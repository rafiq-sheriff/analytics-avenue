"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Brain,
  CircleDollarSign,
  Heart,
  Megaphone,
  Package,
  RefreshCcw,
  Rocket,
  Settings2,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

import { PRIMARY } from "@/components/card/challenge-card/chalenge-card";

const fontHeading = "font-[family-name:var(--font-heading)]";
const fontBody = "font-[family-name:var(--font-body)]";

const BOT_SRC = "/assets/images/reason/bot.png";

/** Intrinsic pixel size of `bot.png` (used for layout; CSS scales with `w-full h-auto`). */
const BOT_WIDTH = 989;
const BOT_HEIGHT = 989;

/** Light hex “floor” under the illustration (reference layout) */
const HEX_FLOOR =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath fill='none' stroke='%23cbd5e1' stroke-width='0.55' d='M28 66L0 50V16L28 0l28 16v34L28 66zm0-66L0 16l28 16 28-16M0 50l28 16 28-16'/%3E%3C/svg%3E\")";

/**
 * Icon modes:
 * - `false` (default): Lucide SVGs — consistent size, works with your primary color, looks the same on every OS.
 * - `true`: Original emoji — friendlier, zero icon dependency at render time.
 */
const USE_EMOJI_ICONS = false;

type ReasonItem = {
  emoji: string;
  Icon: LucideIcon;
  title: string;
};

const REASON_ITEMS: readonly ReasonItem[] = [
  {
    emoji: "⚙️",
    Icon: Settings2,
    title: "Business Automation",
  },
  {
    emoji: "📊",
    Icon: BarChart3,
    title: "Data-Driven Strategy",
  },
  {
    emoji: "🧠",
    Icon: Brain,
    title: "Error Reduction",
  },
  {
    emoji: "💰",
    Icon: CircleDollarSign,
    title: "Cost Optimization",
  },
  {
    emoji: "🚀",
    Icon: Rocket,
    title: "Digital Transformation",
  },
  {
    emoji: "📢",
    Icon: Megaphone,
    title: "Brand Awareness",
  },
  {
    emoji: "🤖",
    Icon: Bot,
    title: "Optimized Models",
  },
  {
    emoji: "📈",
    Icon: TrendingUp,
    title: "Forecasting Decisions",
  },
  {
    emoji: "📦",
    Icon: Package,
    title: "Demand Forecasting",
  },
  {
    emoji: "❤️",
    Icon: Heart,
    title: "Brand Monitoring",
  },
  {
    emoji: "🔐",
    Icon: ShieldCheck,
    title: "Data Security",
  },
  {
    emoji: "🔄",
    Icon: RefreshCcw,
    title: "Churn Reduction",
  },
  {
    emoji: "📉",
    Icon: Target,
    title: "Better ROI",
  },
];

const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.06 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const NewReason = () => {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="partner-reasons"
      aria-labelledby="partner-reasons-title"
      aria-describedby="partner-reasons-subtitle"
      className="aa-section relative overflow-hidden bg-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_-8%,color-mix(in_srgb,var(--aa-primary)_8%,transparent),transparent_58%)]"
        aria-hidden
      />

      <div className="aa-container relative">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 max-w-4xl text-center sm:mb-10 sm:text-left lg:mb-12"
        >
          <h2
            id="partner-reasons-title"
            className={`${fontHeading} text-3xl font-black leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.25rem] lg:leading-tight`}
          >
            <span
              className="inline-block rounded-md px-2.5 py-1 text-[#ffffff] sm:px-3 sm:py-1.5"
              style={{ backgroundColor: PRIMARY }}
            >
              Reasons
            </span>{" "}
            to Partner with Analytics Avenue
          </h2>
          <p
            id="partner-reasons-subtitle"
            className={`${fontBody} mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg sm:leading-relaxed lg:mx-0 lg:max-w-3xl`}
          >
            Thirteen focused outcomes—from automation and strategy to security,
            forecasting, and ROI.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <motion.ul
            className="grid list-none grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3"
            variants={reduceMotion ? undefined : listContainer}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.06, margin: "0px 0px -6% 0px" }}
          >
            {REASON_ITEMS.map(({ emoji, Icon, title }) => (
              <motion.li
                key={title}
                variants={reduceMotion ? undefined : listItem}
                className="min-w-0"
              >
                <article
                  className="group flex h-full items-center gap-2.5 rounded-xl border border-slate-200/70 bg-white p-3 shadow-sm transition-[box-shadow,transform,border-color] duration-300 ease-out motion-reduce:transition-colors motion-reduce:hover:translate-y-0 hover:-translate-y-px hover:border-slate-300/80 hover:shadow-md sm:gap-3 sm:p-3.5"
                  style={{
                    borderTopWidth: 3,
                    borderTopStyle: "solid",
                    borderTopColor: "var(--aa-primary)",
                  }}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-600 ring-1 ring-slate-200/80 transition-[background-color,box-shadow,color] duration-300 ease-out group-hover:bg-slate-200/80 group-hover:text-slate-800 sm:h-10 sm:w-10 ${USE_EMOJI_ICONS ? "text-[1.35rem] leading-none sm:text-[1.45rem]" : ""}`}
                    aria-hidden
                  >
                    {USE_EMOJI_ICONS ? (
                      emoji
                    ) : (
                      <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" strokeWidth={2} />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`${fontHeading} text-[0.8125rem] font-semibold leading-snug text-slate-900 sm:text-sm`}
                    >
                      {title}
                    </h3>
                  </div>
                </article>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex w-full justify-center lg:justify-end lg:self-start lg:sticky lg:top-[calc(4.5rem+env(safe-area-inset-top,0px))]"
          >
            <div className="relative w-full max-w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50/40 to-white">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[45%] opacity-[0.4]"
                style={{
                  backgroundImage: HEX_FLOOR,
                  backgroundSize: "56px 100px",
                  backgroundPosition: "50% 100%",
                }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_65%_50%_at_50%_42%,color-mix(in_srgb,var(--aa-primary)_10%,transparent),transparent_68%)]"
                aria-hidden
              />
              <Image
                src={BOT_SRC}
                width={BOT_WIDTH}
                height={BOT_HEIGHT}
                alt="3D illustration of an AI assistant with a phone and chat bubbles, representing analytics partnership"
                className="relative z-[1] block h-auto w-full max-w-full"
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 45vw, 100vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent"
        aria-hidden
      />
    </section>
  );
};

export default NewReason;
