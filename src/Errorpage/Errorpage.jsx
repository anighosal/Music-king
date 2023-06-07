import React from "react";
import img from "../assets/404-page-animation-example.gif";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <img src={img} alt="" />

      <div className="text-center">
        <Link to="/">
          <button className="btn btn-secondary">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
