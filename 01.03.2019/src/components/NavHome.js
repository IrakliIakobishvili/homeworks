import React from "react";
import Link from "./NavLink";

export default props => {
  return (
    <nav className="top-nav">
      <ul className="top-nav__list">
        <li className="top-nav__list__item">
          <Link className="top-nav__list__item__link" to="/">
            Home
          </Link>
        </li>
        <li className="top-nav__list__item">
          <Link className="top-nav__list__item__link" to="/news">
            News
          </Link>
        </li>
        <li className="top-nav__list__item">
          <Link className="top-nav__list__item__link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
