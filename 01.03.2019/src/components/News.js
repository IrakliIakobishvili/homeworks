import React from "react";
import SourceLinks from "./SourceLinks";

const News = props => {
  return (
    <div className="news">
      <h1 className="main-heading">News Page</h1>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quod
        officiis alias, unde voluptatem laborum neque numquam, recusandae qui
        asperiores est placeat sit quidem ipsa eligendi optio doloribus.
        Voluptatibus facere accusamus inventore excepturi iure animi, quasi
        blanditiis itaque cumque id aspernatur, minima neque facilis laborum
        quos, asperiores libero debitis fuga.
      </p>
      <SourceLinks classNm="news-list" />
    </div>
  );
};

export default News;
