import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed z-10 w-full flex items-center justify-between py-1 px-2 font-regular text-white">
      <div className="text-xl">brut *</div>
      <ul className="flex items-center gap-1 text-lg">
        <li><Link to="/">home /</Link></li>
        <li><Link to="/gallery">gallery /</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;