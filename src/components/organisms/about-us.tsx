import { Col, Row, Space, Typography, Image } from "antd";
import React from "react";
import Laptop from "@netbook/assets/about-us-img-1.png";
import Cable from "@netbook/assets/about-us-img-2.png";
import { PlayCircleTwoTone } from "@ant-design/icons";
import styles from "./about-us.module.scss"

const AboutUs: React.FC = () => {
  return (
    <Row
      justify="space-between"
      className={styles["about-us"]}
    >
      <Col
        data-aos="zoom-out"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        span={9}
        className={styles["about-netbook"]}
      >
        <Space direction="vertical">
          <Typography.Text className={styles["why-netbook"]}>
            Why Netbooks?
          </Typography.Text>
          <Typography.Title level={2} className={styles["join-netbook"]}>
            Why Join to Netbook Social Network?
          </Typography.Title>
          <Typography.Paragraph type="secondary">
            Recent surveys have indicated that small businesses recognise the
            need they have to connect with consumer.
          </Typography.Paragraph>
        </Space>
        <Space direction="vertical" >
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
          <Col
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            span={12}
          >
            <iframe
              className={styles["netbook-asset"]}
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/ML9EMYggyEE"
            ></iframe>
          </Col>
          <Col
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            span={12}
          >
            <Space className={styles["netbook-about-us-image"]} direction="vertical">
              <Image
                alt="laptop"
              className={styles["about-image-banner"]}
                src={Laptop}
                preview={false}
              />
              <Image
                alt="cable"
                className={styles["about-image-banner"]}
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
