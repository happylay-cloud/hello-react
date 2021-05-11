import React from "react";

import { Carousel } from "antd";
import { Spin } from "antd";
import { Button, notification } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

class Home extends React.Component {
  openNotification = () => {
    notification.open({
      key: "唯一键",
      message: "标题",
      description: "描述",
    });
    setTimeout(() => {
      notification.open({
        key: "唯一键",
        message: "新的标题",
        description: "新的描述",
      });
    }, 1000);
  };
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <Spin />
        <Button type="primary" onClick={this.openNotification}>
          打开消息盒子
        </Button>
      </div>
    );
  }
}

export default Home;
