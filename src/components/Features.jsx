import {
  FolderKanban,
  ListTodo,
  MessagesSquare,
  TrendingUp,
  Eye,
  Sparkles,
  Check,
  ThumbsUp,
} from "lucide-react";

function FeatureHead({ num, icon: Icon, title, children, points }) {
  return (
    <div className="feature-copy">
      <div className="feature-icon" aria-hidden="true"><Icon /></div>
      <span className="f-num">{num}</span>
      <h3>{title}</h3>
      <p>{children}</p>
      <ul>
        {points.map((p) => (
          <li key={p}><Check aria-hidden="true" /> {p}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features" id="features" aria-labelledby="features-heading">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Features</span>
          <h2 id="features-heading">Six tools, one calm workspace.</h2>
          <p>
            Each part of FlowPilot does one job well — and each one reads from the
            same plan, so nothing has to be entered twice.
          </p>
        </div>

        {/* 01 — Project management: mini board */}
        <div className="feature-row">
          <FeatureHead
            num="01 — Project management"
            icon={FolderKanban}
            title="Projects with a beginning, a middle, and a finish line."
            points={[
              "Milestones, phases and deadlines in one plan",
              "One home for files, notes and decisions",
              "See every active project side by side",
            ]}
          >
            A project in FlowPilot is more than a list of tasks. It holds the
            goal, the timeline and the people — so a new teammate can open it
            and understand it in minutes.
          </FeatureHead>
          <div className="feature-visual" aria-label="Example project board with three columns">
            <div className="mini-board">
              <div className="mini-col">
                <h5>To do <span>3</span></h5>
                <div className="mini-card">Draft launch announcement<small>Due Fri · Amara</small></div>
                <div className="mini-card">Book demo recordings<small>Due Mon · Theo</small></div>
              </div>
              <div className="mini-col">
                <h5>Doing <span>2</span></h5>
                <div className="mini-card">Rebuild pricing page<small>In review · Jonas</small></div>
                <div className="mini-card">Fix mobile nav overlap<small>Today · Priya</small></div>
              </div>
              <div className="mini-col">
                <h5>Done <span>2</span></h5>
                <div className="mini-card done">Homepage copy approved<small>Done · Sara</small></div>
                <div className="mini-card done">Brand assets exported<small>Done · Amara</small></div>
              </div>
            </div>
          </div>
        </div>

        {/* 02 — Task organisation: ranked list */}
        <div className="feature-row flip">
          <FeatureHead
            num="02 — Task organisation"
            icon={ListTodo}
            title="Your day, already sorted."
            points={[
              "Priorities, due dates and checklists built in",
              "Sort by what's due, what's blocked, or who owns it",
              "Subtasks keep big jobs from hiding small ones",
            ]}
          >
            Your tasks arrive already ordered by what matters most. No more
            rewriting the same to-do list every morning, and no more guessing
            what to do first.
          </FeatureHead>
          <div className="feature-visual" aria-label="Example prioritised task list">
            <div className="priority-row"><span className="rank">1</span> Approve homepage copy <span className="who"><span className="tag tag-amber">Today</span><small>Sara</small></span></div>
            <div className="priority-row"><span className="rank">2</span> Send investor update draft <span className="who"><span className="tag tag-amber">Today</span><small>Priya</small></span></div>
            <div className="priority-row"><span className="rank">3</span> Review onboarding wireframes <span className="who"><span className="tag tag-grey">Tomorrow</span><small>Jonas</small></span></div>
            <div className="priority-row"><span className="rank">4</span> Plan next sprint backlog <span className="who"><span className="tag tag-grey">Friday</span><small>Theo</small></span></div>
            <div className="priority-row"><span className="rank">5</span> Archive finished Q3 project <span className="who"><span className="tag tag-green">Done</span><small>Amara</small></span></div>
          </div>
        </div>

        {/* 03 — Collaboration: comment thread */}
        <div className="feature-row">
          <FeatureHead
            num="03 — Team collaboration"
            icon={MessagesSquare}
            title="Discuss the work where the work lives."
            points={[
              "Comments and mentions on the task itself",
              "Decisions stay attached to the work they concern",
              "No more digging through chat history for context",
            ]}
          >
            When the conversation happens on the task, the context travels with
            it. A teammate joining late can read the thread and catch up —
            without a call.
          </FeatureHead>
          <div className="feature-visual" aria-label="Example comment thread on a task">
            <div className="comment">
              <span className="avatar av-plum">AR</span>
              <div className="comment-body">
                <div className="c-head"><strong>Amara</strong> · 2 h ago on &ldquo;Pricing page&rdquo;</div>
                <p>Swapped the headline — the old one promised a feature we haven&rsquo;t shipped yet. New copy is in the doc.</p>
                <span className="c-action"><ThumbsUp aria-hidden="true" /> 3 teammates agree</span>
              </div>
            </div>
            <div className="comment">
              <span className="avatar av-teal">JK</span>
              <div className="comment-body">
                <div className="c-head"><strong>Jonas</strong> · 45 min ago</div>
                <p>Looks good. I&rsquo;ll update the screenshots to match before we publish.</p>
              </div>
            </div>
            <div className="comment">
              <span className="avatar av-lime">SK</span>
              <div className="comment-body">
                <div className="c-head"><strong>Sara</strong> · just now</div>
                <p>Moving this to In review — thanks both. Publishing Friday if nobody objects.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 04 — Progress tracking: big stat + bars */}
        <div className="feature-row flip">
          <FeatureHead
            num="04 — Progress tracking"
            icon={TrendingUp}
            title="Know where things stand. Without asking."
            points={[
              "Live progress on every project, updated as work happens",
              "Completion by person, phase or milestone",
              "Spot slipping work before the deadline does",
            ]}
          >
            Progress in FlowPilot is a by-product of doing the work, not a
            report someone has to write. Check a task off, and the project
            moves.
          </FeatureHead>
          <div className="feature-visual" aria-label="Example project progress summary">
            <div className="big-stat"><strong>75%</strong><span>▲ on track for Friday</span></div>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "6px 0 12px" }}>
              Website relaunch — 18 of 24 tasks complete
            </p>
            <div className="bar-row"><span>Design</span><span className="bar"><i className="lime" style={{ width: "90%" }} /></span><b>90%</b></div>
            <div className="bar-row"><span>Development</span><span className="bar"><i style={{ width: "70%" }} /></span><b>70%</b></div>
            <div className="bar-row"><span>Content</span><span className="bar"><i style={{ width: "62%" }} /></span><b>62%</b></div>
            <div className="bar-row"><span>Launch prep</span><span className="bar"><i style={{ width: "40%" }} /></span><b>40%</b></div>
          </div>
        </div>

        {/* 05 — Workflow visibility: gantt */}
        <div className="feature-row">
          <FeatureHead
            num="05 — Workflow visibility"
            icon={Eye}
            title="See the whole timeline, not just today."
            points={[
              "Timeline view shows how phases overlap",
              "Dependencies make blockers obvious early",
              "One shared calendar for every project deadline",
            ]}
          >
            A timeline shows what a task list can&rsquo;t: what depends on what,
            and what happens if one thing slips. Teams plan around reality
            instead of discovering it late.
          </FeatureHead>
          <div className="feature-visual" aria-label="Example project timeline">
            <div className="gantt-row"><span>Research</span><div className="gantt-track"><span className="gantt-bar grey" style={{ left: "2%", width: "26%" }}>Done</span></div></div>
            <div className="gantt-row"><span>Design</span><div className="gantt-track"><span className="gantt-bar navy" style={{ left: "24%", width: "38%" }}>In progress</span></div></div>
            <div className="gantt-row"><span>Development</span><div className="gantt-track"><span className="gantt-bar lime" style={{ left: "52%", width: "34%" }}>Starts Nov 17</span></div></div>
            <div className="gantt-row"><span>Launch</span><div className="gantt-track"><span className="gantt-bar navy" style={{ left: "84%", width: "14%" }}>Nov 28</span></div></div>
            <div className="gantt-scale"><span>Mon 3</span><span>Mon 10</span><span>Mon 17</span><span>Mon 24</span></div>
          </div>
        </div>

        {/* 06 — Insights: insight rows + sparkline */}
        <div className="feature-row flip">
          <FeatureHead
            num="06 — Smart productivity insights"
            icon={Sparkles}
            title="Small signals, before they become big problems."
            points={[
              "Workload view shows who is stretched and who has room",
              "Stale tasks surface automatically — nothing rots quietly",
              "A weekly digest, not another dashboard to babysit",
            ]}
          >
            FlowPilot watches for the patterns people miss when they&rsquo;re busy:
            the task that hasn&rsquo;t moved in a week, the teammate carrying too
            much, the project quietly drifting. It flags them early, plainly,
            and without judgement.
          </FeatureHead>
          <div className="feature-visual" aria-label="Example productivity insights">
            <div className="insight-row">
              <span className="insight-ico" aria-hidden="true"><TrendingUp /></span>
              <div><p><strong>Focus time is up.</strong></p><small>The team completed 18 tasks this week — the busiest yet.</small></div>
              <span className="spark" aria-hidden="true"><i style={{ height: "35%" }} /><i style={{ height: "55%" }} /><i style={{ height: "45%" }} /><i style={{ height: "70%" }} /><i style={{ height: "100%" }} /></span>
            </div>
            <div className="insight-row">
              <span className="insight-ico" aria-hidden="true"><Eye /></span>
              <div><p><strong>2 tasks haven&rsquo;t moved in 7 days.</strong></p><small>&ldquo;Legal review&rdquo; and &ldquo;Vendor contract&rdquo; may be blocked.</small></div>
            </div>
            <div className="insight-row">
              <span className="insight-ico" aria-hidden="true"><ListTodo /></span>
              <div><p><strong>Workload is uneven.</strong></p><small>Jonas has 9 open tasks; Amara has 2. Consider rebalancing.</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
