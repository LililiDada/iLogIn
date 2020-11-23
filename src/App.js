import { Rate , Button } from 'antd';
import "./common.less";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="hhh">哈哈</h1>
        <Rate allowHalf defaultValue={2.5} />
        <Button type="primary">我是按钮</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
