import React, { Component } from "react";
import {
  Row,
  Col,
  Table,
  Modal,
  Badge,
  Button,
  DatePicker,
  Radio,
  notification,
} from "antd";
import axios from "axios";
import moment from "moment";
import { SERVER } from "../../../config/server.config";

import "./Footer.component.css";

class CartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartArray: props.cartArray,
      location: props.location,
      visible: false,
      pickupTimeValue: null,
      pickupTimeString: "",
    };
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    this.setState({
      cartArray: nextProps.cartArray,
      location: nextProps.location,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleOrderNow = () => {
    // const url = `${SERVER}order/saveOrder`;
    // const param = {
    //   custId: 2091,
    //   whseId: 1,
    //   ordSubmsnDt: moment().format("YYYY-MM-DD hh:mm:ss"),
    //   ordSts: "Sub",
    //   delvInd: "Pick",
    //   reqDelvDt: this.state.pickupTimeString,
    //   expOrdStrtDt: moment().format("YYYY-MM-DD hh:mm:ss"),
    //   estDelvDt: moment().format("YYYY-MM-DD hh:mm:ss"),
    //   actualDelvDt: null,
    //   createBy: "",
    //   createTs: null,
    //   updtBy: null,
    //   updtTs: null,
    //   radyToPkUpInd: "N"
    // };

    // axios
    //   .post(url, param, { headers: { contentType: "application/json" } })
    //   .then(response => {
    //     //handle success
    //     console.log(response);
    //     if (response.data.status) {
    //       notification["success"]({
    //         message: "Order Sucessfull",
    //         description: `Order placed successfully with order number ${response.data.response.ordNr}, you will be notified on order confirmation and pick up information shortly.`
    //       });
    //       this.setState({
    //         visible: false
    //       });
    //     } else {
    //       notification["error"]({
    //         message: "Error in ordering",
    //         description: "Error in ordering please try after sometime."
    //       });
    //     }
    //   })
    //   .catch(response => {
    //     //handle error
    //     console.log(response);
    //   });

    notification["success"]({
      message: "Order Sucessfull",
      description: `Order placed successfully with order number RX128378, you will be notified on order confirmation and pick up information shortly.`,
    });

    this.setState({
      visible: false,
    });
  };

  disabledDate(current) {
    // Can not select days before today and today
    return current < moment().subtract(1, "days");
  }

  handlePickupDateChange = (date, dateString) => {
    console.log(date, dateString);
    this.setState({
      pickupTimeValue: date,
      pickupTimeString: dateString,
    });
  };

  render() {
    console.log(this.state);
    const columns = [
      {
        title: "",
        dataIndex: "imgSrc",
        key: "imgSrc",
        //align: "center",
        render: (text) => {
          console.log(text);
          return (
            <img
              className="modal-product-img"
              src={`${process.env.PUBLIC_URL}${text}`}
              alt={text.name}
            />
          );
        },
      },
      {
        title: "Product",
        dataIndex: "name",
        key: "name",
      },

      {
        title: "Qty",
        dataIndex: "qty",
        key: "qty",
      },
      {
        title: "Amt",
        dataIndex: "amount",
        key: "amount",
        render: (text) => <span>$ {text.toFixed(2)}</span>,
      },
    ];

    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
    };

    return (
      <div>
        <Modal
          title="Order Summary"
          className="modal-frame"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          forceRender={true}
          destroyOnClose={true}
          width={450}
        >
          <Row type="flex" align="middle" justify="end">
            <Col>
              <span className="pickup-slot-text">Pick up Slot </span>
            </Col>
            <Col>
              <DatePicker
                format="YYYY-MM-DD HH:mm:ss"
                disabledDate={this.disabledDate}
                value={this.state.pickupTimeValue}
                showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
                onChange={this.handlePickupDateChange}
              />
            </Col>
          </Row>
          <Row type="flex" align="middle" justify="space-between">
            <Col>
              <Table
                columns={columns}
                dataSource={this.state.cartArray}
                pagination={false}
                scroll={{ x: "max-content" }}
              />
            </Col>
          </Row>
          <Row type="flex" align="middle" justify="space-between">
            <Col>
              <Radio.Group value={1}>
                <Radio style={radioStyle} value={1}>
                  Pay Online
                </Radio>
                <Radio style={radioStyle} value={2}>
                  Pay using coins
                </Radio>
                <Radio style={radioStyle} disabled value={3}>
                  Pay on pick up
                </Radio>
              </Radio.Group>
            </Col>
            <Col>
              <span className="order-total-value">
                Total : $
                {this.state.cartArray
                  .reduce((a, b) => +a + +b.amount, 0)
                  .toFixed(2)}
              </span>
            </Col>
          </Row>
          <Row type="flex" align="middle" justify="end">
            <Col>
              <Button className="ordernow-btn" onClick={this.handleOrderNow}>
                Order Now
              </Button>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}
export default CartModal;
