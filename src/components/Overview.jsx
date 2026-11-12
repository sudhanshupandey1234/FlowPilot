const PAINS = [
  {
    num: "01",
    title: "Work lives in too many places",
    body: "The plan is in a doc, the deadline is in a chat thread, and the file is in someone's inbox. Nobody can see the whole picture — so everyone asks for a status update instead of doing the work.",
  },
  {
    num: "02",
    title: "Ownership is a guess",
    body: "When a task has no clear owner and no clear deadline, it drifts. It gets picked up late, handed over twice, or quietly forgotten until the day it was due.",
  },
  {
    num: "03",
    title: "Meetings replace momentum",
    body: "Teams hold a weekly meeting to find out what happened last week. That meeting exists because the work itself was invisible — and it still leaves no written record of what was decided.",
  },
];

export default function Overview() {
  return (
    <section className="overview" id="product" aria-labelledby="overview-heading">
      <div className="wrap overview-grid">
        <div className="overview-sticky">
          <span className="kicker">The problem</span>
          <h2 id="overview-heading">
            The problem isn&rsquo;t effort. It&rsquo;s scattered work.
          </h2>
          <p>
            Most teams don&rsquo;t fail because people don&rsquo;t work hard enough. They
            stall because the work itself is hard to see.
          </p>
        </div>

        <div>
          <p className="overview-lede">
            FlowPilot exists for the team that is busy all day and still unsure,
            at 5pm, what actually moved forward.
          </p>
          {PAINS.map((p) => (
            <article className="pain" key={p.num}>
              <span className="pain-num" aria-hidden="true">{p.num}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </article>
          ))}

          <div className="before-after">
            <div className="ba-before">
              <h4>Before — scattered</h4>
              <ul>
                <li>Five tools, three chat threads, one spreadsheet</li>
                <li>&ldquo;Who&rsquo;s doing this?&rdquo; asked daily</li>
                <li>Status meetings to find out the status</li>
              </ul>
            </div>
            <div className="ba-after">
              <h4>After — FlowPilot</h4>
              <ul>
                <li>One workspace for plan, tasks and discussion</li>
                <li>Every task has an owner and a date</li>
                <li>Progress is visible without asking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
