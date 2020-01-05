import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Side from "./components/Side";
import Project from "./components/Project";
import Blog from "./components/Blog";
import About from "./components/About";
import { Row, Col } from "antd";
const App: React.FC = () => {
  return (
    <div className="blog-layout">
      <Router>
        <header className="blog-header">
          <Header></Header>
        </header>
        <section className="blog-main">
          <Row type="flex" justify="space-between" gutter={16}>
            <Col span={18}>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/blog" component={Blog}></Route>
                <Route path="/project" component={Project}></Route>
                <Route path="/about" component={About}></Route>
              </Switch>
            </Col>
            <Col span={6}>
              <Side></Side>
            </Col>
          </Row>
        </section>
        <footer className="blog-footer">Created by Fanjia Kong</footer>
      </Router>
    </div>
  );
};

export default App;
