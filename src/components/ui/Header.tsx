import { JSX } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom align-items-center">
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img src="/logo.svg" alt="logo" style={{ width: "3em" }} />
      </Link>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            to="/passengers"
            className="nav-link active"
            aria-current="page"
          >
            Home
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
