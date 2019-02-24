import React from "react";

export const Body = props => {
    return (
      <div className="body">
        <div><span className='title'>Message: </span> {props.body}</div>
      </div>
    );
};