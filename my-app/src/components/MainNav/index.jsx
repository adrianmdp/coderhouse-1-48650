import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/users">Usuarios</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contacto</NavLink>
      </li>
    </ul>
  );
};

export { MainNav };
