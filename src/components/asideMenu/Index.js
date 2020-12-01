import React from "react";
import {Link } from "react-router-dom"
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
                    <Menu.Item icon={<UserAddOutlined />}><Link to="/index">教师管理</Link></Menu.Item>
                    <Menu.Item icon={<UserOutlined />}><Link to="/index/student">学生管理</Link></Menu.Item>
                </Menu>
            </React.Fragment>
        )
    }
}

export default AsideMenu