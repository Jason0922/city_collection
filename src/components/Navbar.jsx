import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/collection", label: "Collection" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__mark">
        City Collection
      </Link>
      <nav className="navbar__links" aria-label="Primary">
        {links.map((link, index) => (
          <span key={link.to} className="navbar__item">
            {index > 0 ? <span className="navbar__slash">/</span> : null}
            <NavLink
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
            >
              {link.label}
            </NavLink>
          </span>
        ))}
      </nav>
    </header>
  );
}
