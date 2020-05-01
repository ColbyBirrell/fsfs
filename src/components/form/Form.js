import React, { Component } from "react";
// import ReactS3 from "react-s3";
import { connect } from "react-redux";
import axios from "axios";
import { v4 as randomString } from "uuid";
import { Link } from "react-router-dom";
import "./form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isUploading: false,
      user_id: props.userReducer.user.user_id,
      prod_name: "",
      price: null,
      prod_description: "",
      prod_img:
        "https://dummyimage.com/250x150/aaaaaa/faebd7&text=Upload+a+Pic",
    };
  }

  //s3 start
  getSignedRequest = ([file]) => {
    // this.setState({ isUploading: true });
    // We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
    const fileName = `${randomString()}-${file.name.replace(/\s/g, "-")}`;

    // We will now send a request to our server to get a "signed url" from Amazon. We are essentially letting AWS know that we are going to upload a file soon. We are only sending the file-name and file-type as strings. We are not sending the file itself at this point.
    axios
      .get("/api/signs3", {
        params: {
          "file-name": fileName,
          "file-type": file.type,
        },
      })
      .then((response) => {
        const { signedRequest, url } = response.data;
        this.uploadFile(file, signedRequest, url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        "Content-Type": file.type,
      },
    };

    axios
      .put(signedRequest, file, options)
      .then((response) => {
        this.setState({ prod_img: url });
        // THEN DO SOMETHING WITH THE URL. SEND TO DB USING POST REQUEST OR SOMETHING
      })
      .catch((err) => {
        this.setState({
          // isUploading: false
        });
        if (err.response.status === 403) {
          alert(
            `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${err.stack}`
          );
        } else {
          alert(`ERROR: ${err.status}\n ${err.stack}`);
        }
      });
  };
  //s3 end

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitNewPost = () => {
    axios
      .post(`/api/posts`, {
        prod_name: this.state.prod_name,
        price: this.state.price,
        prod_description: this.state.prod_description,
        prod_img: this.state.prod_img,
        user_id: this.state.user_id,
      })
      // .then(res => {
      //   res.sendStatus(200);
      // })
      // .then(res => {
      //   res.status(200).send(() => this.getPosts());
      // })
      .catch((err) => console.log(err));
  };

  render() {
    // console.log(this.state);
    return (
      <div className="form-body">
        <div className="form-main">
          Create a New Post
          <div className="form-inputs">
            <input
              className="form-input"
              name="prod_name"
              placeholder="Enter Listing Title"
              onChange={this.handleInput}
            />
            <input
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              className="form-input"
              name="price"
              placeholder="Enter Listing Price"
              onChange={this.handleInput}
            />
            <textarea
              className="form-text-area"
              name="prod_description"
              placeholder="Enter Description"
              onChange={this.handleInput}
            />
            <input
              type="file"
              className="form-input"
              // name="img"
              // placeholder="Enter img URL"
              // accept="image/*"
              // multiple={false}
              onChange={(e) => this.getSignedRequest(e.target.files)}
            />
            <img className="img-form" src={this.state.prod_img} alt="" />
          </div>
          <div className="form-butts">
            <Link to="/dashboard">
              <button className="form-butt" onClick={this.submitNewPost}>
                List It
              </button>
            </Link>
            <Link to="/posts">
              <button className="form-butt">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    userReducer: reduxState.userReducer,
  };
};

export default connect(mapStateToProps, {})(Form);
