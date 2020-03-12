import React, { Component } from "react";
import { connect } from "react-redux";
import MyPost from "../mypost/MyPost";
import axios from "axios";
import "./myposts.scss";

class MyPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myPostList: []
    };
  }

  componentDidMount() {
    this.getUserPosts();
  }

  getUserPosts = (req, res) => {
    axios
      .get(`/api/posts/${this.props.userReducer.user.user_id}`)
      .then(res => {
        this.setState({
          myPostList: res.data
        });
      })
      .catch(err => console.log(err));
  };

  //   deletePost = id => {
  //     axios
  //       .delete(`/api/posts/${id}`)
  //       .then(() => {
  //         this.getPosts();
  //       })
  //       .catch(err => console.log(err));
  //   };

  render() {
    console.log(this.state);
    const showAllMyPosts = this.state.myPostList.map(element => {
      return (
        <MyPost
          key={element.prod_id}
          post={element}
          getUserPosts={this.getUserPosts}
        />
      );
    });
    return (
      <div>
        <div className="posts-main">
          <div> My Posts</div>
          {showAllMyPosts}
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

export default connect(mapStateToProps, {})(MyPosts);
