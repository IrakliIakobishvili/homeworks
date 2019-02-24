import React from "react";

export const Address = props => {
    return (
      <div className="user--address">
        <h2><span className='title'>Address: </span>{props.address.street}</h2>
      </div>
    );
  };
  