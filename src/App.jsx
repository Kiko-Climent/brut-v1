import { BrowserRouter as Router } from "react-router-dom";
import { useState,useEffect } from "react";
import SplashScreen from "./components/Splash2";
import AnimatedRoutes from "./components/routes/AnimatedRoutes";

function App() {
  const [showSplash, setShowSplash] = useState(true); // Estado para controlar la visibilidad del SplashScreen

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 8800); // Mostrar SplashScreen por 3 segundos
    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, []);

  if (showSplash) {
    return <SplashScreen />; // Mostrar solo el SplashScreen si el estado es true
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