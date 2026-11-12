import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  CalendarDays,
  BarChart3,
  Settings,
  Plus,
  Check,
  Lock,
} from "lucide-react";

const TASKS = [
  {
    title: "Finalise homepage copy for the relaunch",
    meta: "Website relaunch · Due today · Amara",
    tag: "In progress",
    tagClass: "tag-amber",
    done: false,
  },
  {
    title: "Review onboarding flow wireframes",
    meta: "Mobile app · Due tomorrow · Jonas",
    tag: "In progress",
    tagClass: "tag-amber",
    done: false,
  },
  {
    title: "Approve Q4 marketing budget",
    meta: "Growth · Completed 2h ago · Priya",
    tag: "Done",
    tagClass: "tag-green",
    done: true,
  },
  {
    title: "Fix checkout error on Safari",
    meta: "Platform · Due Friday · Theo",
    tag: "Backlog",
    tagClass: "tag-grey",
    done: false,
  },
];

const ACTIVITY = [
  { id: "a1", initials: "AR", cls: "av-plum", text: <><strong>Amara</strong> moved &ldquo;Pricing page&rdquo; to In review</>, time: "12 min ago" },
  { id: "a2", initials: "JK", cls: "av-teal", text: <><strong>Jonas</strong> commented on &ldquo;Onboarding flow&rdquo;</>, time: "38 min ago" },
  { id: "a3", initials: "PS", cls: "av-amber", text: <><strong>Priya</strong> completed 3 tasks in Growth</>, time: "1 h ago" },
];

export default function DashboardPreview() {
  return (
    <div className="preview-shell">
      <div
        className="app-window"
        role="img"
        aria-label="Preview of the FlowPilot dashboard: sidebar navigation, project progress, a task list and recent team activity."
      >
        <div className="app-titlebar">
          <span className="traffic" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="addr">
            <Lock aria-hidden="true" /> app.flowpilot.demo/dashboard
          </span>
        </div>

        <div className="app-body">
          <aside className="app-sidebar" aria-hidden="true">
            <div className="side-brand">
              <span className="wordmark-mark">
                <LayoutDashboard />
              </span>
              FlowPilot
            </div>
            <a className="side-item active"><LayoutDashboard /> Dashboard</a>
            <a className="side-item"><FolderKanban /> Projects</a>
            <a className="side-item"><CheckSquare /> My tasks <span className="count">6</span></a>
            <a className="side-item"><CalendarDays /> Calendar</a>
            <a className="side-item"><BarChart3 /> Reports</a>
            <div className="side-label">Projects</div>
            <div className="side-project"><i style={{ background: "#9be515" }} /> Website relaunch</div>
            <div className="side-project"><i style={{ background: "#60a5fa" }} /> Mobile app</div>
            <div className="side-project"><i style={{ background: "#f59e0b" }} /> Growth</div>
            <a className="side-item"><Settings /> Settings</a>
            <div className="side-user">
              <span className="avatar av-lime">SK</span>
              <span>Sara Khan<small>Product lead</small></span>
            </div>
          </aside>

          <div className="app-main">
            <div className="app-main-head">
              <div>
                <h3>Website relaunch — Q4</h3>
                <p>Thursday, 12 November · 8 people on this project</p>
              </div>
              <button type="button" className="btn btn-lime" tabIndex={-1}>
                <Plus aria-hidden="true" /> New task
              </button>
            </div>

            <div className="kpi-row">
              <div className="kpi"><small>Tasks done</small><strong>18 / 24</strong><span>▲ 6 this week</span></div>
              <div className="kpi"><small>On track</small><strong>92%</strong><span>On schedule</span></div>
              <div className="kpi"><small>Due this week</small><strong>5</strong><span className="warn">2 due today</span></div>
              <div className="kpi"><small>Team load</small><strong>Balanced</strong><span>No one overloaded</span></div>
            </div>

            <div className="dash-grid">
              <div className="panel">
                <h4>Today&rsquo;s priorities</h4>
                <p className="panel-sub">Sorted by deadline and project impact.</p>
                {TASKS.map((t) => (
                  <div key={t.title} className={`task-row${t.done ? " done" : ""}`}>
                    <span className={`checkbox${t.done ? " done" : ""}`} aria-hidden="true">
                      {t.done && <Check />}
                    </span>
                    <span>
                      <span className="task-title">{t.title}</span>
                      <span className="task-meta" style={{ display: "block" }}>{t.meta}</span>
                    </span>
                    <span className={`tag ${t.tagClass}`}>{t.tag}</span>
                  </div>
                ))}
                <div className="progress-line" aria-hidden="true">
                  <i style={{ width: "75%" }} />
                </div>
              </div>

              <div className="panel">
                <h4>Team activity</h4>
                <p className="panel-sub">Latest updates, in one place.</p>
                {ACTIVITY.map((a) => (
                  <div key={a.id} className="activity-row">
                    <span className={`avatar ${a.cls}`}>{a.initials}</span>
                    <div>
                      <p>{a.text}</p>
                      <small>{a.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="preview-caption">
        <strong>Product preview.</strong> Illustrative workspace data shown to demonstrate
        the interface — not a real team&rsquo;s work.
      </p>
    </div>
  );
}
