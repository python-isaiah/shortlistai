import "./Logos.css";
import Google from "../assets/google.png";
import Apple from "../assets/apple.png";
import Amazon from "../assets/amazon.png";
import Meta from "../assets/meta.png";
import Microsoft from "../assets/microsoft.png";
import Netflix from "../assets/netflix.png";

export default function Logos() {
  return (
    <section className="logos">
      <div className="container">
        <p className="logos-label">
          Used by job seekers applying to companies like
        </p>

        <div className="logos-row">
          <span><img src={Google}></img></span>
          <span><img src={Apple}></img></span>
          <span><img src={Amazon}></img></span>
          <span><img src={Meta}></img></span>
          <span><img src={Microsoft}></img></span>
          <span><img src={Netflix}></img></span>
        </div>
      </div>
    </section>
  );
}
