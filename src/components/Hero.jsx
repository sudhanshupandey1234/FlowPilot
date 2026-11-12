import { ArrowRight, Check, PlayCircle } from "lucide-react";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-inner">
          <span className="hero-eyebrow">
            <span className="dot" aria-hidden="true" />
            FlowPilot — the calm workspace for busy teams
          </span>
          <h1>
            Every project, every task, <em>moving in the same direction.</em>
          </h1>
          <p className="hero-sub">
            FlowPilot brings your team&rsquo;s projects, tasks and conversations into one
            clear workspace — so less time goes to chasing updates, and more goes to
            the work itself. Less chaos. More momentum.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-lime" href="#contact">
              Start free <ArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href="#how">
              <PlayCircle aria-hidden="true" /> See how it works
            </a>
          </div>
          <div className="hero-note">
            <span><Check aria-hidden="true" /> Free plan, no card required</span>
            <span><Check aria-hidden="true" /> Set up in minutes</span>
            <span><Check aria-hidden="true" /> Cancel anytime</span>
          </div>
        </div>
        <DashboardPreview />
      </div>
    </section>
  );
}
