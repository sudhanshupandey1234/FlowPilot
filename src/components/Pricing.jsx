import { useState } from "react";
import { Check, Info } from "lucide-react";

const PLANS = [
  {
    name: "Free",
    blurb: "For small teams getting organised.",
    monthly: 0,
    yearly: 0,
    cta: "Start free",
    featured: false,
    features: [
      "Up to 3 projects",
      "Unlimited tasks and subtasks",
      "Board and list views",
      "Up to 5 team members",
      "Basic progress tracking",
    ],
  },
  {
    name: "Pro",
    blurb: "For teams running real projects every week.",
    monthly: 12,
    yearly: 10,
    cta: "Start Pro trial",
    featured: true,
    features: [
      "Unlimited projects and members",
      "Timeline and calendar views",
      "Workflow visibility and dependencies",
      "Smart productivity insights",
      "Priority support",
    ],
  },
  {
    name: "Team",
    blurb: "For organisations that need control and scale.",
    monthly: 20,
    yearly: 17,
    cta: "Talk to us",
    featured: false,
    features: [
      "Everything in Pro",
      "Advanced permissions and roles",
      "Admin controls and audit log",
      "Single sign-on (SSO)",
      "Dedicated success manager",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-heading">
      <div className="wrap">
        <div className="section-head centered">
          <span className="kicker">Pricing</span>
          <h2 id="pricing-heading">Simple pricing, no surprises.</h2>
          <p>
            Start free, upgrade when the work grows. Every paid plan starts
            with a 14-day trial — no card required.
          </p>
          <div className="billing-toggle">
            <span id="billing-label">Monthly</span>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              aria-labelledby="billing-label"
              className="switch"
              onClick={() => setYearly((v) => !v)}
            >
              <span className="knob" aria-hidden="true" />
            </button>
            <span>Yearly <span className="save">Save ~17% — 2 months free</span></span>
          </div>
        </div>

        <div className="plans">
          {PLANS.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <article className={`plan${plan.featured ? " featured" : ""}`} key={plan.name}>
                {plan.featured && <span className="plan-badge">Most popular</span>}
                <h3>{plan.name}</h3>
                <p>{plan.blurb}</p>
                <div className="plan-price">
                  ${price}
                  <small> / user / month</small>
                </div>
                <p className="plan-billed">
                  {price === 0
                    ? "Free forever"
                    : yearly
                      ? `Billed yearly — $${price * 12} per user / year`
                      : "Billed monthly"}
                </p>
                <ul className="check-list">
                  {plan.features.map((f) => (
                    <li key={f}><Check aria-hidden="true" /> {f}</li>
                  ))}
                </ul>
                <a
                  className={`btn ${plan.featured ? "btn-lime" : "btn-ghost"}`}
                  href="#contact"
                >
                  {plan.cta}
                </a>
              </article>
            );
          })}
        </div>

        <p className="pricing-note">
          <Info aria-hidden="true" />
          <span>
            <strong>Proposed demo pricing — illustrative only.</strong> These
            prices are examples for this demonstration website. No payment is
            collected, and no checkout or billing system is connected.
          </span>
        </p>
      </div>
    </section>
  );
}
