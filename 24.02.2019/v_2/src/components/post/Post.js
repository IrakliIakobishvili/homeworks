import React from "react";
import {Title} from "./Title"
import {Body} from "./body";
import {Comment} from "../comment/Comment";
export const Post = props => {
  return (
    <div className="post" onClick={() => props.loadComments(props.post.id)}>
      <h2><span className='title'>User ID: </span>{props.post.userId}</h2>
      <h2><span className='title'>Post ID: </span>{props.post.id}</h2>
      <Title title={props.post.title}/>
      <Body body={props.post.body}/>
      {
        props.comments.map(comment => {
            return (
                (comment.postId === props.post.id) ?  <Comment comment={comment} /> : null
            )
        })
      }
    </div>
  );
};
