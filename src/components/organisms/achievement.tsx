import { Avatar, Button, Card, Col, Row, Space, Typography } from "antd";
import React from "react";
import styles from "./achievement.module.scss";
import {
  StarTwoTone,
  TrophyTwoTone,
  ArrowRightOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import STATIC_TEXT from "@netbook/__Fixtures__/ui-static-text";

const Achievement: React.FC = () => {
  const {
    HOME: { ACHIEVEMENT },
  } = STATIC_TEXT;
  const { RATING, REWARDS, OUR_ACHIEVEMENT } = ACHIEVEMENT;
  return (
    <Row
      justify="space-between"
      className={`${styles["achievement"]} px-135 py-48 `}
    >
      {/* rating */}
      <Col span={7}>
        <Card hoverable>
          <Space direction="vertical">
            <Space className="mb-24">
              <StarTwoTone className={styles["achievement-icon"]} />
              <Typography.Text className={styles["achievement-text"]}>
                {RATING.NO_OF_RATING}
              </Typography.Text>
            </Space>
            <Space className={styles["achievement-meta"]}>
              <Avatar.Group size="small">
                {RATING.USERS.map((user, userIndex) => (
                  <Avatar key={userIndex} src={user} />
                ))}
              </Avatar.Group>
              <Typography.Text
                className={styles["achievement-meta-text"]}
                strong
              >
                {RATING.NO_OF_MEMBERS}
              </Typography.Text>
              <Typography.Text>{RATING.MEMBERS}</Typography.Text>
            </Space>
            <Typography.Paragraph type="secondary" className="mt-32">
              {RATING.RATING_DESCRIPTION}
            </Typography.Paragraph>
            <Typography.Link className={styles["achievement-action-animate"]}>
              {RATING.CTA.JOIN_COMMUNITY}{" "}
              <ArrowRightOutlined className={styles["animate-on-hover"]} />
            </Typography.Link>
          </Space>
        </Card>
      </Col>
      {/* awards */}
      <Col span={7}>
        <Card hoverable>
          <Space direction="vertical">
            <Space className="mb-24">
              <TrophyTwoTone className={styles["achievement-icon"]} />
              <Typography.Text className={styles["achievement-text"]}>
                {REWARDS.TITLE}
              </Typography.Text>
            </Space>
            <Space className={styles["achievement-meta"]}>
              <GithubOutlined className={styles["achievement-meta-icon"]} />
              <Typography.Text>{REWARDS.BEST}</Typography.Text>

              <Typography.Text
                className={styles["achievement-meta-text"]}
                strong
              >
                {REWARDS.YEARS}
              </Typography.Text>
              <Typography.Text>{REWARDS.MEMBER}</Typography.Text>
            </Space>
            <Typography.Paragraph type="secondary" className="mt-32">
              {REWARDS.AWARDS_DESCRIPTION}
            </Typography.Paragraph>
            <Typography.Link className={styles["achievement-action-animate"]}>
              {REWARDS.CTA.GO_TO_AWARDS}{" "}
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
          <Typography.Text className={styles["about-achievement"]}>
            {OUR_ACHIEVEMENT.TITLE}
          </Typography.Text>
          <Typography.Title
            level={2}
            className={`${styles["about-achievement-heading"]} mt-none`}
          >
            {OUR_ACHIEVEMENT.CONNECTING_DIGITAL}
          </Typography.Title>
          <Typography.Paragraph type="secondary" className="mt-10">
            {OUR_ACHIEVEMENT.SCOPE_OF_MEDIA}
          </Typography.Paragraph>
          <Button
            className={styles["achievement-action-animate"]}
            type="primary"
            size="large"
          >
            {OUR_ACHIEVEMENT.CTA.DISCOVER_ME}{" "}
            <ArrowRightOutlined className={styles["animate-on-hover"]} />
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default Achievement;
