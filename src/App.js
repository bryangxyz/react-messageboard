import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import PostList from './PostList';
import PostAdd from './PostAdd';
import PostEdit from './PostEdit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  addPost(post) {
    let currentPosts = this.state.posts;
    currentPosts.push(post);
    this.setState({
      posts: currentPosts,
    });
  }

  editPost(reply, postId, date, time) {
    let currentPosts = this.state.posts;
    currentPosts[postId].replies.push(reply);
    currentPosts[postId].date = date;
    currentPosts[postId].time = time;
    this.setState({
      post: currentPosts,
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact path='/posts'
            render={() => (
              <PostList posts={this.state.posts}/>
            )}
          />
          <Route
            path='/addpost'
            render={() => (
              <PostAdd addPost={this.addPost}/>
            )}
          />
          <Route
            path='/posts/:id'
            render={() => (
              <PostEdit editPost={this.editPost}/>
            )}
          />
          <Redirect exact from='/' to='/posts' />
        </Switch>
      </div>
    );
  }
}

export default App;
