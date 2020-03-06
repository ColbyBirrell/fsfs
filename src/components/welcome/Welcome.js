import React from "react";
import "./welcome.css";

export default function Welcome() {
  return (
    <div>
      <div className="welcome-box">
        <h4 className="welc-welc">Welcome to</h4>
        <h1 className="welc-title">Farm Stuff For Sale</h1>
        <p className="welc-dir">Please use the form above to join or login</p>
      </div>
    </div>
  );
}
