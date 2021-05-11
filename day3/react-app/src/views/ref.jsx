import React from "react";

class JsxTest extends React.Component {
  inputRef = React.createRef();
  showData = () => {
    const { input3 } = this;
    console.log(input3);
    console.log(this.refs.input.value);
    console.log(this.inputRef.current);
  };
  getRef = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <input ref="input" type="text" />
        <button ref="input2" onClick={this.showData}>
          点我
        </button>
        <input onBlur={this.showData} type="text" />
        失去焦点
        <input
          ref={(currentNode) => {
            this.input3 = currentNode;
          }}
          placeholder="回调函数"
          type="text"
        />
        <input type="text" placeholder="优化" ref={this.getRef} />
      </div>
    );
  }
}

export default JsxTest;
