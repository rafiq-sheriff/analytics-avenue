"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";

const fontHeading = "font-[family-name:var(--font-heading)]";
const fontBody = "font-[family-name:var(--font-body)]";

/** Matches about-section pill highlight (`var(--aa-primary)`) */
const HEADING_PRIMARY = "var(--aa-primary)";

const TAB_ICON_CLASS =
  "h-6 w-auto max-h-6 max-w-[5.25rem] shrink-0 object-contain object-center sm:h-7 sm:max-h-7 sm:max-w-[6.5rem]";

const TAB_FOCUS =
  "outline-none focus-visible:ring-2 focus-visible:ring-[var(--aa-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

/** Active tab — same primary blue + glow for every track */
const ACTIVE_TAB_BUTTON_STYLE: CSSProperties = {
  backgroundColor: "var(--aa-primary)",
  boxShadow:
    "0 0 0 1px rgba(26, 115, 232, 0.14), 0 12px 40px -12px rgba(26, 115, 232, 0.42)",
};

/** Learn list bullets — match primary */
const PRIMARY_LIST_DOT_RING = "rgba(26, 115, 232, 0.28)";

type TabId = "genai" | "python" | "powerbi" | "sql";

type CurriculumTab = {
  id: TabId;
  /** Accessible name when the tab is icon-only */
  label: string;
  /** Optional text shown beside the icon (Gen AI only) */
  pillLabel?: string;
  iconSrc: string;
  title: string;
  meta: string;
  description: string;
  learn: readonly string[];
  outcomes: readonly string[];
  /** Optional second list (e.g. trends) shown under “What you’ll learn” */
  trendsHeading?: string;
  trendsItems?: readonly string[];
  /** Replace with your course preview URLs */
  videoEmbedUrl: string;
  accent: {
    /** Theme color (chips, section tint) */
    solid: string;
    /** Soft background tint */
    soft: string;
    /** Glow shadow */
    glow: string;
    /** Bullet / chip border tint */
    ring: string;
  };
};

const CURRICULUM_TABS: readonly CurriculumTab[] = [
  {
    id: "genai",
    label: "Gen AI",
    pillLabel: "Gen AI",
    iconSrc: "/assets/technology/ai.svg",
    title: "Data & Generative AI",
    meta: "6 Weeks • Live + Recorded • Intermediate → Advanced",
    description:
      "From LLM foundations to production GenAI—then the 2026 market signals hiring teams actually watch for.",
    learn: [
      "AI & ML foundations — supervised, unsupervised & reinforcement",
      "LLMs — GPT, Gemini, Claude — architecture & applications",
      "Prompt engineering & RAG (Retrieval-Augmented Generation)",
      "LangChain, LlamaIndex & vector database integration",
      "Building custom GenAI products & AI-powered workflows",
      "MLOps — model deployment, monitoring & CI/CD pipelines",
      "Hugging Face, fine-tuning & open-source LLM deployment",
      "Capstone: production-ready GenAI application",
    ],
    trendsHeading: "2026 market intelligence",
    trendsItems: [
      "GenAI growing 3× faster than classical ML libraries — PyTorch now #1 AI framework",
      "Agentic AI — autonomous agents that plan, execute & verify entire workflows",
      "RAG evolving beyond vector search → graph-aware, hybrid & multimodal retrieval",
      "AI factories: Procter & Gamble, Intuit building internal GenAI operating systems",
      "Prompt engineering is the fastest ROI skill for any data professional in 2026",
      "35% CAGR in data + AI sector — 5–7 lakh openings in Bengaluru & Hyderabad",
      "GenAI Developer salary: ₹18–50 LPA • MLOps: ₹20–35 LPA at top MNCs",
    ],
    outcomes: ["AI Engineer", "GenAI Developer", "ML Engineer"],
    videoEmbedUrl: "https://www.youtube.com/embed/aircAruvnKk?rel=0",
    accent: {
      solid: "#7c3aed",
      soft: "rgba(124, 58, 237, 0.08)",
      glow: "0 0 0 1px rgba(124, 58, 237, 0.12), 0 12px 40px -12px rgba(124, 58, 237, 0.45)",
      ring: "rgba(124, 58, 237, 0.25)",
    },
  },
  {
    id: "python",
    label: "Python",
    iconSrc: "/assets/technology/python.svg",
    title: "Python for Data Analytics",
    meta: "8 Weeks • Live + Recorded • Beginner → Advanced",
    description:
      "Build a strong analytics core in Python—then layer in how teams actually work in 2026: GenAI helpers, cloud warehouses, AutoML, and the stack employers screen for.",
    learn: [
      "Python fundamentals, data structures & OOP",
      "Pandas & NumPy — data manipulation & analysis",
      "Data cleaning, wrangling & preprocessing pipelines",
      "Matplotlib, Seaborn & Plotly — visual storytelling",
      "EDA, statistical analysis & hypothesis testing",
      "Scikit-learn ML intro — regression, classification, clustering",
      "Git & GitHub — portfolio & version control",
      "2 sector-based capstone projects",
    ],
    trendsHeading: "2026 trends & AI integration",
    trendsItems: [
      "Copilot AI inside Jupyter — auto-generates Python code from prompts",
      "PyTorch now more popular than TensorFlow (2025 Google Trends)",
      "GenAI integration growing 3x faster than classical ML libraries",
      "Python + Snowflake/BigQuery = most in-demand stack in 2026",
      "AutoML (H2O.ai, DataRobot) — analysts now build models without PhD",
      "LangChain & LlamaIndex — Python is the #1 GenAI language",
      "Data Engineer + AI skills = ₹12–25 LPA packages at MNCs",
    ],
    outcomes: ["Data Analyst", "Python Developer", "ML Analyst"],
    videoEmbedUrl: "https://www.youtube.com/embed/rfscVS0vtbw?rel=0",
    accent: {
      solid: "#2563eb",
      soft: "rgba(37, 99, 235, 0.08)",
      glow: "0 0 0 1px rgba(37, 99, 235, 0.12), 0 12px 40px -12px rgba(37, 99, 235, 0.4)",
      ring: "rgba(37, 99, 235, 0.25)",
    },
  },
  {
    id: "powerbi",
    label: "Power BI",
    iconSrc: "/assets/technology/powerbi.svg",
    title: "Power BI for Data Visualization",
    meta: "5 Weeks • Live + Recorded • Beginner → Advanced",
    description:
      "Executive-grade dashboards and semantic models—plus how Copilot and embedded AI are reshaping BI delivery in 2026.",
    learn: [
      "Data visualisation fundamentals & chart selection principles",
      "Power BI Desktop — data modelling, DAX & relationships",
      "Executive dashboard design & business storytelling",
      "Advanced DAX — time intelligence, calculated tables, KPIs",
      "Data connectors — SQL, Excel, SharePoint, APIs, cloud sources",
      "Enterprise BI design & semantic data modelling",
      "3 sector projects — Retail, Healthcare, Finance dashboards",
      "Power BI Service — publish, schedule & manage reports",
    ],
    trendsHeading: "2026 trends & AI integration",
    trendsItems: [
      "Microsoft Copilot in Power BI — builds dashboards from natural language prompts",
      "AI Insights: anomaly detection, key influencers & smart narratives built-in",
      "Tableau Pulse & Looker AI auto-generate data narratives for executives",
      "Power BI + Azure Synapse — real-time streaming analytics at enterprise scale",
      "Self-service BI: marketing managers now build own dashboards — no IT needed",
      "AutoML inside Power BI — predict outcomes without writing a single line of code",
      "BI Analysts with AI skills: ₹12–20 LPA — fastest-growing analytics role 2026",
    ],
    outcomes: ["BI Developer", "Data Analyst", "Power BI Developer"],
    videoEmbedUrl: "https://www.youtube.com/embed/MyfBI6e49mw?rel=0",
    accent: {
      solid: "#059669",
      soft: "rgba(5, 150, 105, 0.08)",
      glow: "0 0 0 1px rgba(5, 150, 105, 0.12), 0 12px 40px -12px rgba(5, 150, 105, 0.38)",
      ring: "rgba(5, 150, 105, 0.25)",
    },
  },
  {
    id: "sql",
    label: "SQL",
    iconSrc: "/assets/technology/mysql.svg",
    title: "SQL for Data Analytics",
    meta: "4 Weeks • Live + Recorded • Beginner → Advanced",
    description:
      "Interview-ready SQL through warehouses and pipelines—plus NL-to-SQL, cloud engines, and where demand is headed in 2026.",
    learn: [
      "SQL basics — SELECT, WHERE, GROUP BY, ORDER BY",
      "Advanced queries — JOINs, CTEs, subqueries, window functions",
      "Query optimisation & performance tuning",
      "Analytical data modelling & warehouse schema design",
      "ETL/ELT pipeline concepts & data transformation",
      "Cloud SQL — BigQuery, Snowflake, Redshift, Azure SQL",
      "100+ SQL interview questions + case study walkthroughs",
      "Capstone: full data engineering pipeline project",
    ],
    trendsHeading: "2026 trends & AI integration",
    trendsItems: [
      "Natural Language SQL — Microsoft Copilot writes SQL from plain English questions",
      "Google BigQuery ML: build ML models with just SQL commands, no Python needed",
      "Snowflake Intelligence — query & act on data by asking questions in natural language",
      "60%+ enterprise workloads now on cloud — SQL + AWS/GCP = critical skill combo",
      "50%+ global developers still use SQL-based systems — demand never declining",
      "Real-time SQL streaming with Apache Kafka + Spark SQL — next frontier",
      "Cloud-focused SQL roles: ₹18–30 LPA at Wipro, TCS, Fractal, Sigmoid",
    ],
    outcomes: ["SQL Developer", "Data Engineer", "Database Admin"],
    videoEmbedUrl: "https://www.youtube.com/embed/HXV3zeQKqGY?rel=0",
    accent: {
      solid: "#ca8a04",
      soft: "rgba(202, 138, 4, 0.1)",
      glow: "0 0 0 1px rgba(202, 138, 4, 0.15), 0 12px 40px -12px rgba(202, 138, 4, 0.35)",
      ring: "rgba(202, 138, 4, 0.3)",
    },
  },
] as const;

function useCurriculumHeaderReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [headerMotionReduced, setHeaderMotionReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setHeaderMotionReduced(mq.matches);
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
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return {
    ref,
    headerVisible: headerMotionReduced || visible,
    headerMotionReduced,
  };
}

const Curriculam = () => {
  const [activeId, setActiveId] = useState<TabId>("genai");
  const reduceMotion = useReducedMotion();
  const { ref: sectionRef, headerVisible, headerMotionReduced } =
    useCurriculumHeaderReveal();
  const active = CURRICULUM_TABS.find((t) => t.id === activeId)!;

  const headerRevealStyle = (delay: number) => ({
    opacity: headerVisible ? 1 : 0,
    transform: headerVisible ? "translateY(0)" : "translateY(1rem)",
    transition: headerMotionReduced
      ? "none"
      : `opacity 0.55s ease, transform 0.55s ease ${delay}ms`,
  });

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const };

  const focusTabAtIndex = useCallback((index: number) => {
    const next = CURRICULUM_TABS[index];
    if (!next) return;
    setActiveId(next.id);
    queueMicrotask(() => {
      document.getElementById(`curriculum-tab-${next.id}`)?.focus();
    });
  }, []);

  const onTabListKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const i = CURRICULUM_TABS.findIndex((t) => t.id === activeId);
      if (i < 0) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        focusTabAtIndex((i + 1) % CURRICULUM_TABS.length);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        focusTabAtIndex(
          (i - 1 + CURRICULUM_TABS.length) % CURRICULUM_TABS.length,
        );
      } else if (e.key === "Home") {
        e.preventDefault();
        focusTabAtIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        focusTabAtIndex(CURRICULUM_TABS.length - 1);
      }
    },
    [activeId, focusTabAtIndex],
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="curriculum-heading"
      className={`aa-section relative overflow-hidden bg-gradient-to-b from-[#e8eefc] via-[color-mix(in_srgb,var(--aa-primary)_9%,#f4f7fd)] to-[var(--aa-surface-soft)] py-14 sm:py-16 ${fontBody}`}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.97]"
          style={{
            background:
              "radial-gradient(ellipse 85% 55% at 50% -15%, rgba(26, 115, 232, 0.16), transparent 58%), radial-gradient(ellipse 55% 45% at 100% 85%, rgba(37, 99, 235, 0.1), transparent 52%), radial-gradient(ellipse 45% 40% at 0% 60%, rgba(26, 115, 232, 0.06), transparent 50%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.5)_0%,transparent_35%,transparent_65%,rgba(248,250,252,0.85)_100%)]" />
      </div>

      <div className="aa-container relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-white/82 p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.1)] backdrop-blur-md sm:rounded-[2rem] sm:p-8 lg:p-10">
            <header className="mx-auto max-w-3xl text-center lg:max-w-none lg:text-left">
              <div style={headerRevealStyle(0)}>
                <h2
                  id="curriculum-heading"
                  className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-center"
                >
                  Empowered{" "}
                  <span
                    className="rounded-sm px-2 py-0.5 text-white"
                    style={{ backgroundColor: HEADING_PRIMARY }}
                  >
                    2,000+ professionals
                  </span>{" "}
                  glob from the team of Data Scientists
                </h2>

                <p className="mt-4 text-base font-medium text-slate-600 sm:text-lg text-center">
                  Nationwide Data Analytics &amp; GenAI Industrial Program
                </p>

                <div className="mt-8 flex justify-center lg:justify-center">
                  <a
                    href="#cta"
                    className="aa-btn-primary shadow-lg shadow-blue-300/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--aa-primary)]"
                  >
                    EdTech Solutions
                  </a>
                </div>
              </div>
            </header>

            <div className="mt-12 border-t border-slate-200/80 pt-10 lg:mt-14 lg:pt-12">
              <div
                className="border-b border-slate-100 px-4 pb-4 pt-4 sm:px-6 sm:pb-5 sm:pt-5 lg:px-8"
                role="tablist"
                aria-label="Course tracks"
                onKeyDown={onTabListKeyDown}
              >
                <p
                  className={`mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-slate-400 ${fontHeading}`}
                >
                  Select program
                </p>
                <div className="flex w-full items-stretch gap-1 rounded-lg bg-slate-100/95 p-1 ring-1 ring-slate-900/[0.04] sm:gap-1.5 sm:p-1.5">
                  {CURRICULUM_TABS.map((tab) => {
                    const isActive = tab.id === activeId;
                    const showPillText = tab.pillLabel != null;
                    return (
                      <motion.button
                        key={tab.id}
                        type="button"
                        role="tab"
                        id={`curriculum-tab-${tab.id}`}
                        aria-label={showPillText ? undefined : tab.label}
                        aria-selected={isActive}
                        aria-controls={`curriculum-panel-${tab.id}`}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => setActiveId(tab.id)}
                        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 450, damping: 28 }}
                        className={`flex min-h-11 min-w-0 flex-1 items-center justify-center rounded-lg py-2 transition-[color,background-color,box-shadow,filter] duration-200 sm:min-h-12 sm:py-2.5 ${TAB_FOCUS} ${
                          showPillText
                            ? "gap-1.5 px-2 sm:gap-2 sm:px-3"
                            : "gap-0 px-1.5 sm:px-2"
                        } ${
                          isActive
                            ? "shadow-sm"
                            : "bg-transparent hover:bg-white/70 active:bg-white/85"
                        }`}
                        style={isActive ? ACTIVE_TAB_BUTTON_STYLE : undefined}
                      >
                        <Image
                          src={tab.iconSrc}
                          alt=""
                          width={200}
                          height={44}
                          unoptimized
                          className={`${TAB_ICON_CLASS} ${
                            isActive ? "brightness-0 invert" : ""
                          }`}
                          draggable={false}
                        />
                        {showPillText ? (
                          <span
                            className={`text-xs font-semibold tracking-tight whitespace-nowrap sm:text-sm ${fontHeading} ${
                              isActive ? "text-white" : "text-slate-600"
                            }`}
                          >
                            {tab.pillLabel}
                          </span>
                        ) : null}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-10">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeId}
                    id={`curriculum-panel-${activeId}`}
                    role="tabpanel"
                    aria-labelledby={`curriculum-tab-${activeId}`}
                    initial={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, x: -12, y: 4 }
                    }
                    animate={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 1, x: 0, y: 0 }
                    }
                    exit={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, x: 8, y: -4 }
                    }
                    transition={transition}
                    className="will-change-transform"
                  >
                  {/* Row 1: program summary + compact preview (not 50/50) */}
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-12">
                    <div className="min-w-0 flex-1 lg:max-w-[min(100%,40rem)]">
                      <h3
                        className={`text-2xl font-semibold tracking-tight text-[var(--aa-text-strong)] sm:text-3xl lg:text-[1.75rem] ${fontHeading}`}
                      >
                        {active.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-[0.9375rem]">
                        {active.meta}
                      </p>
                      <p className="mt-5 text-[0.9375rem] leading-relaxed text-[var(--aa-text-muted)] sm:text-base">
                        {active.description}
                      </p>
                    </div>

                    <aside className="w-full shrink-0 lg:max-w-[min(100%,22rem)] xl:max-w-[26rem]">
                      <p
                        className={`mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-slate-400 ${fontHeading}`}
                      >
                        Course preview
                      </p>
                      <div className="lg:sticky lg:top-28">
                        <div className="relative overflow-hidden rounded-2xl bg-slate-950/[0.04] shadow-[0_12px_40px_-16px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/90">
                          <div className="relative aspect-video w-full bg-slate-900/[0.06]">
                            <iframe
                              title={`${active.title} preview`}
                              src={active.videoEmbedUrl}
                              className="absolute inset-0 h-full w-full border-0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              loading="lazy"
                            />
                            <div
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent sm:h-24"
                              aria-hidden
                            />
                          </div>
                        </div>
                      </div>
                    </aside>
                  </div>

                  {/* Row 2: full-width scope — uses horizontal space instead of a tall narrow column */}
                  <div className="mt-10 border-t border-slate-100 pt-10 sm:mt-12 sm:pt-12">
                    <p
                      className={`text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-slate-400 ${fontHeading}`}
                    >
                      What you&apos;ll learn
                    </p>

                    {active.trendsItems != null &&
                    active.trendsItems.length > 0 ? (
                      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
                        <div className="min-w-0 rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-900/[0.04] sm:p-6">
                          <p
                            className={`text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-slate-500 ${fontHeading}`}
                          >
                            Core curriculum
                          </p>
                          <ul className="mt-3 space-y-3 sm:space-y-3.5">
                            {active.learn.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 text-[0.9375rem] leading-snug text-slate-700"
                              >
                                <span
                                  className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--aa-primary)] ring-2 ring-white"
                                  style={{
                                    boxShadow: `0 0 0 1px ${PRIMARY_LIST_DOT_RING}`,
                                  }}
                                  aria-hidden
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div
                          className="min-w-0 rounded-2xl p-5 ring-1 ring-slate-900/[0.06] sm:p-6"
                          style={{
                            backgroundColor: active.accent.soft,
                            boxShadow: `inset 0 0 0 1px ${active.accent.ring}`,
                          }}
                        >
                          <p
                            className={`text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-slate-600 ${fontHeading}`}
                          >
                            {active.trendsHeading ?? "Also covered"}
                          </p>
                          <ul className="mt-3 space-y-3 sm:space-y-3.5">
                            {active.trendsItems.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 text-[0.9375rem] leading-snug text-slate-700"
                              >
                                <span
                                  className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--aa-primary)] ring-2 ring-white"
                                  style={{
                                    boxShadow: `0 0 0 1px ${PRIMARY_LIST_DOT_RING}`,
                                  }}
                                  aria-hidden
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {active.learn.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-[0.9375rem] leading-snug text-slate-700"
                          >
                            <span
                              className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--aa-primary)] ring-2 ring-white"
                              style={{
                                boxShadow: `0 0 0 1px ${PRIMARY_LIST_DOT_RING}`,
                              }}
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-10 sm:mt-12">
                    <p
                      className={`text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-slate-400 ${fontHeading}`}
                    >
                      Career outcomes
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {active.outcomes.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 sm:px-3.5 sm:py-1.5 sm:text-[0.8125rem] ${fontHeading}`}
                          style={{
                            backgroundColor: active.accent.soft,
                            boxShadow: `inset 0 0 0 1px ${active.accent.ring}`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculam;
