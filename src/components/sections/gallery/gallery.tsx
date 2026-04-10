"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

type GallerySlide = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

type GalleryThumbnailLoopProps = {
  slides: GallerySlide[];
  speed?: number;
  thumbSize?: number;
  gap?: number;
  hoverSpeed?: number;
  selectedIndex: number;
  onSelect: (index: number) => void;
  ariaLabel?: string;
};

/** Thumbnail strip: same infinite scroll as `technology.tsx` LogoLoop; default direction = right-to-left. */
const GalleryThumbnailLoop = ({
  slides,
  speed = 72,
  thumbSize = 80,
  gap = 14,
  hoverSpeed = 0,
  selectedIndex,
  onSelect,
  ariaLabel = "Gallery thumbnails",
}: GalleryThumbnailLoopProps) => {
  const isPauseOnHover = hoverSpeed === 0;
  const estimatedThumbWidth = thumbSize;
  const trackWidth =
    slides.length * estimatedThumbWidth + (slides.length - 1) * gap;
  const durationSeconds = Math.max(trackWidth / Math.max(speed, 1), 12);
  const hoverDurationSeconds =
    hoverSpeed <= 0
      ? durationSeconds
      : Math.max(trackWidth / Math.max(hoverSpeed, 1), durationSeconds);

  return (
    <div
      className={`tech-logo-loop group relative w-full overflow-hidden ${
        isPauseOnHover ? "tech-logo-loop--pause-on-hover" : "tech-logo-loop--slow-on-hover"
      }`}
      aria-label={ariaLabel}
    >
      <div
        className="tech-logo-track flex w-max items-center"
        style={
          {
            "--logo-gap": `${gap}px`,
            "--loop-duration": `${durationSeconds}s`,
            "--hover-loop-duration": `${hoverDurationSeconds}s`,
          } as CSSProperties
        }
      >
        {[...slides, ...slides].map((slide, index) => {
          const logicalIndex = index % slides.length;
          const isActive = logicalIndex === selectedIndex;
          return (
            <button
              key={`${slide.id}-${index}`}
              type="button"
              onClick={() => onSelect(logicalIndex)}
              className={`relative shrink-0 overflow-hidden rounded-xl border-2 transition-[transform,box-shadow,ring] duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--aa-primary)] ${
                isActive
                  ? "border-[var(--aa-primary)] ring-2 ring-[var(--aa-primary)]/35 ring-offset-2 ring-offset-[var(--aa-surface-soft)]"
                  : "border-transparent opacity-90 hover:opacity-100"
              }`}
              style={{ width: thumbSize, height: thumbSize }}
              aria-current={isActive ? "true" : undefined}
              aria-label={`Show slide: ${slide.title}`}
            >
              <Image
                src={slide.imageSrc}
                alt=""
                width={thumbSize}
                height={thumbSize}
                className="h-full w-full object-cover"
                sizes={`${thumbSize}px`}
              />
            </button>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-20" />
    </div>
  );
};

const gallerySlides: GallerySlide[] = [
  {
    id: "storytelling",
    title: "Insights That Move Decisions",
    description:
      "Explore outcomes from analytics engagements where dashboards, models, and clear narratives turned raw data into actions your stakeholders can trust.",
    imageSrc: "/assets/images/about/image.png",
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    description:
      "From patient flow to operational efficiency, see how teams use BI and AI to improve care delivery while keeping compliance and traceability front and center.",
    imageSrc: "/assets/images/challenges/healthcare.png",
  },
  {
    id: "energy",
    title: "Energy & Sustainability",
    description:
      "Monitor performance, forecast demand, and report on sustainability metrics with pipelines and visuals built for complex, real-world operations data.",
    imageSrc: "/assets/images/challenges/solar.png",
  },
  {
    id: "logistics",
    title: "Logistics & Mobility",
    description:
      "Optimize routes, capacity, and costs using integrated data platforms—so operations teams see one version of the truth across regions and partners.",
    imageSrc: "/assets/images/challenges/transport.png",
  },
  {
    id: "realestate",
    title: "Real Estate & PropTech",
    description:
      "Blend market, portfolio, and customer signals into executive-ready views that support pricing, investment, and experience decisions.",
    imageSrc: "/assets/images/challenges/realestate.png",
  },
  {
    id: "marketing",
    title: "Marketing & Growth Analytics",
    description:
      "Connect campaigns to revenue with attribution, experimentation, and reporting that marketing and finance can align on—without spreadsheet chaos.",
    imageSrc: "/assets/images/challenges/marketing.png",
  },
];

const fontHeading = "font-[family-name:var(--font-heading)]";
const fontBody = "font-[family-name:var(--font-body)]";
const primary = "var(--aa-primary)";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const autoplay = window.setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % gallerySlides.length);
    }, 3000);

    return () => window.clearInterval(autoplay);
  }, []);

  const active = gallerySlides[selectedIndex] ?? gallerySlides[0];

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="aa-section bg-[var(--aa-surface-soft)] py-8 sm:py-10 bg-white rounded-3xl "
    >
      <div className="aa-container">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0 self-start">
            <h2
              id="gallery-title"
              className={`${fontHeading} text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem]`}
            >
              Captured{" "}
              <span
                className="rounded-sm px-2 py-0.5 text-white"
                style={{ backgroundColor: primary }}
              >
                Moments
              </span>
            </h2>
            <p
              className={`${fontBody} mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg`}
            >
              Every image tells a story - of learning, growth, and the people behind our journey.
            </p>
            <a
              href="#cta"
              className={`${fontBody} aa-btn-primary mt-8 inline-flex rounded-full px-8 text-[0.9375rem] font-semibold shadow-[0_14px_34px_-18px_rgba(26,115,232,0.65)]`}
            >
              Contact Sales
            </a>
          </div>

          <div className="min-w-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-[var(--aa-shadow-md)] ring-1 ring-slate-200/80">
              <Image
                key={active.id}
                src={active.imageSrc}
                alt={active.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority={selectedIndex === 0}
              />
            </div>

            <div className="mt-4">
              {reduceMotion ? (
                <div className="flex flex-wrap gap-3" aria-label="Gallery thumbnails">
                  {gallerySlides.map((slide, index) => {
                    const isActive = index === selectedIndex;
                    return (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => setSelectedIndex(index)}
                        className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-[transform,box-shadow] duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--aa-primary)] ${
                          isActive
                            ? "border-[var(--aa-primary)] ring-2 ring-[var(--aa-primary)]/35 ring-offset-2 ring-offset-[var(--aa-surface-soft)]"
                            : "border-transparent opacity-90 hover:opacity-100"
                        }`}
                        aria-current={isActive ? "true" : undefined}
                        aria-label={`Show slide: ${slide.title}`}
                      >
                        <Image
                          src={slide.imageSrc}
                          alt=""
                          width={84}
                          height={84}
                          className="h-full w-full object-cover"
                          sizes="84px"
                        />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <GalleryThumbnailLoop
                  slides={gallerySlides}
                  speed={72}
                  hoverSpeed={0}
                  thumbSize={80}
                  gap={14}
                  selectedIndex={selectedIndex}
                  onSelect={setSelectedIndex}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
