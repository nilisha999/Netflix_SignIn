import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";

const GetStartedApp = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Email is - ", email);
    navigate("/signin"); // Navigate to the Sign In page
  };

  return (
    <div className="bgImg">
      <div className="header">
        <strong onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          NETFLIX
        </strong>
        <div className="container">
          <button className="signInBttn" onClick={() => navigate("/signin")}>
            Sign In
          </button>
        </div>
      </div>
      <div className="contentText">
        <h1>
          Unlimited movies,
          <p>
            TV Shows and <span>more</span>
          </p>
        </h1>
        <div className="TextPriceLines">
          <p>Starts at &#8377; 149. Cancel at any time.</p>
        </div>
        <div className="TextLines">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="inputContainer">
          <input
            type="email"
            placeholder="Email address"
            className="inputButtn"
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="getStartedBttn" onClick={handleSubmit}>
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedApp;
