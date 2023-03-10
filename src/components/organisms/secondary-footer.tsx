import { Button, Col, Input, Row, Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./secondary-footer.module.scss";
import STATIC_TEXT from "@netbook/__Fixtures__/ui-static-text";

const {
  footer: { secondaryFooter },
} = STATIC_TEXT;

const SecondaryFooter: React.FC = () => {
  return (
    <Row
      justify="space-between"
      className={`${styles["secondary-footer"]} py-80 px-135`}
    >
      {secondaryFooter.footerLink.map((link, index) => (
        <Col key={index}>
          <Space direction="vertical">
            <Typography.Paragraph className={styles["link-label"]}>
              {link.label}
            </Typography.Paragraph>
            {link.subLink.map((sub, index) => (
              <Link key={index} to={sub.link} className={`${styles["link"]}`}>
                {sub.label}
              </Link>
            ))}
          </Space>
        </Col>
      ))}
      <Col span={9}>
        <Space direction="vertical">
          <Typography.Paragraph
            className={`${styles["subscription-heading"]} m-none`}
          >
            Subscribe Cirkle Newsletter
          </Typography.Paragraph>
          <Typography.Paragraph
            className={`${styles["subscription-text"]} my-16`}
          >
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
