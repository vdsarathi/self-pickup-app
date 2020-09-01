import React, { Component } from "react";
import { Row, Col, Select, Menu } from "antd";
import Footer from "./footer/Footer.component";
import OpaqueContainer from "../../component/OpaqueContainer/OpaqueContainer";
import WhiteContainer from "../../component/WhiteContainer/WhiteContainer";
import OrderList from "./orders-list/OrderList.component";

import "./OrderHistory.component.css";

const Option = Select.Option;

class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChange = (value, abc) => {
    console.log(value, abc);
  };
  render() {
    return (
      <div>
        <Row className="order-history-container">
          <Col xs={{ span: 22, offset: 1 }} lg={{ span: 10, offset: 2 }}>
            <OpaqueContainer>
              <p className="order-history-tittle">Order History</p>
              <OrderList />
            </OpaqueContainer>
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </div>
    );
  }
}
export default OrderHistory;
