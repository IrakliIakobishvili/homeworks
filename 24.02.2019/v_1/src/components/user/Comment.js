import React from "react";
export const Comment = props => {
  return (
    <div className="comment">
      <h1><span className='title'>Post ID: </span>{props.postID}</h1>
      <h1><span className='title'>Comment ID: </span>{props.id}</h1>
      <h1><span className='title'>Name: </span> {props.name}</h1>
      <h1><span className='title'>Email: </span> {props.email}</h1>
      <div><span className='title'>Message: </span> {props.body}</div>
    </div>
  );
};
