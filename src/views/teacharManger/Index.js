import React from "react";
import { Button, Input, Row, Col, Table } from "antd";
import "./index.less";
const { Search } = Input;
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHeight: window.innerHeight - 64 - 60 - 60 - 64 - 55,
      columns: [
        {
          title: "编号",
          dataIndex: "key",
          width: 50,
        },
        {
          title: "学号",
          dataIndex: "age",
          width: 50,
        },
        {
          title: "姓名",
          dataIndex: "username",
          width: 50,
        },
        {
          title: "性别",
          dataIndex: "username",
          width: 50,
        },
        {
          title: "用户状态",
          dataIndex: "username",
          width: 50,
        },
      ],
    };
  }
  render() {
    console.log(window.innerHeight - 64 - 30 - 60 - 64);
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        username: `大山${i}`,
      });
    }
    return (
      <div className="student-manger">
        <Row justify="start" className="manger-button">
          <Col xs={24} sm={8} md={6} lg={4} xl={4}>
            <Button type="primary" size="large">
              导入
            </Button>
          </Col>
          <Col xs={24} sm={8} md={6} lg={4} xl={4}>
            <Button type="primary" size="large" className="add-button">
              添加
            </Button>
          </Col>
          <Col xs={12} sm={8} md={8} lg={5} xl={5}>
            <Button size="large">批量删除</Button>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Search
              placeholder="请输入学号或姓名"
              size="large"
              enterButton
              style={{ width: 300 }}
            />
          </Col>
        </Row>
        <Row>
          <Table
            columns={this.state.columns}
            dataSource={data}
            pagination={{ pageSize: 30 }}
            bordered
            scroll={{ y: this.state.tableHeight }}
          />
        </Row>
      </div>
    );
  }
}

export default Index;
