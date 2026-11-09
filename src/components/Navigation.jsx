
import { NavLink } from 'react-router';

const linkClass = ({ isActive }) =>
  isActive
    ? 'nav__link nav__link--active'
    : 'nav__link';

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/" end className={linkClass}>
        Пости
      </NavLink>

      <NavLink to="/about" className={linkClass}>
        Про нас
      </NavLink>
    </nav>
  );
}
