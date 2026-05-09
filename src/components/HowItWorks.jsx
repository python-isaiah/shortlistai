import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section id="how" className="how">
      <div className="container">
        <div className="how-header">
          <h2>How it works</h2>
          <p>
            Set it up once. ShortlistAI does the heavy lifting while you focus on
            interviews.
          </p>
        </div>

        <div className="how-steps">
          <div className="how-step">
            <span className="step-number">1</span>
            <h3>Upload your resume</h3>
            <p>
              We analyze your experience, skills, and goals to understand what
              roles you’re qualified for.
            </p>
          </div>

          <div className="how-step">
            <span className="step-number">2</span>
            <h3>Get matched with jobs</h3>
            <p>
              We scan job listings daily and score each one by interview
              probability and fit.
            </p>
          </div>

          <div className="how-step">
            <span className="step-number">3</span>
            <h3>Auto-apply and track</h3>
            <p>
              ShortlistAI applies on your behalf and tracks every application in
              one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
