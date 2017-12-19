import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PostAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      message: '',
      user: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    let fieldName = e.target.name;
    this.setState({
      [fieldName]: e.target.value,
    });
  }

  createPost() {
    let date = Date.now();
    date = new Date(date);
    let time = date.toLocaleTimeString();
    date = date.toLocaleDateString();

    if (this.state.title && this.state.message && this.state.user) {
      this.props.addPost({
        title: this.state.title,
        message: this.state.message,
        user: this.state.user,
        replies: [],
        date,
        time,
      });
      this.setState({
        title: '',
        message: '',
        user: '',
      });
      this.props.history.push('/posts');
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Create a new post</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input name="title" value={this.state.title} onChange={this.handleChange} type="text" className="form-control" id="title" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <input name="message" value={this.state.message} onChange={this.handleChange} type="textarea" className="form-control" id="message" />
            </div>
            <div className="form-group">
              <label htmlFor="user">User</label>
              <input name="user" value={this.state.user} onChange={this.handleChange} type="text" className="form-control" id="user" />
            </div>
            <Link className="cancel btn btn-primary"  to='/posts'>Cancel</Link>
            <button type="submit" className="btn btn-primary" onClick={this.createPost}>Create Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PostAdd);
