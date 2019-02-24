import React from "react";
import {Comment} from "./Comment";
export const Post = props => {
  return (
    <div className="post" onClick={() => props.loadComment(props.id)}>
      <h1><span className='title'>User ID: </span>{props.userID}</h1>
      <h1><span className='title'>Post ID: </span>{props.id}</h1>
      <h1><span className='title'>Title: </span> {props.title}</h1>
      <div><span className='title'>Message: </span> {props.body}</div>
       {props.comments.map(comment => {
        return (props.id === comment.postId) ? <Comment key={comment.id} id={comment.id} postID={props.id} name={comment.name} email={comment.email} body={comment.body}/> : null;
       })}
    </div>
  );
};
