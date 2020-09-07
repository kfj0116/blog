import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Blog: React.FC = () => {
  const data = [
    {
      id: '1',
      title: 'long title long title long title long title',
      cover: 'https://via.placeholder.com/200x100',
      tags: ['Javascript', 'React', 'Typescript'],
      info: 'This is my blog',
      time: '2019/09/12',
    },
    {
      id: '2',
      title: 'title',
      cover: 'https://via.placeholder.com/200x100',
      tags: ['Javascript', 'React', 'Typescript'],
      info:
        'This is my blogThis is my blogThis is my blogThis is my blogThis is my blogThis is my blogThis is my blogThis is my blog',
      time: '2019/09/12',
    },
    {
      id: '3',
      title: 'title',
      cover: 'https://via.placeholder.com/200x100',
      tags: ['Javascript', 'React', 'Typescript'],
      info: 'This is my blog',
      time: '2019/09/12',
    },
    {
      id: '4',
      title: 'title',
      cover: 'https://via.placeholder.com/200x100',
      tags: ['Javascript', 'React', 'Typescript'],
      info: 'This is my blog',
      time: '2019/09/12',
    },
  ];
  return (
    <ul className="blog-list clearfix">
      {data.map((item) => {
        return (
          <li className="blog-item" key={item.id}>
            <Link
              className="blog-link"
              to={`/blog/${item.id}`}
              title={item.title}
            >
              <h3 className="blog-title">{item.title}</h3>
              <div className="blog-bottom">
                <div className="blog-info">
                  {item.tags.map((tag, index) => (
                    <span className="blog-tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="blog-date">{item.time}</div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Blog;
