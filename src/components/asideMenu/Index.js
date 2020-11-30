import React from "react";
import { Menu } from 'antd';
import {
    UserOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import "./index.less"
class AsideMenu extends React.Component {
    render(){
        return(
            <React.Fragment>
                <h1 className="aside-title">ILogIn</h1>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 200 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    className="aside-menu"
                >
                    <Menu.Item icon={<UserAddOutlined />}>教师管理</Menu.Item>
                    <Menu.Item icon={<UserOutlined />}>学生管理</Menu.Item>
                </Menu>
            </React.Fragment>
        )
    }
}

export default AsideMenu