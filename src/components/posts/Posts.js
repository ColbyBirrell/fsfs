import React, { Component } from "react";
import { connect } from "react-redux";
// import Post from "../post/Post";
// import axios from "axios";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: []
    };
  }

  // componentDidMount() {
  //   this.getPosts();
  // }

  // getPosts = (req, res) => {
  //   axios
  //     .get(`/api/posts`)
  //     .then(res => {
  //       this.setState({
  //         postList: res.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  render() {
    return <div>Posts Component</div>;
  }
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps, {})(Posts);
