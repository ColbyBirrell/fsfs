import React, { Component } from "react";
import axios from "axios";
import "./mypost.scss";

class MyPost extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  deletePost = id => {
    axios
      .delete(`/api/posts/${this.props.post.prod_id}`)
      .then(() => {
        // this.getPosts();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="post-main">
        <img className="img-thumb" src={this.props.post.prod_img} alt="thumb" />
        <div className="post-title">{this.props.post.prod_name}</div>
        <div className="post-price">{`$${this.props.post.price}`}</div>
        <div className="post-content">{this.props.post.prod_description}</div>
        <div className="delete-post">
          <button
            className="del-butt"
            onClick={() => {
              this.deletePost();
              this.props.getUserPosts();
            }}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default MyPost;
