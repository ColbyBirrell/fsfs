import React from "react";
// import { postToReduce } from "../../redux/reducers/postReducer";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./indipost.scss";

function Post(props) {
  return (
    <div className="indi-post-body">
      <div className="indi-post-main">
        <img
          className="indi-img"
          src={props.postReducer.prod_img}
          alt="thumb"
        />
        <div className="indi-post-text">
          <div className="indi-post-title">{props.postReducer.prod_name}</div>
          <div className="indi-post-price">{`$${props.postReducer.price}`}</div>
          <div className="indi-post-content">
            {props.postReducer.prod_description}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    postReducer: reduxState.postReducer
  };
};

export default connect(mapStateToProps, {})(withRouter(Post));
