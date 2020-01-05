import React from "react";
import { TagCloud } from "react-tagcloud";
import { useHistory } from "react-router-dom";
const data = [
  { value: "JavaScript", count: 38 },
  { value: "React", count: 30 },
  { value: "Nodejs", count: 28 },
  { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 },
  { value: "MongoDB", count: 18 },
  { value: "CSS3", count: 20 }
];
const MyCloud: React.FC = () => {
  let history = useHistory();
  return (
    <TagCloud
      minSize={12}
      maxSize={35}
      tags={data}
      colorOptions={{ hue: "blue" }}
      onClick={(tag: { value: any }) => history.push(`/blog/${tag.value}`)}
    />
  );
};

export default MyCloud;
