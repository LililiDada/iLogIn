import React from "react";
import {Drawer,Form, Button,Input,Select} from "antd";
const { Option } = Select;
class AddStudentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visible: false };
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            visible:nextProps.addVisible
        })
    }
    // shouldComponentUpdate(nextProps,nextStatus){
    //     if(nextProps.addVisible) {
    //         this.setState({
    //             visible:nextProps.addVisible
    //         })
    //     }
    // }
    onClose = () => {
        this.setState({
            visible: false,
        });
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
                <Form
                    layout="vertical"
                >
                    <Form.Item
                        name="studentId"
                        label="学号"
                        rules={[{ required: true, message: 'Please enter user name' }]}
                        >
                        <Input placeholder="Please enter user name" />
                    </Form.Item>
                    <Form.Item
                        name="userName"
                        label="姓名"
                        rules={[{ required: true, message: 'Please enter user name' }]}
                        >
                        <Input placeholder="Please enter user name" />
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        label="性别"
                        rules={[{ required: true, message: 'Please select an owner' }]}
                        >
                        <Select placeholder="Please select an owner" allowClear>
                            <Option value="male">男</Option>
                            <Option value="female">女</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="status"
                        label="用户状态"
                        rules={[{ required: true, message: 'Please select an owner' }]}
                        >
                        <Select placeholder="Please select an owner" allowClear>
                            <Option value="male">男</Option>
                            <Option value="female">女</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <div className="flex-ac" style={{marginTop:10}}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ width: 100, height: 35 }}
                            >
                                添加
                            </Button>
                            <Button
                                onClick={this.onClose}
                                style={{ width: 100, height: 35 }}
                            >
                                取消
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Drawer>
        )
    }
}

export default AddStudentForm