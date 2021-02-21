import React from "react";
import { Layout } from "antd";
import PrivateRouter from "@/components/privateRouter/Index";
import AssideMenu from "@/components/asideMenu/Index";
import LayoutHeader from "./components/header";
import TeacherManger from "../teacharManger/Index";
import StudentManger from "../studentManger/Index";
import "./index.less";
const { Header, Sider, Content } = Layout;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuName: "教师管理",
    };
  }

  handleMenu = (e) => {
    this.setState({
      menuName: e,
    });
  };

  render() {
    let { menuName } = this.state;
    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider>
            <AssideMenu handleMenu={this.handleMenu}></AssideMenu>
          </Sider>
          <Layout>
            <Header className="layout-header">
              <LayoutHeader menuName={menuName} />
            </Header>
            <Content className="layout-content">
              <PrivateRouter path="/index" exact component={TeacherManger} />
              <PrivateRouter path="/index/student" component={StudentManger} />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Index;
