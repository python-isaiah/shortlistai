import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ResumeUpload from "./ResumeUpload";
import Processing from "./Processing";
import ResultsPreview from "./ResultsPreview";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upload" element={<ResumeUpload />} />
        <Route path="/processing" element={<Processing />} />
        <Route path="/preview" element={<ResultsPreview />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* fallback to avoid white screens */}
        <Route path="*" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
