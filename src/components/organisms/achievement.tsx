import { Avatar, Button, Card, Col, Row, Space, Typography } from "antd";
import React, { useContext } from "react";
import styles from "./achievement.module.scss";
import {
  StarTwoTone,
  TrophyTwoTone,
  ArrowRightOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import STATIC_TEXT from "@netbook/__Fixtures__/ui-static-text";
import { HomeContext } from "@netbook/contexts";

const {
  home: { achievement: staticAchievement },
} = STATIC_TEXT;

const Achievement: React.FC = () => {
  const {
    homeState: { achievement },
  } = useContext(HomeContext);
  const { rating, rewards, ourAchievement } = Object.entries(achievement).length
    ? achievement
    : staticAchievement;
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
                {rating?.noOfRating}
              </Typography.Text>
            </Space>
            <Space className={styles["achievement-meta"]}>
              <Avatar.Group size="small">
                {rating?.users.map((user: string[], userIndex: number) => (
                  <Avatar key={userIndex} src={user} />
                ))}
              </Avatar.Group>
              <Typography.Text
                className={styles["achievement-meta-text"]}
                strong
              >
                {rating?.noOfMembers}
              </Typography.Text>
              <Typography.Text>{rating?.members}</Typography.Text>
            </Space>
            <Typography.Paragraph type="secondary" className="mt-32">
              {rating?.ratingDescription}
            </Typography.Paragraph>
            <Typography.Link className={styles["achievement-action-animate"]}>
              {rating?.cta.joinCommunity}{" "}
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
                {rewards?.title}
              </Typography.Text>
            </Space>
            <Space className={styles["achievement-meta"]}>
              <GithubOutlined className={styles["achievement-meta-icon"]} />
              <Typography.Text>{rewards?.best}</Typography.Text>

              <Typography.Text
                className={styles["achievement-meta-text"]}
                strong
              >
                {rewards?.years}
              </Typography.Text>
              <Typography.Text>{rewards?.members}</Typography.Text>
            </Space>
            <Typography.Paragraph type="secondary" className="mt-32">
              {rewards?.awardsDescription}
            </Typography.Paragraph>
            <Typography.Link className={styles["achievement-action-animate"]}>
              {rewards?.cta.goToAwards}{" "}
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
            {ourAchievement?.title}
          </Typography.Text>
          <Typography.Title
            level={2}
            className={`${styles["about-achievement-heading"]} mt-none`}
          >
            {ourAchievement?.connectingDetail}
          </Typography.Title>
          <Typography.Paragraph type="secondary" className="mt-10">
            {ourAchievement?.scopeOfMedia}
          </Typography.Paragraph>
          <Button
            className={styles["achievement-action-animate"]}
            type="primary"
            size="large"
          >
            {ourAchievement?.cta.discoverMe}{" "}
            <ArrowRightOutlined className={styles["animate-on-hover"]} />
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default Achievement;
