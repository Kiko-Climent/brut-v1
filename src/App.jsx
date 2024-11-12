import { BrowserRouter as Router } from "react-router-dom";
import { useState,useEffect } from "react";
import SplashScreen from "./components/Splash2";
import AnimatedRoutes from "./components/routes/AnimatedRoutes";

function App() {
  const [showSplash, setShowSplash] = useState(true); // State to control Splash Screen

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 8800);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }
  
  return (
    <div className="overflow-x-hidden">
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default App;