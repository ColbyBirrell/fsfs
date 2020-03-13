import React, { useState } from "react";
import "./goodbye.css";
import axios from "axios";

function Goodbye(props) {
  const [email, setEmail] = useState("");

  const nodeMail = () => {
    axios.post(`/api/mailer`, { email }).then(res => {
      alert("Thank you for signing up");
    });
  };

  return (
    <div>
      <div className="bye-box">
        <h4 className="bye-welc">Thank you for using</h4>
        <h1 className="bye-title">Farm Stuff For Sale</h1>
        <p className="bye-dir">Please use the form above to login back in</p>
        <input
          className="email-signup"
          placeholder="enter email to subscribe"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button
          onClick={() => {
            nodeMail();
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Goodbye;
