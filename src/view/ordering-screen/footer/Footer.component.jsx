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
import CartModal from "./CartModal.component";
import "./Footer.component.css";

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js" // icon-shoppingcart, icon-python
  ]
});

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { cartArray: props.cartArray, location: props.location };
    this.cartModalRef = React.createRef();
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    console.log(nextProps);
    this.setState({
      cartArray: nextProps.cartArray,
      location: nextProps.location
    });
  };

  // showModal = () => {
  //   this.setState({
  //     visible: true
  //   });
  // };

  // handleCancel = e => {
  //   this.setState({
  //     visible: false
  //   });
  // };

  // handleOrderNow = () => {
  //   // Modal.success({
  //   //   content:
  //   //     "Order placed successfully with order number RX127859, you will be notified on order confirmation and pick up information shortly"
  //   // });
  //   notification["success"]({
  //     message: "Order Sucessfull",
  //     description:
  //       "Order placed successfully with order number RX127859, you will be notified on order confirmation and pick up information shortly."
  //   });
  //   this.setState({
  //     visible: false
  //   });
  // };

  render() {
    const count = this.state.cartArray && this.state.cartArray.length;
    console.log(this.state);
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
        <Col>
          <Badge
            size="small"
            count={count}
            style={{ backgroundColor: "#1c9406" }}
          >
            <IconFont
              className="menu-bar-pane-icon"
              type="icon-shoppingcart"
              onClick={() => {
                this.cartModalRef.current.showModal();
              }}
              style={{
                color: "#ffffff",
                fontSize: "25px"
              }}
            />
          </Badge>
          <CartModal
            cartArray={this.state.cartArray}
            location={this.state.location}
            ref={this.cartModalRef}
          />
        </Col>
      </Row>
    );
  }
}
export default Footer;
