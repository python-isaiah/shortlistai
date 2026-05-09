import AppRouter from "./components/Router";
import { AuthProvider } from "./context/AuthContext";
import { ResumeProvider } from "./context/ResumeContext";

export default function App() {
  return (
   <AuthProvider>
      <ResumeProvider>
        <AppRouter />
      </ResumeProvider>
    </AuthProvider>
  );
}
