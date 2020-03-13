import React, { Component } from "react";
import axios from "axios";
import "./mypost.scss";

class MyPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prod_name: "",
      price: null,
      prod_description: "",
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

  deletePost = id => {
    axios
      .delete(`/api/posts/${this.props.post.prod_id}`)
      .then(() => {
        // this.getPosts();
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <div className="post-main">
        <img className="img-thumb" src={this.props.post.prod_img} alt="thumb" />
        {/* <div className="post-title">{this.props.post.prod_name}</div> */}
        <div className="post-left">
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
                  //     this.props.editProducts(
                  //       this.props.post.prod_id,
                  //       this.state.userInput
                  //     );
                  this.editToggle();
                }}
              >
                SAVE IT!
              </button>
            </div>
          ) : (
            <div className="post-info">
              <div className="post-title" onClick={this.editToggle}>
                {this.props.post.prod_name}
              </div>

              <div className="post-price">{`$${this.props.post.price}`}</div>

              <div className="post-content">
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
    );
  }
}

export default MyPost;
