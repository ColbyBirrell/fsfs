import React, { Component } from "react";
import axios from "axios";
import "./mypost.scss";

class MyPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prod_name: props.post.prod_name,
      price: props.post.price,
      prod_description: props.post.prod_description,
      prod_id: this.props.post.prod_id,
      isEditing: false
    };
  }

  editToggle = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  editPost = () => {
    const { prod_id } = this.props.post;
    const { prod_name, price, prod_description } = this.state;
    axios
      .put(`/api/posts/${prod_id}`, { prod_name, price, prod_description })
      .then(() => {
        // this.setState({isEditing: false})
        this.props.getUserPosts();
      })
      .catch(err => console.log(err));
  };

  deletePost = id => {
    axios
      .delete(`/api/posts/${this.props.post.prod_id}`)
      .then(() => {})
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <div className="my-post-main">
        <img
          className="my-img-thumb"
          src={this.props.post.prod_img}
          alt="thumb"
        />
        {/* <div className="post-title">{this.props.post.prod_name}</div> */}
        <div classname="my-post-right">
          <div className="my-post-text">
            {this.state.isEditing ? (
              <div>
                <input
                  className="edit-name"
                  name="prod_name"
                  onChange={this.handleInput}
                  defaultValue={`${this.props.post.prod_name}`}
                />
                <input
                  className="edit-price"
                  name="price"
                  onChange={this.handleInput}
                  defaultValue={`${this.props.post.price}`}
                />
                <textarea
                  className="edit-description"
                  name="prod_description"
                  onChange={this.handleInput}
                  defaultValue={`${this.props.post.prod_description}`}
                />

                <button
                  className="save-button"
                  onClick={() => {
                    this.editPost();
                    this.editToggle();
                  }}
                >
                  SAVE IT!
                </button>
              </div>
            ) : (
              <div className="my-post-info">
                <div className="my-post-title" onClick={this.editToggle}>
                  {this.props.post.prod_name}
                </div>
                <div className="my-post-price">{`$${this.props.post.price}`}</div>
                <div className="my-post-content">
                  {this.props.post.prod_description}
                </div>
              </div>
            )}
          </div>

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
      </div>
    );
  }
}

export default MyPost;
