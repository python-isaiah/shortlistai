import "./Features.css";

export default function Features() {
  return (
    <section id="features" className="features">
        <div className="feature-card fade-up" style={{ animationDelay: "0.3s" }}>
      <div className="container">
        <div className="features-header">
          <h2>Everything you need to get hired faster</h2>
          <p>
            ShortlistAI focuses your effort on jobs you’re most likely to land —
            then applies for you automatically.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Interview Probability</h3>
            <p>
              See your chances before you apply. We score each job based on
              resume match, competition, and hiring signals.
            </p>
          </div>

          <div className="feature-card">
            <h3>Auto Apply</h3>
            <p>
              Set your preferences once and let ShortlistAI apply to hundreds of
              qualified roles on your behalf.
            </p>
          </div>

          <div className="feature-card">
            <h3>Resume Optimization</h3>
            <p>
              Your resume is automatically tailored for every role to maximize
              ATS compatibility and recruiter relevance.
            </p>
          </div>

          <div className="feature-card">
            <h3>Smart Filtering</h3>
            <p>
              Avoid low-quality listings. Filter by salary, experience level,
              remote options, and hiring likelihood.
            </p>
          </div>

          <div className="feature-card">
            <h3>Application Tracking</h3>
            <p>
              Track every application in one dashboard with follow-ups and
              status updates built in.
            </p>
          </div>

          <div className="feature-card">
            <h3>Less Burnout</h3>
            <p>
              Apply smarter — not harder. Spend less time applying and more time
              interviewing.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
