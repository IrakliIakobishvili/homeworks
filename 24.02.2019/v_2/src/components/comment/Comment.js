import React from "react";
import {Title} from "./Title"
import {Body} from "./Body";
import {Email} from "./Email";
export const Comment = props => {
  return (
    <div className="comment">
      <h2><span className='title'>Post ID: </span>{props.comment.postId}</h2>
      <h2><span className='title'>Comment ID: </span>{props.comment.id}</h2>
      <Title title={props.comment.name}/>
      <Email email={props.comment.email} />
      <Body body={props.comment.body}/>
    </div>
  );
};