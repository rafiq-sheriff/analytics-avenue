import { CAREERS_LINKEDIN_URL, CAREERS_YOUTUBE_URL } from "../data";
import CareersHeroServicesCard from "./careers-hero-services-card";

export default function CareersHero() {
  return (
    <section className="px-10 py-10 relative overflow-hidden bg-[var(--aa-surface-soft)]">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-24 top-[-140px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(26,115,232,0.28),rgba(26,115,232,0))] blur-3xl" />
        <div className="absolute -right-20 bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),rgba(56,189,248,0))] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_50%_40%,#080808,transparent_75%)]" />
      </div>

      <div className="aa-container relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-xl">
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-extrabold leading-[1.1] text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl">
              <span className="text-[#1C3D76]">Analytics</span> Avenue Careers
            </h1>
            <p className="mt-5 max-w-xl text-base font-semibold  text-[#080808] sm:mt-6 sm:leading-8 sm:text-xl">
              Analytics Avenue is an IT and EdTech organization specializing in advanced analytics, data engineering,
              and AI-driven solutions. We enable enterprise BI, GenAI, predictive analytics, and scalable data
              platforms to drive real business impact.
            </p>
          </div>
          <div className="mt-8 flex min-w-0 flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-3">
            <a
              href={CAREERS_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="aa-btn-accent w-full whitespace-nowrap px-4 py-2.5 text-sm sm:w-auto"
            >
              Watch video
            </a>
            <a
              href={CAREERS_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="aa-btn-secondary w-full whitespace-nowrap px-4 py-2.5 text-sm sm:w-auto"
            >
              Linkedin Profile
            </a>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-xl justify-center pb-10 lg:max-w-2xl lg:justify-end">
          <CareersHeroServicesCard />
        </div>
      </div>
    </section>
  );
}
