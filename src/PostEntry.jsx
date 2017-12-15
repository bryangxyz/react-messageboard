import React from 'react';
import { Link } from 'react-router-dom';

class PostEntry extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/posts/${this.props.id}`}>{this.props.postBody}</Link>
      </div>
    );
  }
}

export default PostEntry;
