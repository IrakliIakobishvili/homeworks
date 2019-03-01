import React from "react";
import { Link } from "@reach/router";

export default props => {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            color: isCurrent ? "white" : null,
            backgroundColor: isCurrent ? "#4CAF50" : null
          }
        };
      }}
    />
  );
};
