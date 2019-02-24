import React from "react";

export const Body = props => {
    return (
      <div className="post-body">
        <h2><span className='title'>Message: </span> {props.body}</h2>
      </div>
    );
};
  