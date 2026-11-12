import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Is the Free plan really free?",
    a: "Yes. The Free plan includes up to 3 projects, unlimited tasks and up to 5 team members, with no time limit. You can upgrade to Pro or Team whenever you need more — there's no card required to start, and no payment is collected on this demo site.",
  },
  {
    q: "How is FlowPilot different from a shared spreadsheet or chat app?",
    a: "A spreadsheet can list tasks, and chat can discuss them — but neither keeps the plan, the owner, the deadline and the discussion in one place. FlowPilot connects all four, so progress stays visible and nothing depends on someone remembering to send an update.",
  },
  {
    q: "Can I import work from another tool?",
    a: "Yes. You can import tasks and projects from a CSV file, and FlowPilot keeps your existing structure — project names, assignees and due dates. Imports from other project tools are available on the Team plan.",
  },
  {
    q: "Is my team's data private?",
    a: "Your workspace is private to your team by default. You control who sees each project, and only workspace admins can invite new members. On the Team plan, admins get advanced permissions and an audit log of changes.",
  },
  {
    q: "What happens if I cancel a paid plan?",
    a: "You keep access until the end of the billing period you've already paid for. After that, your workspace moves to the Free plan — your projects and tasks stay intact, and you can export everything at any time.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. FlowPilot runs entirely in the browser — there's nothing to install on your computer or your team's devices. It works on desktop and mobile browsers, and your work syncs automatically.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="faq" id="faq" aria-labelledby="faq-heading">
      <div className="wrap faq-grid">
        <div className="section-head">
          <span className="kicker">FAQ</span>
          <h2 id="faq-heading">Questions, answered plainly.</h2>
          <p>
            The things teams usually ask before they start. Something else on
            your mind? Use the contact form below — a real person reads every
            message.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => {
            const open = openIdx === i;
            return (
              <div className={`faq-item${open ? " open" : ""}`} key={item.q}>
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpenIdx(open ? -1 : i)}
                  >
                    {item.q}
                    <Plus aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq-a"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  hidden={!open}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
