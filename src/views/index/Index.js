import React from "react";
class Index extends React.Component {
    constructor(props) {
        super(props);
        console.log(props,'props')
        this.state = {}
    }

    render(){
        return (
            <div>
                <h1>我是首页</h1>
            </div>
        )
    }
}

export default Index;
