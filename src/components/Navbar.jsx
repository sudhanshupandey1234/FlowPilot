import { useEffect, useState } from "react";
import { Compass, Menu, X, Info } from "lucide-react";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState(false);

  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(false), 6000);
    return () => clearTimeout(t);
  }, [notice]);

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <a className="wordmark" href="#top" aria-label="FlowPilot — back to top">
            <span className="wordmark-mark" aria-hidden="true">
              <Compass />
            </span>
            FlowPilot
          </a>

          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button type="button" className="btn-signin" onClick={() => setNotice(true)}>
              Sign in
            </button>
            <a className="btn btn-primary" href="#contact">
              Get started
            </a>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-menu"
          className={`mobile-menu${open ? " open" : ""}`}
          aria-label="Mobile"
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setOpen(false);
              setNotice(true);
            }}
          >
            Sign in
          </button>
          <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>
            Get started
          </a>
        </nav>
      </header>

      {notice && (
        <div className="demo-toast" role="status">
          <Info aria-hidden="true" />
          <span>
            <strong>Sign-in isn&rsquo;t available in this demo.</strong> FlowPilot is a
            front-end demo — there is no account system yet. Use the contact form
            below to request access.
          </span>
          <button type="button" aria-label="Dismiss notice" onClick={() => setNotice(false)}>
            <X />
          </button>
        </div>
      )}
    </>
  );
}
