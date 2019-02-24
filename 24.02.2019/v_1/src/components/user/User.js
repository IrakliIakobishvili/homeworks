import React from "react";
import {Company} from "./Company"
import {Address} from "./Address";
import {Post} from "./Post";
export const User = props => {
  return (
    <div className="user" onClick={() => props.loadPost(props.user.id)}>
      <h1><span className='title'>User ID: </span> {props.user.id}</h1>
      <h1><span className='title'>Name: </span> {props.user.name}</h1>
      <Company company={props.user.company}/>
      <Address address={props.user.address}/>
      {props.posts.map(post => {
        return (props.user.id === post.userId) ? <Post key={post.id} id={post.id} userID={post.userId} title={post.title} body={post.body} loadComment={props.loadComment} comments={props.comments} /> : null;
      })}
    </div>
  );
};