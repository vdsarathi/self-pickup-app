import React, { Component } from "react";
import Navbar from "./navbar/Navbar.component";
import CatogreyList from "./catogrey-list/CatogreyList.component";
import Footer from "./footer/Footer.component";
import "./Order.component.css";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { cartArray: [] };
  }

  handleCartValuChange = cartArray => {
    this.setState({ cartArray });
  };

  handleLocationValueChange = location => {
    this.setState({ location });
  };

  render() {
    return (
      <div className="order-screen">
        <Navbar onLocationValueChange={this.handleLocationValueChange} />
        <CatogreyList onCartValueChange={this.handleCartValuChange} />
        <Footer
          cartArray={this.state.cartArray}
          location={this.state.location}
        />
      </div>
    );
  }
}
export default Order;
