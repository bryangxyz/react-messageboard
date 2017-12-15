import React from 'react';
import { Link } from 'react-router-dom';

import PostEntry from './PostEntry';

class PostList extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map((post, idx) => {
          return (
            <PostEntry
              key={idx}
              id={idx}
              postBody={post}
            />
          )
        }
        )}
        <Link to={'/addpost'}>Add Post</Link>
      </div>
    );
  }
}

export default PostList;
