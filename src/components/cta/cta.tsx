import NewsletterForm from "@/components/scaffolds/footer/newsletter-form";

const fontHeading = "font-[family-name:var(--font-heading)]";
const fontBody = "font-[family-name:var(--font-body)]";

const Cta = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#ffffff] px-4  sm:px-8 sm:py-14"
    >
      <div className="aa-container">
        <div className="rounded-[28px] border border-[#1A73E8]/20 bg-gradient-to-br from-[#1A73E8] via-[#5A8EF3] to-[#7F86FF] px-6 py-10 text-center sm:px-10 sm:py-14">
          <h2
            className={`${fontHeading} text-2xl font-extrabold leading-tight text-[#080808] sm:text-4xl lg:text-5xl`}
          >
            Ready to Build Your Data and AI Advantage?
          </h2>
          <p
            className={`${fontBody} mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base`}
          >
            Partner with Analytics Avenue to upskill teams, deliver real-world
            analytics solutions, and accelerate measurable business outcomes.
          </p>

          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Cta;
