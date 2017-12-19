import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PostEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      replyMsg: '',
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
    let date = Date.now();
    date = new Date(date)
    let time = date.toLocaleTimeString();
    date = date.toLocaleDateString();

    if (this.state.user && this.state.replyMsg) {
      this.props.editPost({user: this.state.user, replyMsg: this.state.replyMsg}, this.props.history.location.state.id, date, time);
      this.setState({
        user: '',
        replyMsg: '',
      });
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-title post-detail">
            <h4>{this.props.history.location.state.post.title}</h4>
          </div>
          <div>
            <span className="post-by-user">By: {this.props.history.location.state.post.user}</span>
            <span>On: {this.props.history.location.state.post.date} @ {this.props.history.location.state.post.time}</span>
          </div>

          <Link className="back-btn btn btn-primary" to='/posts'>Back to Posts</Link>
          <p>
            {this.props.history.location.state.post.message}
          </p>
          <div>
            <h5>Responses</h5>
            {this.props.history.location.state.post.replies.map((reply, idx) => {
              return (
                <div key={idx}>
                  <div>{reply.user}:</div>
                  <div>{reply.replyMsg}</div>
                </div>
              )
            }
            )}
          </div>
          <br />
          <form>
            <div className="form-group">
              <label htmlFor="replyMsg">Reply Message</label>
              <input name="replyMsg" value={this.state.replyMsg} onChange={this.handleChange} type="textarea" className="form-control" id="replyMsg" />
            </div>
            <div className="form-group">
              <label htmlFor="user">Reply User</label>
              <input name="user" value={this.state.user} onChange={this.handleChange} type="text" className="form-control" id="user" />
            </div>
          </form>
          <button className="btn btn-primary" onClick={this.addReply}>Create Post</button>
        </div>
      </div>
    );
  }
}

export default withRouter(PostEdit);
