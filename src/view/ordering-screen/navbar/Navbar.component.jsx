import React, { Component } from "react";
import { Row, Col, Select, Menu } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import SelfPickup from "../../../assets/images/delivery.png";
import Delivery from "../../../assets/images/self-pickup.png";
import "./Navbar.component.css";

const Option = Select.Option;

const Locations = [
  { value: "1", disp_name: "Jackson" },
  { value: "2", disp_name: "Atlanda" },
  { value: "3", disp_name: "Jacksonville" },
  { value: "4", disp_name: "California" },
  { value: "5", disp_name: "Intermountain" }
];

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { location: "" };
  }

  onChange = value => {
    this.setState({ location: value }, () => {
      this.props.onLocationValueChange(value);
    });
  };

  render() {
    return (
      <Row
        className="navbar-pane"
        type="flex"
        align="middle"
        justify="space-between"
      >
        <Col>
          <EnvironmentOutlined
            style={{
              color: "#ffffff"
            }}
          />
          <Select
            showSearch
            style={{ width: 100 }}
            placeholder="Location"
            optionFilterProp="children"
            bordered={false}
            showArrow={false}
            className="location-dropdown"
            onChange={this.onChange}
            listHeight={100}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {Locations.map((location, key) => {
              return (
                <Option
                  className="dropdown-option"
                  key={key}
                  value={location.value}
                >
                  {location.disp_name}
                </Option>
              );
            })}
          </Select>
        </Col>
        <Col>
          <Menu
            //   onClick={this.handleClick}
            //   selectedKeys={[current]}
            mode="horizontal"
            className="nav-bar-menu"
          >
            <Menu.Item
              className="navbar-menu-items"
              key="self-pickup"
              icon={
                <img className="menu-item-logo" alt="Logo" src={SelfPickup} />
              }
            >
              Self Pickup
            </Menu.Item>
            <Menu.Item
              className="navbar-menu-items"
              icon={
                <img className="menu-item-logo" alt="Logo" src={Delivery} />
              }
              key="delivery"
            >
              Delivery
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    );
  }
}
export default Navbar;
