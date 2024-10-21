import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cambia el estado si el usuario ha hecho scroll hacia abajo más de 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="header"
      className={`fixed z-10 w-full flex items-center justify-between py-1 px-2 text-white`}
    >
      {/* Logo con tamaño dinámico */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "text-xl" : "text-9xl"
        }`}
      >
        brut *
      </div>

      {/* Elementos del navbar que aparecen al hacer scroll */}
      <ul
        className={`transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        } flex items-center gap-1 text-lg`}
      >
        <li><Link to="/">home /</Link></li>
        <li><Link to="/gallery">gallery /</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
