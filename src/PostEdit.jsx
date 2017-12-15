import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PostEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      content: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.addReply = this.addReply.bind(this);
  }

  handleChange(e) {
    let fieldName = e.target.name;
    this.setState({
      [fieldName]: e.target.value,
    });
  }

  addReply() {
    let a = Date.now();
    a = new Date(a)
    let b = a.toLocaleTimeString();
    a = a.toLocaleDateString();

    if (this.state.user && this.state.content) {
      this.props.editPost({user: this.state.user, message: this.state.content}, this.props.history.location.state.id, a, b);
      this.setState({
        user: '',
        content: '',
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.history.location.state.post.title}
        {this.props.history.location.state.post.content}
        {this.props.history.location.state.post.replies.map((reply, idx) => {
          return (
            <div key={idx}>
              {reply.user}
              {reply.message}
            </div>
          )
        }
        )}
        {this.props.history.location.state.post.date}
        {this.props.history.location.state.post.time}
        <textarea name="user" value={this.state.user} onChange={this.handleChange} />
        <textarea name="content" value={this.state.content} onChange={this.handleChange} />
        <button onClick={this.addReply}>Add</button>
        {' '}
        <Link to='/posts'>Back</Link>
      </div>
    );
  }
}

export default withRouter(PostEdit);
