import React from "react";
// import { Link } from "@reach/router";
import Link from "./NewsLink";
export default props => {
  // console.log(props.classNm);
  return (
    <ul className={props.classNm}>
      <li className="news__list__item">
        <Link className="news__list__item__link" to="/news/business-insider">
          Business Insider
        </Link>
      </li>
      <li className="news__list__item">
        <Link className="news__list__item__link" to="/news/the-verge">
          The Verge
        </Link>
      </li>
      <li className="news__list__item">
        <Link className="news__list__item__link" to="/news/bbc-news">
          BBC News
        </Link>
      </li>
    </ul>
  );
};
