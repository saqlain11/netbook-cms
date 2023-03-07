import { Button, Col, Input, Row, Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./secondary-footer.module.scss";

const linkMock = [
  {
    label: "Home",
    subLink: ["Home", "Community", "Events", "Contact"],
  },

  {
    label: "Resources",
    subLink: ["Blog", "News", "Guides", "Help Center"],
  },
  {
    label: "Community",
    subLink: ["News feed", "Profile", "Friends", "Forum"],
  },
  {
    label: "Main links",
    subLink: ["Members", "Activity", "Groups", "Private Group"],
  },
];
const SecondaryFooter: React.FC = () => {
  return (
    <Row justify="space-between" className={styles["secondary-footer"]}>
      {linkMock.map((link, index) => (
        <Col key={index}>
          <Space direction="vertical">
            <Typography.Paragraph className={styles["link-label"]}>
              {link.label}
            </Typography.Paragraph>
            {link.subLink.map((l, index) => (
              <Link key={index} to="/here" className={styles["link"]}>
                {l}
              </Link>
            ))}
          </Space>
        </Col>
      ))}
      <Col span={9}>
        <Space direction="vertical">
          <Typography.Paragraph className={styles["subscription-heading"]}>
            Subscribe Cirkle Newsletter
          </Typography.Paragraph>
          <Typography.Paragraph className={styles["subscription-text"]}>
            Subscribe to be the first one to know about updates.
            <br /> Enter your email
          </Typography.Paragraph>
          <Input.Group compact>
            <Input
              className={styles["subscription-control"]}
              size="large"
              placeholder="Email Address"
            />
            <Button size="large">Submit</Button>
          </Input.Group>
        </Space>
      </Col>
    </Row>
  );
};

export default SecondaryFooter;
