import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";
import "./index.less";
class AsideMenu extends React.Component {
  state = {
    current: "/index",
    menuList: [
      {
        icon: <UserAddOutlined />,
        name: "教师管理",
        path: "/index",
      },
      {
        icon: <UserOutlined />,
        name: "学生管理",
        path: "/index/student",
      },
    ],
  };

  componentDidMount() {
    this.setState({ current: window.location.pathname });
  }

  handleClick = (e) => {
    console.log();
    this.setState({ current: e.key });
    let menuName = this.state.menuList.filter((item) => item.path === e.key);
    this.props.handleMenu(menuName[0].name);
  };
  render() {
    let { current, menuList } = this.state;
    return (
      <React.Fragment>
        <h1 className="aside-title">ILogIn</h1>
        <Menu
          onClick={this.handleClick}
          style={{ width: 200 }}
          mode="inline"
          theme="dark"
          className="aside-menu"
          selectedKeys={[current]}
        >
          {menuList.map((item) => {
            return (
              <Menu.Item icon={item.icon} key={item.path}>
                <Link to={item.path}>{item.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </React.Fragment>
    );
  }
}

export default AsideMenu;
