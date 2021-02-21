import React, { Component } from "react";
import "./header.less";

import { getUsername, getToken } from "../../../utils/cookies";
class Index extends Component {
  render() {
    console.log(getToken());
    return (
      <div className="flex-bc">
        <h1 className="header-title">{this.props.menuName}</h1>
        <div className="flex-cc">
          <img src="/avatar.png" alt="avatar" className="header-avatar" />
          <span>{getUsername()}</span>
        </div>
      </div>
    );
  }
}

export default Index;
