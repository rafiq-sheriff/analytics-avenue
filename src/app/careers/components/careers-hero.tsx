import Image from "next/image";
import { CAREERS_LINKEDIN_URL, CAREERS_YOUTUBE_URL } from "../data";

export default function CareersHero() {
  return (
    <section className="aa-section relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#f7fbff] to-white pb-14 pt-10 sm:pb-20 sm:pt-14">
      <div className="aa-container px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="aa-kicker mb-3">Careers</p>
            <h1 className="aa-title max-w-xl">Analytics Avenue Careers</h1>
            <h3 className="mt-5 text-lg font-semibold leading-snug text-slate-800 sm:text-xl">
              Analytics Avenue is an IT and EdTech organization specializing in advanced analytics, data engineering,
              and AI-driven solutions. We enable enterprise BI, GenAI, predictive analytics, and scalable data
              platforms to drive real business impact.
            </h3>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={CAREERS_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="aa-btn-primary px-6 py-2.5 text-sm shadow-md shadow-blue-300/40"
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
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[var(--aa-shadow-lg)]">
              <Image
                src="/assets/images/about/image.png"
                alt="Analytics Avenue Team"
                width={1073}
                height={1284}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
