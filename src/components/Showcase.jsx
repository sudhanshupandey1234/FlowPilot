import { useState } from "react";
import {
  KanbanSquare,
  GanttChart,
  LineChart,
  Info,
  Check,
} from "lucide-react";

const TABS = [
  {
    id: "board",
    label: "Board view",
    icon: KanbanSquare,
    title: "Drag, drop, done.",
    body: "The board is the daily view: what's being worked on, what's stuck, what's finished. Move a card and the whole team sees it — no update message needed.",
    note: "Works for sprints, launches, and everyday team work.",
  },
  {
    id: "timeline",
    label: "Timeline view",
    icon: GanttChart,
    title: "The plan, laid out in time.",
    body: "The timeline shows phases, dependencies and deadlines on one horizontal view. When a date moves, you can see exactly what else moves with it.",
    note: "Best for launches and projects with hard dates.",
  },
  {
    id: "insights",
    label: "Insights view",
    icon: LineChart,
    title: "A weekly picture, in one glance.",
    body: "Insights turns completed work into a simple summary: what the team finished, where time went, and what's at risk — ready to share in a stand-up or a report.",
    note: "Summaries are generated from real work logged in FlowPilot.",
  },
];

export default function Showcase() {
  const [active, setActive] = useState("board");
  const tab = TABS.find((t) => t.id === active);

  // Roving tabindex + arrow-key navigation, per the ARIA tabs pattern.
  const onTabKeyDown = (e, idx) => {
    let next = null;
    if (e.key === "ArrowRight") next = (idx + 1) % TABS.length;
    else if (e.key === "ArrowLeft") next = (idx - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(TABS[next].id);
    document.getElementById(`showcase-tab-${TABS[next].id}`)?.focus();
  };

  return (
    <section className="showcase" id="showcase" aria-labelledby="showcase-heading">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Product showcase</span>
          <h2 id="showcase-heading">One plan, three ways to see it.</h2>
          <p>
            The same project, viewed the way each moment needs. Switch views
            without losing data — a card on the board is the same task on the
            timeline.
          </p>
        </div>

        <div className="showcase-tabs" role="tablist" aria-label="Product views">
          {TABS.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`showcase-tab-${t.id}`}
              aria-selected={active === t.id}
              aria-controls="showcase-panel"
              tabIndex={active === t.id ? 0 : -1}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onTabKeyDown(e, idx)}
            >
              <t.icon aria-hidden="true" /> {t.label}
            </button>
          ))}
        </div>

        <div
          className="showcase-panel"
          role="tabpanel"
          id="showcase-panel"
          aria-labelledby={`showcase-tab-${tab.id}`}
        >
          <div>
            <h3>{tab.title}</h3>
            <p>{tab.body}</p>
            <p className="shot-note">
              <Info aria-hidden="true" /> {tab.note}
            </p>
          </div>

          {active === "board" && (
            <div className="shot">
              <div className="shot-bar"><KanbanSquare aria-hidden="true" /> Website relaunch — Board</div>
              <div className="shot-body">
                <div className="mini-board">
                  <div className="mini-col">
                    <h5>Backlog <span>4</span></h5>
                    <div className="mini-card">Write case study<small>Priya</small></div>
                    <div className="mini-card">Update help centre<small>Jonas</small></div>
                  </div>
                  <div className="mini-col">
                    <h5>In progress <span>3</span></h5>
                    <div className="mini-card">Rebuild pricing page<small>Jonas · Due Fri</small></div>
                    <div className="mini-card">Record product tour<small>Amara · Due Fri</small></div>
                  </div>
                  <div className="mini-col">
                    <h5>Done <span>5</span></h5>
                    <div className="mini-card done">Homepage copy<small>Sara</small></div>
                    <div className="mini-card done">Brand assets<small>Amara</small></div>
                    <div className="mini-card done">Analytics setup<small>Theo</small></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {active === "timeline" && (
            <div className="shot timeline-shot">
              <div className="shot-bar"><GanttChart aria-hidden="true" /> Website relaunch — Timeline · November</div>
              <div className="shot-body">
                <div className="gantt-row"><span>Research</span><div className="gantt-track"><span className="gantt-bar grey" style={{ left: "2%", width: "24%" }}>Done</span></div></div>
                <div className="gantt-row"><span>Design</span><div className="gantt-track"><span className="gantt-bar navy" style={{ left: "22%", width: "36%" }}>In progress</span></div></div>
                <div className="gantt-row"><span>Development</span><div className="gantt-track"><span className="gantt-bar lime" style={{ left: "54%", width: "30%" }}>Nov 17 – 24</span></div></div>
                <div className="gantt-row"><span>QA &amp; launch</span><div className="gantt-track"><span className="gantt-bar navy" style={{ left: "82%", width: "16%" }}>Nov 28</span></div></div>
                <div className="gantt-scale"><span>Nov 3</span><span>Nov 10</span><span>Nov 17</span><span>Nov 24</span></div>
              </div>
            </div>
          )}

          {active === "insights" && (
            <div className="shot insight-shot">
              <div className="shot-bar"><LineChart aria-hidden="true" /> Team insights — this week</div>
              <div className="shot-body">
                <div className="kpi-row">
                  <div className="kpi"><small>Completed</small><strong>18</strong><span>tasks this week</span></div>
                  <div className="kpi"><small>On time</small><strong>92%</strong><span>of due tasks</span></div>
                  <div className="kpi"><small>At risk</small><strong>2</strong><span className="warn">tasks stalled</span></div>
                </div>
                <div className="bar-row"><span>Design</span><span className="bar"><i className="lime" style={{ width: "88%" }} /></span><b>88%</b></div>
                <div className="bar-row"><span>Development</span><span className="bar"><i style={{ width: "64%" }} /></span><b>64%</b></div>
                <div className="bar-row"><span>Content</span><span className="bar"><i style={{ width: "52%" }} /></span><b>52%</b></div>
                <p className="shot-note"><Check aria-hidden="true" /> Two tasks flagged as stalled — both are waiting on a review, not on work.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
