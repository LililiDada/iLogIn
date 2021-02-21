import React from "react";
import { Drawer, Form, Button, Input, Select } from "antd";
const { Option } = Select;
class AddStudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.addVisible === this.state.visible) {
      return;
    }
    this.setState({
      visible: nextProps.addVisible,
    });
  }
  // shouldComponentUpdate(nextProps,nextStatus){
  //     if(nextProps.addVisible) {
  //         this.setState({
  //             visible:nextProps.addVisible
  //         })
  //     }
  // }
  onClose = () => {
    this.props.close(false);
  };
  render() {
    return (
      <Drawer
        title="添加学生信息"
        width={300}
        visible={this.state.visible}
        onClose={this.onClose}
        maskClosable={false}
      >
        <Form layout="vertical">
          <Form.Item
            name="studentId"
            label="学号"
            rules={[{ required: true, message: "学号不能为空" }]}
          >
            <Input placeholder="请输入学号" />
          </Form.Item>
          <Form.Item
            name="userName"
            label="姓名"
            rules={[{ required: true, message: "姓名不能为空" }]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item
            name="gender"
            label="性别"
            rules={[{ required: true, message: "性别不能为空" }]}
          >
            <Select placeholder="请选择性别" allowClear>
              <Option value="male">男</Option>
              <Option value="female">女</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="用户状态"
            rules={[{ required: true, message: "状态不能为空" }]}
          >
            <Select placeholder="请选择用户状态" allowClear>
              <Option value="normal">正常</Option>
              <Option value="ban">禁止</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <div className="flex-ac" style={{ marginTop: 10 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: 100, height: 35 }}
              >
                添加
              </Button>
              <Button onClick={this.onClose} style={{ width: 100, height: 35 }}>
                取消
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Drawer>
    );
  }
}

export default AddStudentForm;
