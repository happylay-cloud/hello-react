import React from "react";

class JsxTest extends React.Component {
  showData = () => {
    console.log(this.refs.input.value);
  };
  render() {
    return (
      <div>
        <input ref="input" type="text" />
        <button ref="input2" onClick={this.showData}>
          点我
        </button>
        <input onBlur={this.showData} type="text" />
        失去焦点
      </div>
    );
  }
}

export default JsxTest;
