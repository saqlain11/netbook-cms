import Facebook from "@netbook/assets/facebook.svg";
import Instagram from "@netbook/assets/instagram.svg";
import Linkedin from "@netbook/assets/linkedin.svg";
import NetbookLogo from "@netbook/assets/netbook-logo.svg";
import Twitter from "@netbook/assets/twitter.svg";
import { Col, Row, Space, Typography, Layout } from "antd";
import { Link } from "react-router-dom";
import styles from "./primary-footer.module.scss";
import STATIC_TEXT from "@netbook/__Fixtures__/ui-static-text";

const { Footer } = Layout;
const {
  FOOTER: { PRIMARY_FOOTER },
} = STATIC_TEXT;

const PrimaryFooter: React.FC = () => {
  return (
    <Footer className={`${styles["primary-footer"]} px-135`}>
      <Row align="middle" justify="space-between">
        <Col>
          <Typography.Text className={styles["all-reserved"]}>
            {PRIMARY_FOOTER.ALL_RESERVED}
          </Typography.Text>
        </Col>
        <Col>
          <NetbookLogo color="#fff" />
        </Col>
        <Col>
          <Space>
            {PRIMARY_FOOTER.SOCIAL_MEDIA.map(({ LINK, LOGO }, index) => (
              <Link key={index} target="_blank" to={LINK}>
                <LOGO />
              </Link>
            ))}
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default PrimaryFooter;
