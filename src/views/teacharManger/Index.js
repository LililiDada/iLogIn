import React from "react";
import { Button, Input, Row, Col, Table, Popconfirm } from "antd";
import "./index.less";
import AddStudentForm from "@/components/addStudentForm/Index"
const { Search } = Input;
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHeight: window.innerHeight - 64 - 60 - 60 - 64 - 56,
      columns: [
        {
          title: "编号",
          dataIndex: "key",
          align:'center',
          // width: 50,
        },
        {
          title: "学号",
          dataIndex: "age",
          align:'center',
          // width: 50,
        },
        {
          title: "姓名",
          dataIndex: "username",
          align:'center',
          // width: 50,
        },
        {
          title: "性别",
          dataIndex: "username",
          align:'center',
          // width: 50,
        },
        {
          title: "用户状态",
          dataIndex: "username",
          align:'center',
        },
        {
          title: '操作',
          key: 'operation',
          fixed: 'right',
          align:'center',
          width: 200,
          render: (text, record, index) =>  
              <div>
                <Button type="primary" style={{marginRight:10}}>通过</Button>
                <Popconfirm 
                  title="删除后数据将不可恢复"
                  onConfirm={() => this.delete(record.key)}
                  okText="确定"
                  cancelText="取消"
                >
                  <Button style={{marginRight:10}}>删除</Button>
                </Popconfirm>
              </div>
        },
      ],
      selectedRowKeys:[],
      addVisible: false
    };
  }

  // 全选
  onSelectedRowKeysChange = selectedRowKeys => {
    this.setState({selectedRowKeys})
  }

  // 批量删除
  batchDeletion = () => {
    console.log(this.state.selectedRowKeys)
  }

  // 删除
  delete = record => {
    console.log(record)
  }

  // 添加
  addForm = () => {
    this.setState({
      addVisible:true
    })
  }

  render() {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        username: `大山${i}啊`,
      });
    }
    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      fixed: true,
      onChange: this.onSelectedRowKeysChange
    };
    return (
      <div className="student-manger">
        <AddStudentForm addVisible={this.state.addVisible}/>
        <Row justify="start" className="manger-button">
          <Col xs={24} sm={8} md={6} lg={4} xl={4}>
            <Button type="primary" size="large">
              导入
            </Button>
          </Col>
          <Col xs={24} sm={8} md={6} lg={4} xl={4}>
            <Button type="primary" size="large" className="add-button" onClick={this.addForm}>
              添加
            </Button>
          </Col>
          <Col xs={12} sm={8} md={8} lg={5} xl={5}>
            <Button size="large" onClick={this.batchDeletion}>批量删除</Button>
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
            rowSelection={rowSelection}
            columns={this.state.columns}
            dataSource={data}
            pagination={{ pageSize: 30 }}
            bordered
            scroll={{ x:true,y: this.state.tableHeight }}
          />
        </Row>
      </div>
    );
  }
}

export default Index;
