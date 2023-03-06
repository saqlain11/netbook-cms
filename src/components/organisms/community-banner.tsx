import Socializing from "@netbook/assets/socializing.png";
import { Col, Row, Image, Button, Typography, Space } from "antd";
import React from "react";
import styles from "./community-banner.module.scss";
const CommunityBanner: React.FC = () => {
  return (
    <Row className={styles["community-banner"]} justify="space-between">
      <Col className={styles["description"]} span={8}>
        <Space direction="vertical">
          <Button type="primary" size="large">
            Netbook community
          </Button>
          <Typography.Title className={styles["heading"]} level={1}>
            Your Solutions For Community!
          </Typography.Title>

          <Typography.Text className={styles["type"]} type="secondary">
            More than 2 billion people in over countries use socibook to stay in
            touch with friends & family.
          </Typography.Text>
        </Space>
        <Space className={styles["community-actions"]}>
          <Button type="primary" size="large">
            About More
          </Button>
          <Button size="large">Invite Friend</Button>
        </Space>
      </Col>
      <Col span={12}>
        <Image
          alt="socializing"
          className={styles["socializing"]}
          src={Socializing}
          preview={false}
        />
      </Col>
    </Row>
  );
};

export default CommunityBanner;
