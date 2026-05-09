import "./Cta.css";
import useStartFlow from "../hooks/useStartFlow";

export default function CTA() {
  const startFlow = useStartFlow();
  return (
    <section className="cta">
      <div className="container cta-inner">
        <h2>
          Stop guessing.
          <span>Start applying smarter.</span>
        </h2>

        <p>
          ShortlistAI finds the jobs you’re most likely to get — then applies for
          you automatically.
        </p>

        <div className="cta-actions">
          <button className="btn-primary large" onClick={startFlow}>
            Start free
          </button>
          <span className="cta-subtext">
            
          </span>
        </div>
      </div>
    </section>
  );
}
