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
        <div className="form-inputs">
          <input
            className="form-input"
            name="postTitle"
            placeholder="Enter Listing Title"
            // onChange={this.handleInput}
          />
          <textarea
            className="form-text-area"
            name="postText"
            placeholder="Enter Description"
            // onChange={this.handleInput}
          />
          <input
            className="form-input"
            name="img"
            placeholder="Enter img URL"
            // onChange={this.handleInput}
          />
          <img className="img-form" alt="" />
        </div>
        <div className="form-butts">
          <Link to="/dashboard">
            <button className="form-butt">List It</button>
          </Link>
          <button className="form-butt">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
