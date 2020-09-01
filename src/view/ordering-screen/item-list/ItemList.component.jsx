import React, { Component } from "react";
import { Row, Col, Select, Menu, Button } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { VegetableList } from "../constants/VegetableList";
// import Potato from "../../../assets/images/products/Potato.png";
// import Cabbage from "../../../assets/images/products/cabage.png";
// import Cauliflower from "../../../assets/images/products/cauliflower.png";
// import Ladiesfinger from "../../../assets/images/products/ladiesfinger.png";
// import Tomato from "../../../assets/images/products/tomato.png";
// import Broccoli from "../../../assets/images/products/broccoli.jfif";
// import Bittergourd from "../../../assets/images/products/bittergourd.png";
// import Corn from "../../../assets/images/products/corn.png";
// import Cucumber from "../../../assets/images/products/cucumber.png";
import OpaqueContainer from "../../../component/OpaqueContainer/OpaqueContainer";
import "./ItemList.component.css";

class ItemLsit extends Component {
  constructor(props) {
    super(props);
    this.state = { productQty: 0, cartArray: [] };
  }

  addBtnOnClick = newProduct => {
    const _this = this;
    let cartArray = _this.state.cartArray;
    let newCart = {};
    newCart = {
      name: newProduct.name,
      qty: 1,
      key: cartArray.length + 1,
      imgSrc: newProduct.imgSrc
    };

    newCart = { ...newCart, amount: newCart.qty * newProduct.price };

    cartArray.push(newCart);
    _this.setState(
      { cartArray },
      _this.props.onCartValueChange(this.state.cartArray)
    );
  };

  incBtnOnClick = newProduct => {
    const _this = this;
    let cartArray = _this.state.cartArray;

    const exsitingProduct = cartArray.find(product => {
      if (product.name === newProduct.name) {
        product.qty += 1;
        product.amount = product.qty * newProduct.price;
        return product;
      }
    });

    _this.setState(
      { cartArray },
      _this.props.onCartValueChange(this.state.cartArray)
    );
  };

  decBtnOnClick = newProduct => {
    const _this = this;
    let cartArray = _this.state.cartArray;

    cartArray.find(product => {
      if (product) {
        if (product.name === newProduct.name && product.qty > 1) {
          product.qty -= 1;
          product.amount = product.qty * newProduct.price;
          return product;
        } else if (product.name === newProduct.name && product.qty === 1) {
          cartArray.splice(
            cartArray.findIndex(product => product.name === newProduct.name),
            1
          );
        }
      }
    });

    _this.setState(
      { cartArray },
      _this.props.onCartValueChange(this.state.cartArray)
    );
  };

  productQty = newProduct => {
    const cartArray = this.state.cartArray;

    const check =
      cartArray.find(product => {
        return product.name === newProduct.name;
      }) !== undefined;

    return check;
  };

  getQtyCount = newProduct => {
    const cartArray = this.state.cartArray;
    return cartArray.find(product => {
      return product.name === newProduct.name;
    }).qty;
  };

  render() {
    return (
      <Row type="flex" align="middle" justify="space-between">
        <Col xs={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }}>
          <OpaqueContainer>
            <Row
              gutter={(48, { xs: 16, sm: 32, md: 24, lg: 65 })}
              type="flex"
              align="middle"
            >
              {VegetableList.map((product, index) => {
                return (
                  <Col key={index} className="product-container">
                    <OpaqueContainer>
                      <Row>
                        <Col>
                          <Row>
                            <img
                              className="product-img"
                              src={`${process.env.PUBLIC_URL}${product.imgSrc}`}
                              alt={product.name}
                            />
                          </Row>
                          <Row>
                            <span className="product-name">{product.name}</span>
                          </Row>
                          <Row>
                            <span className="product-weight">
                              {product.weigth}
                            </span>
                          </Row>
                          <Row>
                            <span className="product-price">
                              {`$${product.price}`}
                              <strike className="product-striked-price">
                                {`$${product.strikedPrice}`}
                              </strike>
                            </span>
                          </Row>
                          <Row>
                            <span className="product-pick-details">
                              Standard Pickup by <br />
                              {product.pickupDetails}
                            </span>
                          </Row>
                          <Row type="flex" align="middle" justify="center">
                            <Col>
                              {this.productQty(product) ? (
                                <div>
                                  <Button
                                    size="small"
                                    className="product-dec-btn"
                                    onClick={() => {
                                      this.decBtnOnClick(product);
                                    }}
                                  >
                                    -
                                  </Button>
                                  <span className="product-qty">
                                    {this.getQtyCount(product)}
                                  </span>
                                  <Button
                                    size="small"
                                    className="product-inc-btn"
                                    onClick={() => {
                                      this.incBtnOnClick(product);
                                    }}
                                  >
                                    +
                                  </Button>
                                </div>
                              ) : (
                                <Button
                                  size="small"
                                  className="product-add-btn"
                                  onClick={() => {
                                    this.addBtnOnClick(product);
                                  }}
                                >
                                  Add
                                </Button>
                              )}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </OpaqueContainer>
                  </Col>
                );
              })}
            </Row>
          </OpaqueContainer>
        </Col>
      </Row>
    );
  }
}
export default ItemLsit;
