import type { Metadata } from "next";
import Footer from "@/components/scaffolds/footer/footer";
import Navbar from "@/components/scaffolds/navbar/navbar";
import ContactForm from "./components/contact-form";
import ContactIntro from "./components/contact-intro";

export const metadata: Metadata = {
  title: "Contact Us — Analytics Avenue",
  description:
    "Get in touch with Analytics Avenue. Delhi-based team for analytics, data engineering, and AI solutions. Phone, email, and message form.",
};

const CONTACT_PHONE_DISPLAY = "7835901173";
const CONTACT_EMAIL = "analyticsavenue@example.com";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--aa-surface-soft)] pb-28 sm:pb-24">
      <a
        href="#contact-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:shadow-lg"
      >
        Skip to contact content
      </a>
      <Navbar />

      <main id="contact-main">
        <ContactIntro
          phoneDisplay={CONTACT_PHONE_DISPLAY}
          phoneTel={`tel:+91${CONTACT_PHONE_DISPLAY}`}
          email={CONTACT_EMAIL}
        />

        <section
          className="aa-section bg-[var(--aa-surface-soft)] pb-12 pt-10 sm:pb-16 sm:pt-12"
          aria-labelledby="send-message-heading"
        >
          <div className="aa-container px-4 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <h2
                id="send-message-heading"
                className="font-[family-name:var(--font-heading)] text-xl font-bold text-slate-900"
              >
                Send Message
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
