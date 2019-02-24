import React from "react";
import ReactDOM from "react-dom";
import {User} from "./components/user/User";

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'http://jsonplaceholder.typicode.com/posts';
const commentUrl = 'http://jsonplaceholder.typicode.com/comments';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      posts: [],
      comments: []
    }
    this.loadPost = this.loadPost.bind(this);
    this.loadComment = this.loadComment.bind(this);
  }

  fetchRequest(url,callBack) {
    fetch(url)
      .then( response => response.json())
      .then( data => {
        callBack(data);
      });
  }
  
  componentDidMount(){
    this.fetchRequest(usersUrl,(data) => {
      this.setState({users:data});
    });
  }

  loadPost(id) {
    this.fetchRequest(postsUrl,(data) => {
      const targetPosts = data.filter(post => {
        return post.userId === id;
      });
      this.setState({posts:targetPosts});
    });
  }

  loadComment(id) {
    this.fetchRequest(commentUrl,(data) => {
      const targetComments = data.filter(comment => {
        return comment.postId === id;
      });
      this.setState({comments:targetComments});
    });
  }

  render() {
    return (
      <div className='container'>
        {
          this.state.users.map( user => {
            return (
              <User loadPost={this.loadPost} key={user.id} user={user} posts={this.state.posts} loadComment={this.loadComment} comments={this.state.comments}/>
            )
          })
        }
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
