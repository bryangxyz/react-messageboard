import React from 'react';
import { Link } from 'react-router-dom';

class PostAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: '',
    };
    this.handlePostInputChange = this.handlePostInputChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  handlePostInputChange(e) {
    this.setState({
      newPost: e.target.value,
    });
  }

  createPost() {
    this.props.addPost(this.state.newPost);
    this.setState({
      newPost: '',
    });
  }

  render() {
    return (
      <div>
        <textarea value={this.state.newPost} onChange={this.handlePostInputChange} />
        <button onClick={this.createPost}>Add</button>
        {' '}
        <Link to='/posts'>Back</Link>
      </div>
    );
  }
}

export default PostAdd;
