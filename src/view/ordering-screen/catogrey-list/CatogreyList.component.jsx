import React, { Component } from "react";
import { Row, Col, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import ItemList from "../item-list/ItemList.component";
import "./CatogreyList.component.css";

const { TabPane } = Tabs;

class CatogreyList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // callback = key => {
  //   console.log(key);
  // };

  handleCartValuChange = cartArray => {
    console.log(cartArray);
    this.setState({ cartArray }, this.props.onCartValueChange(cartArray));
  };

  render() {
    return (
      <Tabs className="menu-tab" defaultActiveKey="1" onChange={this.callback}>
        <TabPane className="menu-tab-headings" tab="All" key="1">
          {/* <img alt={"test"} src={} /> */}
          <ItemList onCartValueChange={this.handleCartValuChange} />
        </TabPane>
        <TabPane className="menu-tab-headings" tab="Fresh vegetables" key="2">
          Fresh vegetables
        </TabPane>
        <TabPane className="menu-tab-headings" tab="Fresh fruits" key="3">
          Fresh fruits
        </TabPane>
        <TabPane className="menu-tab-headings" tab="Diary" key="4">
          Diary
        </TabPane>
        <TabPane className="menu-tab-headings" tab="Meat" key="5">
          Meat
        </TabPane>
      </Tabs>
    );
  }
}
export default CatogreyList;
