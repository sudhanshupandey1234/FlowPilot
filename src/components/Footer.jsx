import { Compass, Info, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="wordmark" href="#top" aria-label="FlowPilot — back to top">
              <span className="wordmark-mark" aria-hidden="true">
                <Compass />
              </span>
              FlowPilot
            </a>
            <p>
              The calm workspace where teams plan projects, organise tasks and
              track progress. Less chaos. More momentum.
            </p>
          </div>

          <nav aria-label="Product">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#showcase">Product tour</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#how">How it works</a></li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h4>Company</h4>
            <ul>
              <li><a href="#product">About the product</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#top">Back to top</a></li>
            </ul>
          </nav>

          <div>
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a href="mailto:hello@flowpilot.demo">
                  <Mail aria-hidden="true" style={{ display: "inline", width: 15, height: 15, verticalAlign: "-2px", marginRight: 6 }} />
                  hello@flowpilot.demo
                </a>
              </li>
              <li style={{ fontSize: "0.85rem", color: "#7e8ea8" }}>
                Demo email address — not a real inbox.
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 FlowPilot. All rights reserved.</span>
          <span className="demo-tag">
            <Info aria-hidden="true" /> Demonstration website — product, pricing and contact details are illustrative.
          </span>
        </div>
      </div>
    </footer>
  );
}
