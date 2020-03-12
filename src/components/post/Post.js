import React from "react";

export default function Post(props) {
  return (
    <div className="post-main">
      <img className="img-thumb" src={props.post.prod_img} alt="thumb" />
      <div className="post-title">{props.post.prod_name}</div>
      <div className="post-price">{`$${props.post.price}`}</div>
      <div className="post-content">{props.post.prod_description}</div>
      {/* <div className="delete-post">
        <button
          className="del-butt"
          onClick={() => {
            this.deletePost();
            this.props.getUserPosts();
          }}
        >
          X
        </button> */}
      {/* </div> */}
    </div>
  );
}
