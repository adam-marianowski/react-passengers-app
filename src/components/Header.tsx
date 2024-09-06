import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none gap-4"
      >
        <img src="/logo.svg" alt="logo" width={40} />
        <span className="fs-4">Passengers</span>
      </Link>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/passengers" className="nav-link ">
            Passengers
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
