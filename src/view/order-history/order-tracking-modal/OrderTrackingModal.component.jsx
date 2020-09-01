import React, { Component } from "react";
import { Row, Col, Modal, Steps, Button } from "antd";
import axios from "axios";
import Barcode from "../../../assets/images/barcode.jpg";
import { SERVER } from "../../../config/server.config";
import "./OrderTrackingModal.component.css";

const { Step } = Steps;

class OrderTrackingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      barcode: false,
      orderId: "",
      whsId: "",
      whsId: "",
      estDelTime: "",
    };
  }

  showModal = (orderDetails) => {
    console.log(true);
    this.setState({
      visible: true,
      orderId: orderDetails.ordNr,
      orderStatus: orderDetails.ordSts,
      whsId: orderDetails.whseId,
      estDelTime: orderDetails.estDelvDt.substring(0, 16),
    });
  };

  // fetchDelay = ()=>{
  //   const url = `${SERVER}/order/delay/1/${orderId}/N/`;
  //   const _this = this;
  //   axios
  //     .get(url, { headers: { contentType: "application/json" } })
  //     .then(response => {
  //       //handle success
  //       console.log(response);
  //       // if (response.data.response.history) {
  //       //   _this.setState({ orderHistoryArray: response.data.response.history });
  //       // }
  //     })
  //     .catch(response => {
  //       //handle error
  //       console.log(response);
  //     });
  // }

  handleConfirmPickup = () => {
    // const url = `${SERVER}/order/confirmPickup/${this.state.whsId}`;
    // const _this = this;
    // axios
    //   .get(url, { headers: { contentType: "application/json" } })
    //   .then(response => {
    //     //handle success
    //     console.log(response);
    //     if (response.data.status) {
    //       _this.setState({
    //         barcode: true,
    //         queueCount: response.data.response
    //       });
    //     }
    //     // }
    //   })
    //   .catch(response => {
    //     //handle error
    //     console.log(response);
    //   });
    this.setState({
      barcode: true,
      queueCount: 2,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const orderStatusValue = () => {
      console.log(this.state.orderStatus);
      if (this.state.orderStatus === "Sub") return 1;
      else if (this.state.orderStatus === "Accped") return 1;
      else if (this.state.orderStatus === "Prep") return 2;
      else if (this.state.orderStatus === "Ready") return 3;
      else if (this.state.orderStatus === "Cmpled") return 4;
    };
    const orderStatus = orderStatusValue();
    return (
      <div>
        <Modal
          title="Order Tracking"
          className="modal-frame"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          forceRender={true}
          width={425}
        >
          <Row>
            <Steps
              size="small"
              progressDot
              current={orderStatus}
              direction="vertical"
            >
              <Step
                title="Ordered"
                description="Order is placed and accepted"
              />
              <Step title="Preparing" description="Order is being prepared" />
              <Step title="Packing" description="Order is being packed" />
              <Step
                title="Ready"
                description="Order is ready for pick-up/delivery"
              />
              <Step
                title="Completed"
                description="Order is picked-up/delivered"
              />
            </Steps>
          </Row>
          {!this.state.barcode && (
            <div>
              <Row type="flex" align="middle" justify="center">
                <span className="delay-lable">
                  Estimated Arrival/Pickup time
                </span>
              </Row>
              <Row type="flex" align="middle" justify="center">
                <span className="delay-counter">{this.state.estDelTime}</span>
              </Row>
              <Row type="flex" align="middle" justify="space-between">
                <span className="welcome-text">
                  Welcome to Sysco Warehouse, Houston
                </span>
              </Row>
              <Row type="flex" align="middle" justify="space-between">
                <span className="queue-text">
                  Help us to assign you to a queue, Please confirm
                </span>
              </Row>
              <Row type="flex" align="middle" justify="center">
                <Button
                  className="confirm-btn"
                  onClick={
                    // this.setState({ barcode: true });
                    this.handleConfirmPickup
                  }
                  size="small"
                >
                  Confirm
                </Button>
              </Row>
            </div>
          )}
          {this.state.barcode && (
            <div>
              <Row type="flex" align="middle" justify="space-around">
                <Col>
                  <Row>
                    <span className="welcome-text">Your Token</span>
                  </Row>
                  <Row type="flex" align="middle" justify="center">
                    <span className="queue-number-box">
                      {this.state.queueCount}
                    </span>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <span className="welcome-text">Your Lane</span>
                  </Row>
                  <Row type="flex" align="middle" justify="center">
                    <span className="lane-number-box">2</span>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <span className="est-text">Est time of pick up</span>
                  </Row>
                  <Row type="flex" align="middle" justify="center">
                    <span className="est-text">15 mins</span>
                  </Row>
                </Col>
              </Row>

              <Row type="flex" align="middle" justify="center">
                <span className="queue-text">
                  Please show this barcode to warehose operator while picking up
                </span>
              </Row>
              <Row type="flex" align="middle" justify="center">
                <img className="barcode-img" src={Barcode} alt="barcode" />
              </Row>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}
export default OrderTrackingModal;
