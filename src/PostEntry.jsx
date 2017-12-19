import React from 'react';
import { withRouter } from 'react-router-dom';

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
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" onClick={this.route}>Post Title {this.props.postBody.title}</h5>
          <div className="card-text">
            <span className="post-summary">
              <span className="post-by">Posted by: {this.props.postBody.user}</span>
              <a onClick={this.route}>{this.props.postBody.replies.length} Comments</a>
            </span>
            <span className="post-time">
              Last Update: {this.props.postBody.date} @ {this.props.postBody.time}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PostEntry);
