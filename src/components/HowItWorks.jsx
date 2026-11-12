import { Compass, LayoutTemplate, Users, ArrowRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: Compass,
    title: "Create your workspace",
    body: "Set up your team in minutes. Add your projects, invite your people, and pick how you want to work — board, list, or timeline.",
    tag: "No setup call needed",
  },
  {
    num: "02",
    icon: LayoutTemplate,
    title: "Plan the work together",
    body: "Break each project into tasks, give every task an owner and a date, and agree on what done looks like — before the work starts, not after.",
    tag: "Templates included",
  },
  {
    num: "03",
    icon: Users,
    title: "Track it, then adjust",
    body: "Progress updates itself as tasks move. When something slips, you see it early, reassign it, and keep the plan honest — no status meeting required.",
    tag: "Visible to everyone",
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="how" aria-labelledby="how-heading">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">How it works</span>
          <h2 id="how-heading">From scattered to sorted in three steps.</h2>
          <p>
            There is no six-week onboarding programme and no consultant to hire.
            Most teams are running their first real project in FlowPilot the
            same afternoon they sign up.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((s) => (
            <article className="step" key={s.num}>
              <span className="step-num" aria-hidden="true">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="step-tag">
                <s.icon aria-hidden="true" /> {s.tag}
              </span>
            </article>
          ))}
        </div>

        <div className="how-cta">
          <p>
            <strong>Start with the Free plan.</strong> Up to 3 projects, your
            whole team, no card required.
          </p>
          <a className="btn btn-lime" href="#contact">
            Get started <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
