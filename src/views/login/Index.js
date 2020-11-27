import React from 'react';
import style from "./main.module.less"
console.log(style)
class Login extends React.Component{
    render() {
        return <div className={style.body}>注册</div>
    }
}

export default Login;