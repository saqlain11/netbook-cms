import { Button, Col, Input, Row, Space, Typography } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./secondary-footer.module.scss";
import STATIC_TEXT from "@netbook/__Fixtures__/ui-static-text";
import { LayoutContext } from "@netbook/contexts";

const {
  footer: {
    secondaryFooter: { footerLink, SubscribeNewsLetter },
  },
} = STATIC_TEXT;

const SecondaryFooter: React.FC = () => {
  const {
    layoutState: { staticText },
  } = useContext(LayoutContext);
const footer=staticText[0]?.staticText.footer
console.log("footer",footer);
  return (
    <Row
      justify="space-between"
      className={`${styles["secondary-footer"]} py-80 px-135`}
    >
      {footerLink.map((link, index) => (
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
            {footer?.SubscribeNewsLetter?.subscriptionHeading?? SubscribeNewsLetter.subscriptionHeading}
          </Typography.Paragraph>
          <Typography.Paragraph
            className={`${styles["subscription-text"]} my-16`}
          >
            {footer?.SubscribeNewsLetter?.subscriptionDescription ?? SubscribeNewsLetter.subscriptionDescription}
            <br />
            {footer?.SubscribeNewsLetter?.subscriptionEmail ?? SubscribeNewsLetter.subscriptionEmail}
          </Typography.Paragraph>
          <Input.Group compact>
            <Input
              className={styles["subscription-control"]}
              size="large"
              placeholder="Email Address"
            />
            <Button size="large">{SubscribeNewsLetter.cta.submit}</Button>
          </Input.Group>
        </Space>
      </Col>
    </Row>
  );
};

export default SecondaryFooter;
