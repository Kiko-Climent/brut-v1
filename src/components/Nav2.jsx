import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav2 = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [rotationCount, setRotationCount] = useState(0);

  // Lista de palabras para el carrusel
  const words = [
    "Brutalist",
    "Brutalista",
    "ブルータリスト",
    "Бруталист",
    "Μπρουταλιστής",
    "브루탈리스트",
    "brut*"
  ];

  const totalRotations = 3; // Número de vueltas que quieres que dé el carrusel

  useEffect(() => {
    if (isHome) {
      const handleScroll = () => {
        if (window.scrollY > 1) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Intervalo para rotar las palabras
      const wordInterval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % words.length;

          if (nextIndex === 0) {
            setRotationCount((prevRotation) => prevRotation + 1);
          }

          // Detener cuando se completan 3 vueltas y la palabra final es "brut*"
          if (rotationCount >= totalRotations && nextIndex === words.length - 1) {
            clearInterval(wordInterval);
            return nextIndex;
          }

          return nextIndex;
        });
      }, 300);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearInterval(wordInterval);
      };
    } else {
      setIsScrolled(true);
    }
  }, [isHome, rotationCount]);

  return (
    <nav
      id="header"
      className={`fixed z-10 w-full flex items-center justify-between py-1 px-2 text-white`}
    >
      <div
        className={`transition-all duration-300 flex items-start justify-start ${
          isHome && !isScrolled ? "text-[10vw] font-bold h-screen" : "text-lg"
        }`}
      >
        {/* Mostrar la palabra del carrusel */}
        {words[currentWordIndex]}
      </div>
      <ul
        className={`transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        } flex items-center gap-1 text-base`}
      >
        <li><Link to="/">home /</Link></li>
        <li><Link to="/gallery">gallery /</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
    </nav>
  );
};

export default Nav2;
