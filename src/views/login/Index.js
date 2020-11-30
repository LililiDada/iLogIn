import React from "react";
// antd
import { Card, Form, Input, Button } from "antd";
// css
import "./index.less";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: "",
    };
  }
  onFinish = (values) => {
    console.log(values);
  };

  render() {
    const validateMessages = {
      required: "${label}不能为空",
    };
    return (
      <div className="login flex-cc">
        <Card title="iLogIn" bordered={false} style={{ width: 350 }}>
          <Form
            name="nest-messages"
            labelAlign="right"
            labelCol={{ span: 5 }}
            onFinish={this.onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="username"
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
              name="psssword"
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
      </div>
    );
  }
}

export default Login;
