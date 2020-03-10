import React from "react";
// import { connect } from "react-redux";
// import axios from "axios";
import { Link } from "react-router-dom";
import "./form.css";

function Form() {
  return (
    <div className="form-body">
      <div className="form-main">
        Create a New Post
        <img className="img-form" alt="" />
        <div className="form-inputs">
          <input
            name="postTitle"
            placeholder="Enter Post Title"
            // onChange={this.handleInput}
          />
          <textarea
            name="postText"
            placeholder="Enter Post Text"
            // onChange={this.handleInput}
          />
          <input
            name="img"
            placeholder="Enter img URL"
            // onChange={this.handleInput}
          />
        </div>
        <div className="form-butts">
          <Link to="/dashboard">
            <button>List It</button>
          </Link>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
