import React, { Component } from "react";
import {
  Row,
  Col,
  Table,
  Modal,
  Badge,
  Button,
  Select,
  Radio,
  notification
} from "antd";
import {
  createFromIconfontCN,
  HomeOutlined,
  HeartOutlined,
  HistoryOutlined,
  CloseOutlined
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./Footer.component.css";

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js" // icon-shoppingcart, icon-python
  ]
});

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row
        className="menu-bar-pane"
        type="flex"
        align="middle"
        justify="space-around"
      >
        <Col>
          <NavLink to={"/order"}>
            <HomeOutlined
              className="menu-bar-pane-icon"
              style={{
                color: "#ffffff",
                fontSize: "25px"
              }}
            />
          </NavLink>
        </Col>
        <Col>
          <HeartOutlined
            className="menu-bar-pane-icon"
            style={{
              color: "#ffffff",
              fontSize: "25px"
            }}
          />
        </Col>
        <Col>
          <NavLink to={"/order/history"}>
            <HistoryOutlined
              className="menu-bar-pane-icon"
              style={{
                color: "#ffffff",
                fontSize: "25px"
              }}
            />
          </NavLink>
        </Col>
      </Row>
    );
  }
}
export default Footer;
