import React, { Component } from 'react';
import { browserHistory, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import PostList from './PostList';
import PostAdd from './PostAdd';
import PostEdit from './PostEdit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: ['testing', 'testing2'],
    };
    this.addPost = this.addPost.bind(this);
  }

  addPost(post) {
    const currentPosts = this.state.posts;
    currentPosts.push(post);
    this.setState({
      posts: currentPosts,
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
              <PostEdit />
            )}
          />
          <Redirect exact from='/' to='/posts' />
        </Switch>
      </div>
    );
  }
}

export default App;
