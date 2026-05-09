import { useState } from "react";
import "./Navbar.css";
import useStartFlow from "../hooks/useStartFlow";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const startFlow = useStartFlow();

  return (
    <nav className="navbar" id="home">
      <div className="container navbar-inner">
        {/* Logo */}
        <div className="navbar-logo">ShortlistAI</div>

        {/* Desktop links */}
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>

          {/* WIRED BUTTON */}
          <button className="navbar-btn" onClick={startFlow}>
            Get started
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="navbar-mobile">
          <a href="#how" onClick={() => setOpen(false)}>
            How it works
          </a>
          <a href="#pricing" onClick={() => setOpen(false)}>
            Pricing
          </a>

          {/* WIRED BUTTON */}
          <button
            className="navbar-btn full"
            onClick={() => {
              setOpen(false);
              startFlow();
            }}
          >
            Get started
          </button>
        </div>
      )}
    </nav>
  );
}
