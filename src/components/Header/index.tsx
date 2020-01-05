import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Row, Col, Menu, Icon, Button } from "antd";
import "./style.scss";
const Header: React.FC = () => {
  const location = useLocation().pathname.split("/");
  const [current, setCurrent] = useState(
    location[1] && location[1] !== "" ? location[1] : "/"
  );
  useEffect(() => {
    setCurrent(location[1] && location[1] !== "" ? location[1] : "/");
  }, [location]);
  return (
    <div className="header-wrap">
      <Row className="header-nav" type="flex">
        <Col span={4}>
          <h2>Fanjia Kong</h2>
        </Col>
        <Col span={16}>
          <Menu
            onClick={e => setCurrent(e.key)}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="/">
              <Link to="/">
                <Icon type="home" />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="blog">
              <Link to="/blog">
                <Icon type="bars" />
                Blogs
              </Link>
            </Menu.Item>
            <Menu.Item key="project">
              <Link to="/project">
                <Icon type="project" />
                Projects
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="category">
              <Link to="/category">
                <Icon type="appstore" />
                Categories
              </Link>
            </Menu.Item> */}
            <Menu.Item key="about">
              <Link to="/about">
                <Icon type="user" />
                About
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={4}>
          <div className="header-login">
            <Button className="header-button" type="primary" size="small">
              Log in
            </Button>
            <Button className="header-button" type="danger" size="small">
              Sign up
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
