import { useState } from "react";
import {
  Mail,
  Clock,
  Users,
  Info,
  CheckCircle2,
  AlertCircle,
  Send,
  RotateCcw,
} from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initial = { name: "", email: "", company: "", teamSize: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10)
      next.message = "Please tell us a little more — at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      return;
    }
    // Move keyboard focus to the first field with an error.
    const firstError = ["name", "email", "message"].find(
      (f) =>
        (f === "name" && values.name.trim().length < 2) ||
        (f === "email" && !EMAIL_RE.test(values.email.trim())) ||
        (f === "message" && values.message.trim().length < 10)
    );
    document
      .getElementById({ name: "cf-name", email: "cf-email", message: "cf-message" }[firstError])
      ?.focus();
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="wrap contact-grid">
        <div>
          <div className="section-head">
            <span className="kicker">Get started</span>
            <h2 id="contact-heading">Start your first project today.</h2>
            <p>
              Tell us about your team and what you&rsquo;re working on. This
              is a front-end demo, so the form doesn&rsquo;t send or store
              anything — but the fields below show exactly what a request
              would collect.
            </p>
          </div>
          <ul className="contact-points">
            <li>
              <Mail aria-hidden="true" />
              <div>
                <strong>Email us</strong>
                <a href="mailto:hello@flowpilot.demo">hello@flowpilot.demo</a>
                <span style={{ display: "block" }}>Demo address for this website</span>
              </div>
            </li>
            <li>
              <Users aria-hidden="true" />
              <div>
                <strong>Who it&rsquo;s for</strong>
                <span>Teams of 2 to 200 — product, marketing, operations, and agencies.</span>
              </div>
            </li>
            <li>
              <Clock aria-hidden="true" />
              <div>
                <strong>In the live product</strong>
                <span>Replies within one business day, Monday to Friday — this demo sends nothing.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="form-card">
          {submitted ? (
            <div className="form-success" role="status">
              <div className="ok-badge"><CheckCircle2 aria-hidden="true" /></div>
              <h3>Thanks, {values.name.trim().split(" ")[0]} — request received.</h3>
              <p>
                This is a demo, so your message wasn&rsquo;t sent or stored
                anywhere — nothing leaves your browser. In the live product
                it would be sent to the FlowPilot team.
              </p>
              <button type="button" className="btn btn-ghost" onClick={reset}>
                <RotateCcw aria-hidden="true" /> Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h3>Request access</h3>
              <p>Fields marked with an asterisk are required.</p>

              <div className="form-row">
                <div className={`field${errors.name ? " error" : ""}`}>
                  <label htmlFor="cf-name">Your name *</label>
                  <input
                    id="cf-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Sara Khan"
                    value={values.name}
                    onChange={set("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "cf-name-err" : undefined}
                  />
                  {errors.name && (
                    <p className="field-msg" id="cf-name-err"><AlertCircle aria-hidden="true" /> {errors.name}</p>
                  )}
                </div>
                <div className={`field${errors.email ? " error" : ""}`}>
                  <label htmlFor="cf-email">Work email *</label>
                  <input
                    id="cf-email"
                    type="email"
                    autoComplete="email"
                    placeholder="sara@company.com"
                    value={values.email}
                    onChange={set("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "cf-email-err" : undefined}
                  />
                  {errors.email && (
                    <p className="field-msg" id="cf-email-err"><AlertCircle aria-hidden="true" /> {errors.email}</p>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="cf-company">Company <span className="optional">(optional)</span></label>
                  <input
                    id="cf-company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Acme Studio"
                    value={values.company}
                    onChange={set("company")}
                  />
                </div>
                <div className="field">
                  <label htmlFor="cf-team">Team size <span className="optional">(optional)</span></label>
                  <select id="cf-team" value={values.teamSize} onChange={set("teamSize")}>
                    <option value="">Select a range</option>
                    <option value="1-5">1–5 people</option>
                    <option value="6-20">6–20 people</option>
                    <option value="21-50">21–50 people</option>
                    <option value="51+">51+ people</option>
                  </select>
                </div>
              </div>

              <div className={`field${errors.message ? " error" : ""}`}>
                <label htmlFor="cf-message">What are you working on? *</label>
                <textarea
                  id="cf-message"
                  placeholder="e.g. We're a team of 8 launching a new product in January and need one place to run it."
                  value={values.message}
                  onChange={set("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "cf-message-err" : undefined}
                />
                {errors.message && (
                  <p className="field-msg" id="cf-message-err"><AlertCircle aria-hidden="true" /> {errors.message}</p>
                )}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                <Send aria-hidden="true" /> Request access
              </button>
              <p className="form-note">
                <Info aria-hidden="true" />
                <span>
                  Demo form — submissions are not sent to a backend. Nothing
                  you type here leaves your browser.
                </span>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
