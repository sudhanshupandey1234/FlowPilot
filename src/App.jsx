import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Showcase from "./components/Showcase";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function CapabilityStrip() {
  const items = [
    "Project management",
    "Task organisation",
    "Team collaboration",
    "Progress tracking",
    "Workflow visibility",
    "Smart insights",
  ];
  const row = [...items, ...items];
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        <span>
          {row.map((t, i) => (
            <span key={i}>
              {t} <i>✦</i>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export default function App() {
  // Restrained scroll-reveal: each main section fades in once when it
  // enters the viewport. A safety timeout reveals everything in case
  // IntersectionObserver never fires; reduced-motion users (see CSS)
  // never get the hidden state at all.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("#main > section"));
    sections.forEach((el) => el.classList.add("reveal"));
    if (!("IntersectionObserver" in window)) {
      sections.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    sections.forEach((el) => io.observe(el));
    const safety = setTimeout(
      () => sections.forEach((el) => el.classList.add("visible")),
      1500
    );
    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <CapabilityStrip />
        <Overview />
        <Features />
        <HowItWorks />
        <Showcase />
        <Pricing />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
