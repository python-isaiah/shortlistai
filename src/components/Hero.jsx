import "./Hero.css";
import useStartFlow from "../hooks/useStartFlow";

export default function Hero() {
   const startFlow = useStartFlow();
  return (
    
    <section id="home" className="hero">
        <div className="hero-copy fade-up" style={{ animationDelay: "0.1s" }}>
      <div className="container hero-grid">
        {/* LEFT */}
        <div className="hero-copy">
          <h1>
            Apply smarter.
            <span>Get interviews faster.</span>
          </h1>

          <p>
            ShortlistAI automatically applies to jobs you’re most likely to get,
            using resume matching and interview probability scoring.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={startFlow} >Start free</button>
            <button
  className="btn-secondary"
  onClick={() =>
    document
      .getElementById("how")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>See how it works</button>
          </div>

          <div className="hero-trust">
            <span>✓ No spam applying</span>
            <span>✓ ATS-optimized</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-visual">
          <div className="mock-dashboard">
            <div className="mock-header">
              <span />
              <span />
              <span />
            </div>

            <div className="mock-body">
              <div className="mock-card">
                <strong>Frontend Engineer</strong>
                <p>Interview probability</p>
                <div className="mock-bar">
                  <div style={{ width: "72%" }} />
                </div>
              </div>

              <div className="mock-card">
                <strong>Product Designer</strong>
                <p>Interview probability</p>
                <div className="mock-bar">
                  <div style={{ width: "61%" }} />
                </div>
              </div>

              <div className="mock-card">
                <strong>Data Analyst</strong>
                <p>Interview probability</p>
                <div className="mock-bar">
                  <div style={{ width: "84%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
