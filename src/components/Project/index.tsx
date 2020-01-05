import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Project: React.FC = () => {
  const data = [
    {
      id: "1",
      title: "title",
      cover: "https://via.placeholder.com/200",
      tags: ["Javascript", "React", "Typescript"],
      info: "This is my project",
      time: "2019/09-2019/12"
    },
    {
      id: "2",
      title: "title",
      cover: "https://via.placeholder.com/200x150",
      tags: ["Javascript", "React", "Typescript"],
      info: "This is my project",
      time: "2019/09-2019/12"
    },
    {
      id: "3",
      title: "title",
      cover: "https://via.placeholder.com/200x100",
      tags: ["Javascript", "React", "Typescript"],
      info: "This is my project",
      time: "2019/09-2019/12"
    },
    {
      id: "4",
      title: "title",
      cover: "https://via.placeholder.com/200",
      tags: ["Javascript", "React", "Typescript"],
      info: "This is my project",
      time: "2019/09-2019/12"
    }
  ];
  return (
    <div className="blog-project">
      <ul className="project-list">
        {data.map(item => {
          return (
            <li className="project-item" key={item.id}>
              <Link className="project-link" to={`/project/${item.id}`}>
                <img
                  className="project-cover"
                  src={item.cover}
                  alt={item.title}
                />
                <h3 className="project-title">{item.title}</h3>
                <div className="clearfix">
                  {item.tags.map((tag, index) => (
                    <span className="project-tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-info">{item.info}</div>
                <div className="project-time">{item.time}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Project;
