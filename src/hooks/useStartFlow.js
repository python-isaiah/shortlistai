import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function useStartFlow() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return () => {
    if (!user) {
      navigate("/signup");
    } else {
      navigate("/dashboard");
    }
  };
}
