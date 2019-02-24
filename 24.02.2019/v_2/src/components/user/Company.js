import React from "react";

export const Company = props => {
    return (
      <div className="user--company">
        <h2><span className='title'>Company:</span> {props.company.name}</h2>
      </div>
    );
  };
  