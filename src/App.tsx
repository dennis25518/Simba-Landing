import LandingPage from "./components/LandingPage";

function App() {
  const handleNavigate = (path: string) => {
    window.location.href = `https://${path}.simbaxp.vercel.app`;
  };

  return <LandingPage onNavigate={handleNavigate} />;
}

export default App;
