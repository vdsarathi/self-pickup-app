import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import axios from "axios";
import WhiteContainer from "../../../component/WhiteContainer/WhiteContainer";
import TrackingModal from "../order-tracking-modal/OrderTrackingModal.component";
import { SERVER } from "../../../config/server.config";
import "./OrderList.component.css";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      orderHistoryArray: [
        {
          ordNr: "1001",
          ordSubmsnDt: "2020-09-01",
          estDelvDt: "2020-09-01 10:25:00",
          whseName: "Sysco Jackson",
          ordSts: "Ready",
        },
        {
          ordNr: "1002",
          ordSubmsnDt: "2020-09-01",
          estDelvDt: "2020-09-01 10:25:00",
          whseName: "Sysco Jackson",
          ordSts: "Ready",
        },
        {
          ordNr: "1003",
          ordSubmsnDt: "2020-09-01",
          estDelvDt: "2020-09-01 10:25:00",
          whseName: "Sysco Jackson",
          ordSts: "Completed",
        },
      ],
    };
    this.trackingModalRef = React.createRef();
  }
  onChange = (value, abc) => {
    console.log(value, abc);
  };

  componentDidMount = () => {
    // const url = `${SERVER}order/history/2091`;
    // const _this = this;
    // axios
    //   .get(url, { headers: { contentType: "application/json" } })
    //   .then(response => {
    //     //handle success
    //     console.log(response);
    //     if (response.data.response.history) {
    //       _this.setState({
    //         orderHistoryArray: response.data.response.history.reverse()
    //       });
    //     }
    //   })
    //   .catch(response => {
    //     //handle error
    //     console.log(response);
    //   });
  };

  render() {
    return (
      <React.Fragment>
        <Row type="flex" align="middle" gutter={[16, 24]}>
          {this.state.orderHistoryArray.map((order, index) => {
            return (
              <Col key={index} xs={{ span: 24 }} lg={{ span: 20, offset: 2 }}>
                <WhiteContainer>
                  <Row type="flex" align="middle" justify="end">
                    <span
                      className={
                        order.ordSts === "Completed"
                          ? "order-title-completed"
                          : "order-title-others"
                      }
                    >
                      Status : {order.ordSts}
                    </span>
                  </Row>
                  <Row type="flex" align="middle" justify="space-around">
                    <Col>
                      <Row>
                        <span className="order-title">Order Id</span>
                      </Row>
                      <Row>
                        <span className="order-detail">{order.ordNr}</span>
                      </Row>
                      <Row>
                        <span className="order-title">Ordered On</span>
                      </Row>
                      <Row>
                        <span className="order-detail">
                          {(order.ordSubmsnDt &&
                            order.ordSubmsnDt.substring(0, 10)) ||
                            "2020-08-11"}
                        </span>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <span className="order-title">Items / Price</span>
                      </Row>
                      <Row>
                        <span className="order-detail">12 / $45</span>
                      </Row>
                      <Row>
                        <span className="order-title">WHS picked from </span>
                      </Row>
                      <Row>
                        <span className="order-detail">{order.whseName}</span>
                      </Row>
                    </Col>
                  </Row>
                  <Row type="flex" align="middle" justify="end">
                    <Button
                      className="track-btn"
                      onClick={() => {
                        this.trackingModalRef.current.showModal(order);
                      }}
                    >
                      Track
                    </Button>
                  </Row>
                </WhiteContainer>
              </Col>
            );
          })}
          <TrackingModal ref={this.trackingModalRef} />
        </Row>
      </React.Fragment>
    );
  }
}
export default OrderList;
