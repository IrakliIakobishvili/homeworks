import React from "react";
import { Link } from "@reach/router";

export default props => {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            color: isCurrent ? "white" : "black",
            backgroundColor: isCurrent ? "#008CBA" : "#f3f3f3"
          }
        };
      }}
    />
  );
};
