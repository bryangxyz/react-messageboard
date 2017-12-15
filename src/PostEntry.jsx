import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PostEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.route = this.route.bind(this);
  }

  route() {
    this.props.history.push({
      pathname: `/posts/${this.props.id}`,
      state: {post: this.props.postBody, id: this.props.id}
    })
  }

  render() {
    return (
      <div>
        <p onClick={this.route}>{this.props.postBody.title}</p>
        <div>{this.props.postBody.replies.length} Comments</div>
      </div>
    );
  }
}

export default withRouter(PostEntry);
