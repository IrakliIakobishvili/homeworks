import React from "react";
import ReactDOM from "react-dom";
import {User} from "./components/user/User";

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter : 0,
      users: [],
      posts: [],
      comments: []
    }
    this.loadPosts = this.loadPosts.bind(this);
    this.loadComments = this.loadComments.bind(this);
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

  loadPosts(id) {
    this.fetchRequest(postsUrl,(data) => {
      let targetPosts = data.filter(post => {
        return post.userId === id;
      });
      this.setState({posts:targetPosts});
    });
  }

  loadComments(id) {
    this.fetchRequest(commentsUrl,(data) => {
      let targetComments = data.filter(comment => {
        return comment.postId === id;
      });
      this.setState({comments:targetComments});
    });
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.users.map( user => {
            return (
              <User key={user.id} user={user} posts={this.state.posts} loadPosts={this.loadPosts} comments={this.state.comments} loadComments={this.loadComments}/>
            )
          })
        }
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
