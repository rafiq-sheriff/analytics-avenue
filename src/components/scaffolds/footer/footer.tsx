const fontHeading = "font-[family-name:var(--font-heading)]";
const fontBody = "font-[family-name:var(--font-body)]";

const footerColumns = [
  {
    title: "Solutions",
    links: [
      { label: "Data Strategy", href: "#services" },
      { label: "Business Intelligence", href: "#services" },
      { label: "Data Engineering", href: "#services" },
      { label: "Machine Learning", href: "#services" },
      { label: "Generative AI", href: "#services" },
    ],
  },
  {
    title: "Learning Programs",
    links: [
      { label: "Data Analytics Placement Program", href: "#about" },
      { label: "SQL and Power BI", href: "#about" },
      { label: "Career Transition Support", href: "#about" },
      { label: "Internship Tracks", href: "#about" },
      { label: "Corporate Upskilling", href: "#about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Analytics Avenue", href: "#about" },
      { label: "Core Technology", href: "#challenges" },
      { label: "Client Testimonials", href: "#testimonial-title" },
      { label: "FAQs", href: "#faq-title" },
      { label: "Contact Us", href: "#cta" },
    ],
  },
  {
    title: "Social / Community",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "X (Twitter)", href: "#" },
      { label: "Join Our Learning Community", href: "#" },
    ],
  },
] as const;

const Footer = () => {
  return (
    <footer id="cta" className="relative overflow-hidden bg-[#ffffff] px-6 pb-8 pt-10 sm:pt-14">
      <div className="mx-auto w-full max-w-7xl">
        <section className="rounded-[28px] border border-[#1A73E8]/20 bg-gradient-to-br from-[#1A73E8] via-[#5A8EF3] to-[#7F86FF] px-6 py-10 text-center  sm:px-10 sm:py-14">
          <h2
            className={`${fontHeading} text-3xl font-extrabold leading-tight text-white sm:text-5xl`}
          >
            Ready to Build Your Data and AI Advantage?
          </h2>
          <p
            className={`${fontBody} mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base`}
          >
            Partner with Analytics Avenue to upskill teams, deliver real-world
            analytics solutions, and accelerate measurable business outcomes.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#about"
              className={`${fontBody} inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#1A73E8] shadow-lg shadow-white/30 transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A73E8]`}
            >
              Book a Free Strategy Call
            </a>
            <a
              href="#services"
              className={`${fontBody} inline-flex items-center justify-center rounded-xl border border-white/90 px-5 py-3 text-sm font-medium text-white transition hover:text-white focus-visible:outline-none hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white/70`}
            >
              Explore Services
            </a>
          </div>
        </section>

        <div className="relative mt-12 border-t border-slate-200/80 pt-10">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_2.75fr] lg:gap-12">
            <div>
              <p className={`${fontHeading} text-4xl font-black text-[#1A73E8]`}>
                Analytics Avenue
              </p>
              <p className={`${fontBody} mt-4 max-w-sm text-sm leading-relaxed text-slate-600`}>
                AI Business Partner for Ed-Tech and enterprise teams - building
                talent, systems, and solutions for measurable impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className={`${fontHeading} text-sm font-bold text-slate-900`}>
                    {column.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className={`${fontBody} text-xs text-slate-500 transition hover:text-[#1A73E8] sm:text-sm`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-10 flex flex-col gap-3 border-t border-slate-200/80 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
            <p className={fontBody}>
              © {new Date().getFullYear()} Analytics Avenue. All rights reserved.
            </p>
            <div className={`${fontBody} flex items-center gap-5`}>
              <a href="#" className="transition hover:text-[#1A73E8]">
                Terms & Conditions
              </a>
              <a href="#" className="transition hover:text-[#1A73E8]">
                Privacy Policy
              </a>
            </div>
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;