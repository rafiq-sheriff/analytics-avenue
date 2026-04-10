"use client";

import ChallengeCard, { PRIMARY } from "@/components/card/challenge-card/chalenge-card";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const fontHeading = "font-[family-name:var(--font-heading)]";
const fontBody = "font-[family-name:var(--font-body)]";

type ChallengeItem = {
  id: string;
  badgeLabel: string;
  headline: string;
  description: string;
  bullets: [string, string, string];
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
};

const challenges: ChallengeItem[] = [
  {
    id: "marketing",
    badgeLabel: "Marketing Analytics",
    headline: "Data-Driven Campaign Optimization.",
    description:
      "Analyze campaigns, track performance, and maximize ROI with real-time marketing insights.",
    bullets: [
      "Monitor campaign performance across channels",
      "Understand customer behavior & segmentation",
      "Optimize conversions with data insights",
    ],
    imageSrc: "/assets/images/challenges/marketing.png",
    imageAlt: "Marketing analytics illustration",
  },
  {
    id: "sales",
    badgeLabel: "Sales Analytics",
    headline: "Smarter Sales, Better Decisions.",
    description:
      "Track sales performance, forecast revenue, and identify growth opportunities with precision.",
    bullets: [
      "Real-time sales tracking & reporting",
      "Forecast revenue and trends",
      "Identify high-value opportunities",
    ],
    imageSrc: "/assets/images/challenges/ev.png",
    imageAlt: "Sales analytics illustration",
  },
  {
    id: "customer",
    badgeLabel: "Customer Analytics",
    headline: "Understand Every Customer.",
    description:
      "Gain deep insights into customer behavior, retention, and engagement patterns.",
    bullets: [
      "Segment customers with precision",
      "Track engagement and retention",
      "Personalize experiences using data",
    ],
    imageSrc: "/assets/images/challenges/transport.png",
    imageAlt: "Customer analytics illustration",
  },
  {
    id: "financial",
    badgeLabel: "Financial Analytics",
    headline: "Smarter Financial Planning.",
    description:
      "Improve forecasting, risk management, and decision-making with accurate financial insights.",
    bullets: [
      "Monitor financial performance",
      "Forecast revenue and expenses",
      "Reduce risks with predictive analytics",
    ],
    imageSrc: "/assets/images/challenges/solar.png",
    imageAlt: "Financial analytics illustration",
  },
  {
    id: "supply-chain",
    badgeLabel: "Supply Chain Analytics",
    headline: "Streamline Operations Efficiently.",
    description:
      "Optimize logistics, inventory, and demand planning with real-time data insights.",
    bullets: [
      "Track inventory and logistics",
      "Improve demand forecasting",
      "Reduce operational inefficiencies",
    ],
    imageSrc: "/assets/images/challenges/supplychain.png",
    imageAlt: "Supply chain analytics illustration",
  },
  {
    id: "healthcare",
    badgeLabel: "Healthcare Analytics",
    headline: "Better Care Through Data.",
    description:
      "Enhance patient outcomes and operational efficiency using healthcare analytics.",
    bullets: [
      "Monitor patient data & trends",
      "Improve treatment outcomes",
      "Optimize healthcare operations",
    ],
    imageSrc: "/assets/images/challenges/healthcare.png",
    imageAlt: "Healthcare analytics illustration",
  },
  {
    id: "manufacturing",
    badgeLabel: "Manufacturing Analytics",
    headline: "Optimize Production Performance.",
    description:
      "Increase efficiency and reduce downtime with predictive manufacturing insights.",
    bullets: [
      "Monitor production performance",
      "Predict equipment failures",
      "Improve operational efficiency",
    ],
    imageSrc: "/assets/images/challenges/manufacturing.png",
    imageAlt: "Manufacturing analytics illustration",
  },
  {
    id: "hr",
    badgeLabel: "HR Analytics",
    headline: "Smarter Workforce Decisions.",
    description:
      "Optimize hiring, performance, and employee retention with data-driven HR insights.",
    bullets: [
      "Analyze workforce performance",
      "Improve hiring decisions",
      "Track employee engagement",
    ],
    imageSrc: "/assets/images/challenges/hr.png",
    imageAlt: "HR analytics illustration",
  },
  {
    id: "real-estate",
    badgeLabel: "Real Estate Analytics",
    headline: "Make Smarter Property Decisions.",
    description:
      "Analyze market trends, valuations, and investment opportunities with data insights.",
    bullets: [
      "Track market trends & pricing",
      "Evaluate investment opportunities",
      "Forecast property demand",
    ],
    imageSrc: "/assets/images/challenges/realestate.png",
    imageAlt: "Real estate analytics illustration",
  },
  {
    id: "ai-automation",
    badgeLabel: "AI & Automation",
    headline: "Automate. Optimize. Scale.",
    description:
      "Transform your business with intelligent automation and AI-driven workflows.",
    bullets: [
      "Automate repetitive processes",
      "Build intelligent decision systems",
      "Improve efficiency at scale",
    ],
    imageSrc: "/assets/images/challenges/genai.png",
    imageAlt: "AI and automation illustration",
  },
];

const Challenges = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByViewport = useCallback((dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const c0 = cardRefs.current[0];
    const c1 = cardRefs.current[1];
    /** Distance to next card (width + gap), not full viewport — avoids skipping slides */
    const step =
      c0 && c1
        ? c1.offsetLeft - c0.offsetLeft
        : (c0?.getBoundingClientRect().width ?? el.clientWidth * 0.85) + 10;
    el.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  }, []);

  /** Center the target card inside the carousel (scrollIntoView hits the wrong scrollport). */
  const scrollToIndex = useCallback((index: number) => {
    const root = scrollRef.current;
    const card = cardRefs.current[index];
    if (!root || !card) return;

    const rootRect = root.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const delta = cardRect.left - rootRect.left;
    const targetScroll =
      root.scrollLeft +
      delta -
      (root.clientWidth - card.offsetWidth) / 2;
    const maxLeft = Math.max(0, root.scrollWidth - root.clientWidth);
    const left = Math.min(Math.max(0, targetScroll), maxLeft);

    setActiveIndex(index);
    root.scrollTo({ left, behavior: "smooth" });
  }, []);

  /** Which card is nearest the horizontal center of the carousel (matches snap / user scroll). */
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    let frame = 0;
    const syncActiveFromScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cards = cardRefs.current.filter(
          (el): el is HTMLElement => el != null,
        );
        if (cards.length === 0) return;

        const rootRect = root.getBoundingClientRect();
        const centerX = rootRect.left + rootRect.width / 2;
        let bestIdx = 0;
        let bestDist = Infinity;

        cards.forEach((el, i) => {
          const r = el.getBoundingClientRect();
          const mid = r.left + r.width / 2;
          const d = Math.abs(mid - centerX);
          if (d < bestDist) {
            bestDist = d;
            bestIdx = i;
          }
        });

        setActiveIndex(bestIdx);
      });
    };

    syncActiveFromScroll();
    root.addEventListener("scroll", syncActiveFromScroll, { passive: true });
    const ro = new ResizeObserver(syncActiveFromScroll);
    ro.observe(root);

    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("scroll", syncActiveFromScroll);
      ro.disconnect();
    };
  }, []);

  return (
    <section
      id="challenges"
      aria-labelledby="challenges-title"
      className="aa-section bg-[var(--aa-surface-soft)]"
    >
      <div className="aa-container">
        <header className="mb-10 text-center sm:mb-12">
          <h2
            id="challenges-title"
            className={`${fontHeading} text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl`}
          >
            Built for{" "}
            <span
              className="rounded-sm px-2 py-0.5 text-white"
              style={{ backgroundColor: PRIMARY }}
            >
              Real-World Business
            </span>{" "}
            Challenges
          </h2>
          <p
            className={`${fontBody} mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg`}
          >
            Our solutions combine data, AI, and automation to solve complex
            problems across industries.
          </p>
        </header>

        <div className="mb-3 sm:mb-4">
          <div className="rounded-xl border border-slate-100 bg-white/90 px-1 py-1 shadow-sm sm:px-1.5 sm:py-1.5">
            <div
              className="flex justify-start gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center sm:gap-1.5 sm:px-0 md:gap-2 [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Challenge categories"
            >
              {challenges.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === i}
                  onClick={() => scrollToIndex(i)}
                  className={`${fontBody} shrink-0 whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-medium leading-tight transition-colors sm:px-2.5 sm:py-1.5 sm:text-[11px] md:text-xs ${
                    activeIndex === i
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                  style={
                    activeIndex === i
                      ? {
                          boxShadow: `inset 0 -2px 0 ${PRIMARY}`,
                          color: "#0f172a",
                        }
                      : undefined
                  }
                >
                  {c.badgeLabel}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl border border-slate-100 bg-[#f1f5f9] p-1.5 shadow-[0_18px_55px_-30px_rgba(15,23,42,0.35)] sm:p-2.5">
          <div
            ref={scrollRef}
            className="team-marquee-scroll flex snap-x snap-mandatory gap-2 overflow-x-auto overflow-y-hidden pb-1.5 pt-0.5 sm:gap-5"
            style={{ scrollPaddingInline: "0.5rem" }}
            aria-label="Challenge solutions — scroll horizontally"
          >
            {challenges.map((c, index) => (
              <ChallengeCard
                key={c.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`snap-center shrink-0 rounded-xl shadow-md shadow-slate-200/50 ${
                  c.featured ? "ring-2 ring-[#1A73E8] ring-offset-1" : ""
                } w-[min(520px,calc(100vw-2.25rem))] max-w-[min(520px,calc(100vw-2.25rem))] md:w-[min(560px,calc(100vw-2.5rem))] md:max-w-[min(560px,calc(100vw-2.5rem))]`}
                badgeLabel={c.badgeLabel}
                headline={c.headline}
                description={c.description}
                bullets={c.bullets}
                imageSrc={c.imageSrc}
                imageAlt={c.imageAlt}
                featured={c.featured}
              />
            ))}
          </div>

          <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4 sm:gap-6">
            <button
              type="button"
              onClick={() => scrollByViewport("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-50"
              aria-label="Previous challenge"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <p className={`${fontBody} text-center text-sm text-slate-500`}>
              Scroll to explore all agents
            </p>
            <button
              type="button"
              onClick={() => scrollByViewport("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-50"
              aria-label="Next challenge"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
