import { useState } from "react";
import LandingPage from "./components/LandingPage";

function App() {
  const [currentPage, setCurrentPage] = useState<
    | "home"
    | "about"
    | "career"
    | "press"
    | "support"
    | "customer-app"
    | "merchant-app"
    | "driver-app"
    | "privacy-policy"
    | "terms-of-service"
    | "cookie-policy"
    | "sitemap"
  >("home");

  const handleNavigate = (path: string) => {
    if (
      [
        "about",
        "career",
        "press",
        "support",
        "customer-app",
        "merchant-app",
        "driver-app",
        "privacy-policy",
        "terms-of-service",
        "cookie-policy",
        "sitemap",
      ].includes(path)
    ) {
      setCurrentPage(path as any);
      window.scrollTo(0, 0);
    } else if (path === "home") {
      setCurrentPage("home");
      window.scrollTo(0, 0);
    } else {
      window.location.href = `https://${path}.simbaxp.vercel.app`;
    }
  };

  return <LandingPage onNavigate={handleNavigate} currentPage={currentPage} />;
}

export default App;
