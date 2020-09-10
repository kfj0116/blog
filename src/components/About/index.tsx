import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';

import 'highlight.js/styles/monokai-sublime.css';
import './style.scss';

const About: React.FC = () => {
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });
  const content = '# This is me.';
  return (
    <div
      className="blog-about"
      dangerouslySetInnerHTML={{
        __html: marked(content),
      }}
    ></div>
  );
};

export default About;
