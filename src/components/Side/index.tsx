import React from "react";
import TagCloud from "./../TagCloud";
import "./style.scss";

const Side: React.FC = () => {
  return (
    <div className="blog-side">
      <h2 className="side-title">Fanjia Kong</h2>
      <h3 className="side-subtitle">Frontend Developer</h3>
      <div className="tag-cloud">
        <TagCloud></TagCloud>
      </div>
    </div>
  );
};

export default Side;
