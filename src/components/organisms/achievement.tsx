import { Avatar, Button, Card, Col, Row, Space, Typography } from "antd";
import React from "react";
import styles from "./achievement.module.scss";
import {
  StarTwoTone,
  TrophyTwoTone,
  ArrowRightOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const Achievement: React.FC = () => {
  return (
    <Row justify="space-between" className={styles["achievement"]}>
      {/* rating */}
      <Col span={7}>
        <Card hoverable>
          <Space direction="vertical">
            <Space className={styles["achievement-heading"]}>
              <StarTwoTone className={styles["achievement-icon"]} spin={true} />
              <Typography.Text className={styles["achievement-text"]}>
                4.8 Rating
              </Typography.Text>
            </Space>
            <Space className={styles["achievement-meta"]}>
              <Avatar.Group size="small">
                <Avatar src="https://joesch.moe/api/v1/random?key=1" />
                <Avatar src="https://joesch.moe/api/v1/random?key=2">K</Avatar>
                <Avatar src="https://joesch.moe/api/v1/random?key=3" />
              </Avatar.Group>

              <Typography.Text
                className={styles["achievement-meta-text"]}
                strong
              >
                +836k
              </Typography.Text>
              <Typography.Text>Members</Typography.Text>
            </Space>
            <Typography.Paragraph
              type="secondary"
              className={styles["achievement-description"]}
            >
              More than 2 billion we people over countries use socibooks we to
              stay in touch with friends.
            </Typography.Paragraph>
            <Typography.Link className={styles["achievement-action-animate"]}>
              Join Our Community{" "}
              <ArrowRightOutlined className={styles["animate-on-hover"]} />
            </Typography.Link>
          </Space>
        </Card>
      </Col>
      {/* awards */}
      <Col span={7}>
        <Card hoverable>
          <Space direction="vertical">
            <Space className={styles["achievement-heading"]}>
              <TrophyTwoTone className={styles["achievement-icon"]} />
              <Typography.Text className={styles["achievement-text"]}>
                Awwwards
              </Typography.Text>
            </Space>
            <Space className={styles["achievement-meta"]}>
              <GithubOutlined className={styles["achievement-meta-icon"]} />
              <Typography.Text>Best of</Typography.Text>

              <Typography.Text
                className={styles["achievement-meta-text"]}
                strong
              >
                2021
              </Typography.Text>
              <Typography.Text>Members</Typography.Text>
            </Space>
            <Typography.Paragraph
              type="secondary"
              className={styles["achievement-description"]}
            >
              More than 2 billion we people over countries use socibooks we to
              stay in touch with friends.
            </Typography.Paragraph>
            <Typography.Link className={styles["achievement-action-animate"]}>
              Go To Awards{" "}
              <ArrowRightOutlined className={styles["animate-on-hover"]} />
            </Typography.Link>
          </Space>
        </Card>
      </Col>
      {/* our-achievements */}
      <Col
        data-aos="zoom-in-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        span={8}
      >
        <Space direction="vertical">
          <Typography.Text style={{ color: "#217bf4" }}>
            Our Achievement
          </Typography.Text>
          <Typography.Title
            level={2}
            style={{ marginTop: 0, color: "#0A093D" }}
          >
            We are Connecting You The Digital Life.
          </Typography.Title>
          <Typography.Paragraph type="secondary" style={{ marginTop: "10px" }}>
            The scope the Social Media becomes crucial Is helps the business to
            directly engage with their needs and wants.
          </Typography.Paragraph>
          <Button
            className={styles["achievement-action-animate"]}
            type="primary"
            size="large"
          >
            Discover me{" "}
            <ArrowRightOutlined className={styles["animate-on-hover"]} />
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default Achievement;
