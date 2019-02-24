import React from "react";
import {Company} from "./Company"
import {Address} from "./Address";
import {Post} from '../post/Post';

export const User = props => {
  return (
    <div className="user" onClick={() => props.loadPosts(props.user.id)}>
      <h2><span className='title'>ID:</span> {props.user.id}</h2>
      <h2><span className='title'>Name:</span> {props.user.name}</h2>
      <Company company={props.user.company}/>
      <Address address={props.user.address}/>
      {
        props.posts.map(post => {
          return (
           (post.userId === props.user.id) ?  <Post key={post.id} post={post} comments={props.comments} loadComments={props.loadComments} /> : null
          )
        })
      }
    </div>
  );
};
