import React, { Component } from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { history } from "../app/App.component";
import "./Login.component.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: "",
      loading: false
    };
  }

  onFinish = values => {
    console.log("Received values of form: ", values);
    let _this = this;
    let _state = { message: "" };
    if (values.password === "123") {
      sessionStorage.setItem("userName", values.username);
      sessionStorage.setItem("cartArray", []);
      history.push("/order");
    } else {
      _state = { ..._state, message: "Invalid user/ Password incorrect" };
    }
    _this.setState(_state);
  };

  render() {
    return (
      <React.Fragment>
        <div className="Login-component">
          <div className="login-form">
            <Row className="logo-bottom-Margin" justify="center">
              {/* <Col>
                <img className="logo" alt="Logo" src={Sysco_Logo} />
              </Col> */}
            </Row>
            <Row>
              <Col>
                <Form
                  name="normal_login"
                  initialValues={{
                    remember: true
                  }}
                  onFinish={this.onFinish}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username!"
                      }
                    ]}
                  >
                    <Input
                      id="login-text-box"
                      placeholder="Username or Email"
                      value={this.state.username}
                      bordered={false}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!"
                      }
                    ]}
                  >
                    <Input
                      id="login-text-box"
                      type="password"
                      placeholder="Password"
                      value={this.state.username}
                    />
                  </Form.Item>
                  {this.state.message !== "" && (
                    <Form.Item>
                      <span className="login-form-message">
                        {this.state.message}
                      </span>
                    </Form.Item>
                  )}
                  <Form.Item>
                    <a className="login-form-forgot" href="">
                      Forgot password
                    </a>
                  </Form.Item>

                  <Form.Item>
                    <Button htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <a className="login-form-forgot" href="">
                      Sigin Up
                    </a>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
