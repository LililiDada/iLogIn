import React from "react";
// antd
import { Card, Form, Input, Button, message, Spin } from "antd";
// css
import "./index.less";
import { loginRequest } from "./../../utils/api";
import { setToken, setUsername } from "./../../utils/cookies";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: "",
      loading: false,
    };
  }
  // 登录
  onFinish = (values) => {
    this.setState({
      loading: true,
    });
    loginRequest(values)
      .then((res) => {
        let data = res.data;
        setToken(data.token);
        setUsername(data.adminName);
        this.props.history.push("/index");
        message.success(res.message);
      })
      .catch((err) => {
        console.log(err, "err");
        this.setState({
          loading: false,
        });
        // message.error(err.message)
      });
  };

  render() {
    const validateMessages = {
      // eslint-disable-next-line no-template-curly-in-string
      required: "${label}不能为空",
    };
    return (
      <div className="login flex-cc">
        <Spin tip="登录中..." spinning={this.state.loading}>
          <Card title="iLogIn" bordered={false} style={{ width: 350 }}>
            <Form
              name="nest-messages"
              labelAlign="right"
              labelCol={{ span: 5 }}
              onFinish={this.onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name="adminAccount"
                label="账号"
                rules={[
                  { required: true },
                  {
                    validator(_, value) {
                      if (!isNaN(value)) {
                        return Promise.resolve();
                      }
                      return Promise.reject("账号只能为数字");
                    },
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="adminPassword"
                label="密码"
                rules={[{ required: true }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item className="login-submit">
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: 100, height: 35 }}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Spin>
      </div>
    );
  }
}

export default Login;
