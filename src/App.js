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
      posts: [
        {
          title: 'title1',
          content: 'content1',
          replies: [
            { user: 'user1',
              message: 'message1',
            },
            { user: 'user2',
              message: 'message2',
            },
          ],
          date: '12/15/2017',
          time: '5:19:44 PM',
        },
        {
          title: 'title2',
          content: 'content2',
          replies: [
            { user: 'user1',
              message: 'message1',
            },
            { user: 'user2',
              message: 'message2',
            },
          ],
          date: '12/15/2017',
          time: '5:19:44 PM',
        },
      ],
    };
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  addPost(post) {
    const currentPosts = this.state.posts;
    currentPosts.push(post);
    this.setState({
      posts: currentPosts,
    });
  }

  editPost(reply, postId, date, time) {
    const currentPosts = this.state.posts;
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
