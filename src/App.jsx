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
