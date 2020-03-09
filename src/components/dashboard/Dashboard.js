import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dash-box">
      <h4 className="dash-greet">What would you like to do?</h4>
      <div className="dash-buttons-box">
        <Link to="/form">
          <button className="dash-butt">Add a Listing</button>
        </Link>
        <Link to="/posts">
          <button className="dash-butt">View all Listings</button>
        </Link>
        <Link to="/myposts">
          <button className="dash-butt">View my Listings</button>
        </Link>
      </div>
    </div>
  );
}
