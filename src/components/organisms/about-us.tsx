import { Col, Row, Space, Typography, Image } from "antd";
import React from "react";
import { PlayCircleTwoTone } from "@ant-design/icons";
import styles from "./about-us.module.scss";
import STATIC_TEXT from "@netbook/__Fixtures__/ui-static-text";

const {
  home: { aboutUs },
} = STATIC_TEXT;

const AboutUs: React.FC = () => {
  return (
    <Row justify="space-between" className={`${styles["about-us"]} px-135`}>
      {/* why-netbooks */}
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
        className={`${styles["about-netbook"]} mt-80`}
      >
        <Space direction="vertical">
          <Typography.Text className={styles["why-netbook"]}>
            {aboutUs.whyNetbooks}
          </Typography.Text>
          <Typography.Title level={2} className="m-none">
            {aboutUs.joinNetbook}
          </Typography.Title>
          <Typography.Paragraph type="secondary">
            {aboutUs.netbookSurvey}
          </Typography.Paragraph>
        </Space>
        <Space direction="vertical" className="mt-40">
          {aboutUs.netbookSharing.map((platform, platformIndex) => (
            <Typography.Text strong key={platformIndex}>
              <PlayCircleTwoTone spin={true} /> {platform}
            </Typography.Text>
          ))}
        </Space>
      </Col>
      {/* netbooks-assets */}
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
              src={aboutUs.ourIntro}
            />
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
            <Space
              className={`${styles["netbook-about-us-image"]} m-32`}
              direction="vertical"
            >
              <Image
                alt="laptop"
                className={styles["about-image-banner"]}
                src={aboutUs.aboutImageOne}
                preview={false}
              />
              <Image
                alt="cable"
                className={styles["about-image-banner"]}
                src={aboutUs.aboutImageTwo}
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
