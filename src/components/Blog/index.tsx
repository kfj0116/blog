import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "./style.scss";

const Blog: React.FC = () => {
  const data = [
    {
      id: "1",
      title: "title",
      cover: "https://via.placeholder.com/200x100",
      tags: ["Javascript", "React", "Typescript"],
      info: "This is my blog",
      time: "2019/09/12"
    },
    {
      id: "2",
      title: "title",
      cover: "https://via.placeholder.com/200x100",
      tags: ["Javascript", "React", "Typescript"],
      info:
        "This is my blogThis is my blogThis is my blogThis is my blogThis is my blogThis is my blogThis is my blogThis is my blog",
      time: "2019/09/12"
    },
    {
      id: "3",
      title: "title",
      cover: "https://via.placeholder.com/200x100",
      tags: ["Javascript", "React", "Typescript"],
      info: "This is my blog",
      time: "2019/09/12"
    },
    {
      id: "4",
      title: "title",
      cover: "https://via.placeholder.com/200x100",
      tags: ["Javascript", "React", "Typescript"],
      info: "This is my blog",
      time: "2019/09/12"
    }
  ];
  return (
    <div className="blog-blog">
      <ul className="blog-list">
        {data.map(item => {
          return (
            <li className="blog-item" key={item.id}>
              <Link className="blog-link" to={`/blog/${item.id}`}>
                <Row type="flex" justify="space-between" gutter={16}>
                  <Col span={6}>
                    <img
                      className="blog-cover"
                      src={item.cover}
                      alt={item.title}
                    />
                  </Col>
                  <Col span={18}>
                    <h3 className="blog-title">{item.title}</h3>
                    <div className="blog-info">{item.info}</div>
                    <div className="clearfix">
                      {item.tags.map((tag, index) => (
                        <span className="blog-tag" key={index}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="blog-text">{item.time}</div>
                  </Col>
                </Row>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
