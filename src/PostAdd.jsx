import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PostAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  handleChange(e) {
    let fieldName = e.target.name;
    this.setState({
      [fieldName]: e.target.value,
    });
  }

  createPost() {
    let a = Date.now();
    a = new Date(a)
    let b = a.toLocaleTimeString();
    a = a.toLocaleDateString();

    if (this.state.title && this.state.content) {
      this.props.addPost({
        title: this.state.title,
        content: this.state.content,
        replies: [],
        date: a,
        time: b,
      });
      this.setState({
        title: '',
        content: '',
      });
      this.props.history.push('/posts');
    }
  }

  render() {
    return (
      <div>
        <textarea name="title" value={this.state.title} onChange={this.handleChange} />
        <textarea name="content" value={this.state.content} onChange={this.handleChange} />
        <button onClick={this.createPost}>Add</button>
        {' '}
        <Link to='/posts'>Back</Link>
      </div>
    );
  }
}

export default withRouter(PostAdd);
