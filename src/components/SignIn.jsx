import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    // fake login for now
    login("user@example.com");

    // redirect after login
    navigate("/dashboard");
  }

  return (
    <div className="auth-page fade-up" style={{ animationDelay: "0.1s" }}>
      <div className="auth-card">
        <h1>Welcome back</h1>
        <p>Sign in to continue to ShortlistAI</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Password
            <input type="password" placeholder="••••••••" required />
          </label>

          <div className="auth-row">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="link"
              onClick={() => alert("Forgot password later")}
            >
              Forgot password?
            </button>
          </div>

          <button type="submit" className="btn-primary full">
            Sign in
          </button>
        </form>

        <div className="auth-footer">
          <span>Don’t have an account? </span>
          <button
            className="link"
            type="button"
            onClick={() => navigate("/signup")}
          >
            Create one
          </button>
        </div>
      </div>
    </div>
  );
}
