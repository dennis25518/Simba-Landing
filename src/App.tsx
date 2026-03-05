import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";

type PageType =
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
  | "sitemap";

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    // Load from localStorage on mount
    const savedPage = localStorage.getItem("simba-current-page");
    return (savedPage as PageType) || "home";
  });

  // Save to localStorage whenever currentPage changes
  useEffect(() => {
    localStorage.setItem("simba-current-page", currentPage);
  }, [currentPage]);

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
      setCurrentPage(path as PageType);
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
