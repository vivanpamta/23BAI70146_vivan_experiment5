import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Navbar() {
  const { toggleTheme, isDark } = useTheme(); // ✅ useContext used here
  const totalQty = useSelector((s) => s.cart.items.reduce((sum, i) => sum + i.qty, 0));

  return (
    <header className="nav">
      <div className="nav-inner container">
        <div className="brand">
          <div className="logo">E5</div>
          <div>
            <div className="brand-title">Experiment 5</div>
            <div className="brand-sub">Router • Context • Redux • useMemo</div>
          </div>
        </div>

        <nav className="links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "link active" : "link")}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "link active" : "link")}>
            Projects
          </NavLink>
          <NavLink to="/reports" className={({ isActive }) => (isActive ? "link active" : "link")}>
            Reports
            <span className="pill">{totalQty}</span>
          </NavLink>
        </nav>

        <button className="btn ghost" onClick={toggleTheme}>
          {isDark ? "Switch to Light ✨" : "Switch to Dark 🌙"}
        </button>
      </div>
    </header>
  );
}