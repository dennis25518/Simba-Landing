import { useState } from "react";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Career from "./components/Career";
import Press from "./components/Press";
import Support from "./components/Support";

function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "about" | "career" | "press" | "support"
  >("home");

  const handleNavigate = (path: string) => {
    if (["about", "career", "press", "support"].includes(path)) {
      setCurrentPage(path as any);
      window.scrollTo(0, 0);
    } else {
      window.location.href = `https://${path}.simbaxp.vercel.app`;
    }
  };

  return (
    <>
      {currentPage === "home" && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === "about" && <About onNavigate={handleNavigate} />}
      {currentPage === "career" && <Career onNavigate={handleNavigate} />}
      {currentPage === "press" && <Press onNavigate={handleNavigate} />}
      {currentPage === "support" && <Support onNavigate={handleNavigate} />}
    </>
  );
}

export default App;
