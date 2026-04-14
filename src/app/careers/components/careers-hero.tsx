import { CAREERS_LINKEDIN_URL, CAREERS_YOUTUBE_URL } from "../data";
import CareersHeroServicesCard from "./careers-hero-services-card";

export default function CareersHero() {
  return (
    <section className="aa-section relative overflow-hidden border-b border-slate-100 bg-[var(--aa-surface-soft)] pb-14 pt-10 sm:pb-20 sm:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-24 top-[-140px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(26,115,232,0.28),rgba(26,115,232,0))] blur-3xl" />
        <div className="absolute -right-20 bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),rgba(56,189,248,0))] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_50%_35%,#080808,transparent_72%)]" />
      </div>

      <div className="aa-container relative z-10 px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="max-w-xl">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl">
              <span className="text-[#1C3D76]">Analytics</span> Avenue Careers
            </h1>
            <p className="mt-5 max-w-xl text-base font-semibold  text-[#080808] sm:mt-6 sm:leading-8 sm:text-xl">
              Analytics Avenue is an IT and EdTech organization specializing in advanced analytics, data engineering,
              and AI-driven solutions. We enable enterprise BI, GenAI, predictive analytics, and scalable data
              platforms to drive real business impact.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={CAREERS_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="aa-btn-accent px-6 py-2.5 text-sm"
              >
                Watch video
              </a>
              <a
                href={CAREERS_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="aa-btn-secondary px-6 py-2.5 text-sm"
              >
                Linkedin Profile
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none lg:justify-self-end">
            <CareersHeroServicesCard />
          </div>
        </div>
      </div>
    </section>
  );
}
