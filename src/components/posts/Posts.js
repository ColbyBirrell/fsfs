import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "../post/Post";
import axios from "axios";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = (req, res) => {
    axios
      .get(`/api/posts`)
      .then(res => {
        this.setState({
          postList: res.data
        });
      })
      .catch(err => console.log(err));
  };

  deletePost = id => {
    axios
      .delete(`/api/posts/${id}`)
      .then(() => {
        this.getPosts();
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    const showAllPosts = this.state.postList.map(element => {
      return (
        <Post
          key={element.prod_id}
          post={element}
          // getUserPosts={this.getUserPosts}
        />
      );
    });
    return (
      <div>
        <div className="posts-main">
          {/* <div>Posts Component</div> */}
          {showAllPosts}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps, {})(Posts);
