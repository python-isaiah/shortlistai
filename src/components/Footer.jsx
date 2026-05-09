import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* BRAND */}
        <div className="footer-brand">
          <h3>ShortlistAI</h3>
          <p>
            Apply smarter. Get interviews faster.
          </p>
        </div>

        {/* PRODUCT */}
        <div className="footer-col">
          <h4>Product</h4>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#">Dashboard</a>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#"></a>
          <a href="#"></a>
        </div>

        {/* LEGAL */}
        <div className="footer-col">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShortlistAI. All rights reserved.</p>
      </div>
    </footer>
  );
}
