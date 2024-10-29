import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
// import SplashScreen from "./components/Splash";
import SplashScreen from "./components/Splash2";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery"
import About from "./pages/About"

function App() {
  const [showSplash, setShowSplash] = useState(true); // Estado para controlar la visibilidad del SplashScreen

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 9000); // Mostrar SplashScreen por 3 segundos
    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, []);

  if (showSplash) {
    return <SplashScreen />; // Mostrar solo el SplashScreen si el estado es true
  }
  
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          {/* <Route path="/splash" element={<Layout><SplashScreen /></Layout>} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App;