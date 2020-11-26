import React from "react";
import { Button } from 'antd';
class Index extends React.Component {
    constructor(props) {
        super(props);
        console.log(props,'props')
        this.state = {}
    }

    render(){
        return (
            <div>
                <Button type="primary" size="large">我是按钮</Button>
                <h1>我是首页</h1>
            </div>
        )
    }
}

export default Index;
