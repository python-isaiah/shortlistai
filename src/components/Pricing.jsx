import "./Pricing.css";
import useStartFlow from "../hooks/useStartFlow";

export default function Pricing() {
  const startFlow = useStartFlow();
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2>Simple, transparent pricing</h2>
          <p>
            Land a job faster — cancel anytime.
          </p>
        </div>

        <div className="pricing-grid">
          {/* FREE */}
          <div className="price-card">
            <h3>Free</h3>
            <p className="price">$0</p>
            <span className="price-sub">per month</span>

            <ul>
              <li>✓ Resume match score</li>
              <li>✓ Application tracking</li>
              <li>✓ 5 auto-applies / week</li>
            </ul>

            <button className="btn-secondary full" onClick={startFlow}>
              Get started
            </button>
          </div>

          {/* PRO */}
          <div className="price-card featured">
            <span className="badge">Most popular</span>
            <h3>Pro</h3>
            <p className="price">$49</p>
            <span className="price-sub">per month</span>

            <ul className="logos">
              <li>✓ Unlimited auto-applies</li>
              <li>✓ Interview probability</li>
              <li>✓ Resume optimization</li>
              <li>✓ Smart job filtering</li>
              <li>✓ Email follow-ups</li>
            </ul>

            <button className="btn-primary full" onClick={startFlow}>
              Start free trial
            </button>
          </div>

          {/* PREMIUM */}
          <div className="price-card">
            <h3>Premium</h3>
            <p className="price">$79</p>
            <span className="price-sub">per month</span>

            <ul>
              <li>✓ Early apply advantage</li>
              <li>✓ Advanced ATS tuning</li>
              <li>✓ Company insights</li>
              <li>✓ Priority support</li>
            </ul>

            <button className="btn-secondary full" onClick={startFlow}>
              Get started
            </button>
          </div>
        </div>

        <p className="pricing-footnote">
          One interview pays for months of Pro.
        </p>
      </div>
    </section>
  );
}
