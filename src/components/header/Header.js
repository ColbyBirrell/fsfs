import React, { useState } from "react";
import { register, login, logout } from "../../redux/reducers/userReducer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
            onSubmit={e => {
              e.preventDefault();
              props.login(email_address, password);
              setEmail("");
              setPassword("");
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
              Not a member?{" "}
              <span
                onClick={() => setRegistered(false)}
                style={{ color: "blue" }}
              >
                Click here to sign up.
              </span>
            </p>
          </form>
        ) : (
          <form
            onSubmit={e => {
              e.preventDefault();
              props.register(email_address, password);
              setEmail("");
              setPassword("");
            }}
          >
            New Member:
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
              Already a member?{" "}
              <span
                onClick={() => setRegistered(true)}
                style={{ color: "green" }}
              >
                Click here to log in.
              </span>
            </p>
          </form>
        )
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "40%"
          }}
        >
          <h3>Logged in as: {props.userReducer.user.email_address}</h3>
          <button>
            <Link to="/posts">Posts</Link>
          </button>
          <button
            onClick={() => {
              props.logout();
            }}
          >
            Logout
          </button>
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

export default connect(mapStateToProps, { logout, login, register })(Header);
