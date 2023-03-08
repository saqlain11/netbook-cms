import { Col, Row, Space, Typography, Image } from "antd";
import React from "react";
import Laptop from "@netbook/assets/about-us-img-1.png";
import Cable from "@netbook/assets/about-us-img-2.png";
import { PlayCircleTwoTone } from "@ant-design/icons";

const AboutUs: React.FC = () => {
  return (
    <Row
      justify="space-between"
      style={{ padding: "0 135px", backgroundColor: "#FFFFFF" }}
    >
      <Col style={{ marginTop: "80px" }} span={9}>
        <Space direction="vertical">
          <Typography.Text style={{ color: "#217BF4" }}>
            Why Netbooks?
          </Typography.Text>
          <Typography.Title level={2} style={{ marginTop: 0 }}>
            Why Join to Netbook Social Network?
          </Typography.Title>
          <Typography.Paragraph type="secondary" style={{ marginTop: 0 }}>
            Recent surveys have indicated that small businesses recognise the
            need they have to connect with consumer.
          </Typography.Paragraph>
        </Space>
        <Space direction="vertical" style={{ marginTop: "36px" }}>
          <Typography.Text strong>
            <PlayCircleTwoTone /> Groups
          </Typography.Text>
          <Typography.Text strong>
            {" "}
            <PlayCircleTwoTone /> Messages
          </Typography.Text>
          <Typography.Text strong>
            {" "}
            <PlayCircleTwoTone /> Share
          </Typography.Text>
        </Space>
      </Col>
      <Col span={12}>
        <Row justify="space-between" align="middle">
          <Col span={12}>
            <iframe
              style={{ borderRadius: "10px" }}
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </Col>
          <Col span={12}>
            <Space style={{ margin: "30px" }} direction="vertical">
              <Image
                style={{ borderRadius: "10px", width: "100%", height: "220px" }}
                src={Laptop}
                preview={false}
              />
              <Image
                style={{ borderRadius: "10px", width: "100%", height: "220px" }}
                src={Cable}
                preview={false}
              />
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AboutUs;
