import React from 'react';
import { Link } from 'react-router-dom';

import PostEntry from './PostEntry';

const PostList = (props) => {
  const posts = props.posts.map((post, idx) => {
    return (
      <PostEntry
        key={idx}
        id={idx}
        postBody={post}
      />
    )
  });

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">The React MessageBoard</h4>
        <div className="card-text">
          {props.posts.length ? posts : 'There are currently no posts...add one!'}
        </div>
        <div>
          <Link className="btn btn-primary" to={'/addpost'}>Add Post</Link>
        </div>
      </div>
    </div>
  );
}

export default PostList;
