import React, { useState } from "react";
import { register, login, logout } from "../../redux/reducers/userReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./header.css";

function Header(props) {
  const [email_address, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(true);

  return (
    <div className="header">
      <h1>FSFS</h1>
      {!props.userReducer.user.email_address ? (
        registered ? (
          <form
            className="head-form"
            onSubmit={e => {
              e.preventDefault();
              props.login(email_address, password);
              setEmail("");
              setPassword("");
              props.history.push("/dashboard");
            }}
          >
            Members:
            <input
              type="email"
              value={email_address}
              placeholder="enter your email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="enter your password"
              onChange={e => setPassword(e.target.value)}
            />
            <button>Login</button>
            <p>
              {/* Not a member?{" "} */}
              <span
                className="head-switch"
                onClick={() => setRegistered(false)}
                // style={{ color: "green" }}
              >
                Click here to join.
              </span>
            </p>
          </form>
        ) : (
          <form
            className="head-form"
            onSubmit={e => {
              e.preventDefault();
              props.register(email_address, password);
              setEmail("");
              setPassword("");
              props.history.push("/dashboard");
            }}
          >
            New Members:
            <input
              type="email"
              value={email_address}
              placeholder="enter your email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="enter your password"
              onChange={e => setPassword(e.target.value)}
            />
            <button>Register</button>
            <p>
              {/* Already a member?{" "} */}
              <span
                className="head-switch"
                onClick={() => setRegistered(true)}
                // style={{ color: "green" }}
              >
                Click here to log in.
              </span>
            </p>
          </form>
        )
      ) : (
        <div className="head-user">
          <h4>{props.userReducer.user.email_address}</h4>
          <button
            onClick={() => {
              props.logout();
            }}
          >
            Logout
          </button>
          {/* <button>
            <Link to="/posts">Posts</Link>
          </button> */}
        </div>
      )}
      {/* <AuthErrors /> */}
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps, { logout, login, register })(
  withRouter(Header)
);
