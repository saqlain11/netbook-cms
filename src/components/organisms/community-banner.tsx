import Socializing from "@netbook/assets/socializing.png";
import { Col, Row, Image, Button, Typography, Space } from "antd";
import React from "react";
import styles from "./community-banner.module.scss";
const CommunityBanner: React.FC = () => {
  return (
    <Row className={styles["community-banner"]} justify="space-between">
      {/* community-solution */}
      <Col className={styles["description"]} span={8}>
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            className={styles["community-button"]}
          >
            Netbook community
          </Button>
          <Typography.Title
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            className={styles["heading"]}
            level={1}
          >
            Your Solutions For Community!
          </Typography.Title>

          <Typography.Text
            className={styles["type"]}
            data-aos="zoom-out"
            type="secondary"
          >
            More than 2 billion people in over countries use socibook to stay in
            touch with friends & family.
          </Typography.Text>
        </Space>
        <Space className={styles["community-actions"]}>
          <Button type="primary" size="large">
            About More
          </Button>
          <Button size="large" className={styles["community-invite"]}>
            Invite Friend
          </Button>
        </Space>
      </Col>
      {/* community-banner */}
      <Col span={12}>
        <Space>
          <Image
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            alt="socializing"
            className={styles["socializing"]}
            src={Socializing}
            preview={false}
          />
        </Space>
      </Col>
    </Row>
  );
};

export default CommunityBanner;
