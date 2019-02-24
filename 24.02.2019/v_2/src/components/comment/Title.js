import React from "react";

export const Title = props => {
    return (
      <div>
        <h2><span className='title'>Name: </span>{props.title}</h2>
      </div>
    );
};