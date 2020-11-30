import React from "react";
import {Layout} from "antd"
import AssideMenu from "@/components/asideMenu/Index"
import LayoutHeader from "./components/header"
const { Header, Sider, Content } = Layout;
class Index extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "props");
    this.state = {};
  }

  render() {
    return (
      <div>
        <Layout>
          <Sider>
            <AssideMenu></AssideMenu>
          </Sider>
          <Layout>
            <Header>
              <LayoutHeader />
            </Header>
            <Content>
              内容
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Index;
