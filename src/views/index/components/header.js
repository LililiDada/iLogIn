import React, { Component } from "react";
import "./header.less";
class Index extends Component {
  render() {
    return (
      <div className="flex-ac">
        <h1 className="header-title">学生管理</h1>
        <div className="flex-cc">
          <img src="/avatar.png" alt="avatar" className="header-avatar" />
          <span>Sammy</span>
        </div>
      </div>
    );
  }
}

export default Index;
