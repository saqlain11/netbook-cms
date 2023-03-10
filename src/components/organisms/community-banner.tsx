import { Col, Row, Image, Button, Typography, Space } from "antd";
import React, { useContext } from "react";
import styles from "./community-banner.module.scss";
import STATIC_TEXT from "@netbook/__Fixtures__/ui-static-text";
import { HomeContext } from "@netbook/contexts";

const {
  home: { community: staticCommunity },
} = STATIC_TEXT;

const CommunityBanner: React.FC = () => {
  const {
    homeState: { community },
  } = useContext(HomeContext);

  return (
    <Row
      className={`${styles["community-banner"]} px-135`}
      justify="space-between"
    >
      {/* community-solution */}
      <Col className={`${styles["description"]} pt-64`} span={8}>
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            className={styles["community-button"]}
          >
            {community.netbookCommunity ?? staticCommunity.netbookCommunity}
          </Button>
          <Typography.Title
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            className={styles["heading"]}
            level={1}
          >
            {community.netbookSolution ?? staticCommunity.netbookSolution}
          </Typography.Title>

          <Typography.Text
            className={styles["type"]}
            data-aos="zoom-out"
            type="secondary"
          >
            {community.netbookCommunitySurvey ??
              staticCommunity.netbookCommunitySurvey}
          </Typography.Text>
        </Space>
        <Space className="my-80">
          <Button type="primary" size="large">
            {community.cta?.aboutMore ?? staticCommunity.cta.aboutMore}
          </Button>
          <Button size="large" className={styles["community-invite"]}>
            {community.cta?.inviteFriend ?? staticCommunity.cta.inviteFriend}
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
            src={community.socializing ?? staticCommunity.socializing}
            preview={false}
          />
        </Space>
      </Col>
    </Row>
  );
};

export default CommunityBanner;
