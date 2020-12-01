import React from "react";
import { Button,Input,Row, Col  } from 'antd';
import "./index.less"
const { Search } = Input;
class Index extends React.Component {
  render() {
    return(
      <div className="student-manger">
        <Row justify="start" className="manger-button">
          {/* <div > */}
            <Col xs={24} sm={8} md={6} lg={4} xl={4}>
              <Button type="primary" size="large">导入</Button>
            </Col>
            <Col xs={24} sm={8} md={6} lg={4} xl={4}>
              <Button type="primary" size="large" className="add-button">添加</Button>
            </Col>
            <Col xs={12} sm={8} md={8} lg={5} xl={5}>
              <Button size="large">批量删除</Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Search 
                placeholder="请输入学号或姓名"
                size="large"
                enterButton
                style={{ width: 300}}
              />
            </Col>
          {/* </div> */}
        </Row>
      </div>
    );
  }
}

export default Index;
