import React, { Component } from "react";
import { Row, Col, Badge, Avatar, Menu, Dropdown } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  DownOutlined,
  createFromIconfontCN,
  SettingOutlined,
  InboxOutlined,
  CloseCircleOutlined,
  SyncOutlined
} from "@ant-design/icons";
import { history } from "../app/App.component";
import "./Header.component.css";

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js" // icon-shoppingcart, icon-python
  ]
});

class Header extends Component {
  constructor() {
    super();
    this.state = {
      userName: sessionStorage.getItem("userName"),
      emailId: "user@sys.com",
      visible: false
    };
  }

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  logout = () => {
    history.replace("/login");
    sessionStorage.clear();
  };

  render() {
    const menu = (
      <Menu className="dorpdownPadding">
        <Menu.Item>
          <Row type="flex" align="middle" justify="space-between">
            <Col>
              <Row>
                <span className="dropDownName">{this.state.userName}</span>
              </Row>
              <Row>
                <span className="dropDownName email">
                  {this.state.emailId.toLowerCase()}
                </span>
              </Row>
            </Col>
            <Col>
              <Avatar size={50} icon={<UserOutlined />} />
            </Col>
          </Row>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <SettingOutlined />
          <span className="dropDown-text-color">My Profile</span>
        </Menu.Item>
        <Menu.Item>
          <SyncOutlined />
          <span className="dropDown-text-color">My Delegates</span>
        </Menu.Item>
        <Menu.Item>
          <InboxOutlined />
          <span className="dropDown-text-color">My Messages</span>
        </Menu.Item>
        <Menu.Item onClick={this.logout}>
          <CloseCircleOutlined />
          <span className="dropDown-text-color" onClick={this.logout}>
            Sign Out
          </span>
        </Menu.Item>
        <Menu.Divider />
      </Menu>
    );
    return (
      <React.Fragment>
        <Row
          className="header-row"
          type="flex"
          align="middle"
          justify="space-between"
        >
          <Col className="header-menu-icon">
            <MenuOutlined style={{ fontSize: "20px", color: "#ffffff" }} />
          </Col>
          {/* <Col>
            <img
              className="header-trans-logo"
              alt="Logo"
              src={Sysco_Logo_Trans}
            />
          </Col> */}
          <Col>
            <Row type="flex" justify="end" align="middle">
              <span className="header-user-name ">
                Welcome
                <br /> {this.state.userName}
              </span>
              <Avatar size={50} icon={<UserOutlined />} />
              <Dropdown
                overlay={menu}
                placement="bottomCenter"
                trigger={["click"]}
                onVisibleChange={this.handleVisibleChange}
                visible={this.state.visible}
              >
                <DownOutlined
                  style={{
                    color: "#ffffff",
                    paddingLeft: "5px"
                  }}
                />
              </Dropdown>
            </Row>
          </Col>
          {/* <Col className="header-cart-icon">
            <Badge
              size="small"
              count={5}
              style={{ backgroundColor: "#1c9406" }}
            >
             
              <IconFont
                type="icon-shoppingcart"
                style={{ fontSize: "30px", color: "#ffffff" }}
              />
            </Badge>
          </Col> */}
        </Row>
      </React.Fragment>
    );
  }
}
export default Header;
