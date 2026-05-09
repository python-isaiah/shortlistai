import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    // fake account creation for now
    login("newuser@example.com");

    // go straight into onboarding
    navigate("/upload");
  }

  return (
    <div className="auth-page fade-up" style={{ animationDelay: "0.1s" }}>
      <div className="auth-card">
        <h1>Create your account</h1>
        <p>Start applying smarter with ShortlistAI</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input type="text" placeholder="Anthony Lamy" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Password
            <input type="password" placeholder="Create a password" required />
          </label>

          <label>
            Confirm password
            <input
              type="password"
              placeholder="Repeat your password"
              required
            />
          </label>

          <button type="submit" className="btn-primary full">
            Create account
          </button>
        </form>

        <div className="auth-footer">
          <span>Already have an account? </span>
          <button
            type="button"
            className="link"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
