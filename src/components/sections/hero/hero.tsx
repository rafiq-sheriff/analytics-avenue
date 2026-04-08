import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#f5f7fb] px-6 py-14 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-xl">
          <div className="mb-10 flex items-center gap-3 text-base font-semibold text-slate-900 sm:text-xl">
            <span >AI Business Partner For</span>
            <span className="text-[#1A73E8]">Ed-Tech</span>
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.08] text-slate-900 sm:text-6xl lg:text-5xl">
            AI Workforce for
            <br />
            Sales and Marketing
          </h1>

          <h2 className="mt-12 text-4xl font-bold leading-tight text-slate-900 sm:text-4xl">
            <span className="text-[#1A73E8]">AI agents</span> in one platform
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-xl">
            So that your business runs like an enterprise.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1A73E8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1A73E8]/40 transition hover:bg-[#155ec1]"
            >
              Get Started Free
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M8.5 3.5L12 7.5L8.5 11.5M3 7.5H12"
                  stroke="white"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-[#1A73E8]/25 bg-white px-6 py-3.5 text-sm font-semibold text-[#1A73E8] transition hover:bg-[#1A73E8]/5"
            >
              Explore Services
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M8.5 3.5L12 7.5L8.5 11.5M3 7.5H12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="-space-x-2">
              {["RK", "AM", "PS", "SJ"].map((name, index) => (
                <span
                  key={name}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white ${
                    index === 0
                      ? "bg-[#1A73E8]"
                      : index === 1
                        ? "bg-sky-500"
                        : index === 2
                          ? "bg-indigo-500"
                          : "bg-violet-500"
                  }`}
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="text-sm leading-6 text-slate-600">
              <strong className="font-semibold text-slate-800">
                500+ students placed
              </strong>{" "}
              in top data roles
              <br />
              4.9/5 average client satisfaction score
            </p>
          </div>
        </div>
      

        <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl">
          <div className="overflow-hidden rounded-3xl border border-[#1A73E8]/20 bg-white p-2 shadow-xl shadow-slate-300/40">
            <Image
              src="/assets/images/Subramani.jpg"
              alt="Subramani"
              width={768}
              height={1024}
              priority
              className="h-[500px] w-full rounded-[20px] object-cover object-top"
            />
          </div>

          <div className="kpi-float absolute -left-4 bottom-6 hidden w-56 items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:flex">
            <div className="rounded-full bg-[#1A73E8]/10 p-2.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="#1A73E8"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800">AI Pipeline Active</p>
              <p className="text-[11px] text-slate-500">Processing 2.4M rows/sec</p>
            </div>
          </div>

          <div className="kpi-float kpi-float-delay absolute -right-4 top-6 hidden w-44 items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:flex">
            <div className="rounded-full bg-emerald-50 p-2.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="22 7 13.5 15.5 8.5 10.5 2 17"
                  stroke="#16A34A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="16 7 22 7 22 13"
                  stroke="#16A34A"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-600">+38% ROI</p>
              <p className="text-[11px] text-slate-500">This quarter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;