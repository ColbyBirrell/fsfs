import React from "react";
import { postToReduce } from "../../redux/reducers/postReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./post.scss";

function Post(props) {
  // useEffect(() => {

  // }, [])

  const pushDataToRedux = () => {
    props.postToReduce(
      props.post.prod_img,
      props.post.prod_name,
      props.post.price,
      props.post.prod_description
    );
  };

  return (
    <Link
      to="/indipost"
      onClick={() => pushDataToRedux()}
      className="post-main"
    >
      <img className="img-thumb" src={props.post.prod_img} alt="thumb" />
      <div className="post-title">{props.post.prod_name}</div>
      <div className="post-price">{`$${props.post.price}`}</div>
      {/* <div className="post-content">{props.post.prod_description}</div> */}
      {/* </div> */}
    </Link>
  );
}

const mapStateToProps = reduxState => {
  return {
    postReducer: reduxState.postReducer
  };
};

export default connect(mapStateToProps, { postToReduce })(withRouter(Post));
