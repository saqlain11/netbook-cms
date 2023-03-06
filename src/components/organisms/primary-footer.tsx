import Facebook from "@netbook/assets/facebook.svg";
import Instagram from "@netbook/assets/instagram.svg";
import Linkedin from "@netbook/assets/linkedin.svg";
import NetbookLogo from "@netbook/assets/netbook-logo.svg";
import Twitter from "@netbook/assets/twitter.svg";
import { Col, Row, Space, Typography, Layout } from "antd";
import { Link } from "react-router-dom";
import styles from "./primary-footer.module.scss";

const { Footer } = Layout;
const PrimaryFooter: React.FC = () => {
  return (
    <Footer className={styles["primary-footer"]}>
      <Row align="middle" justify="space-between">
        <Col>
          <Typography.Text className={styles["all-reserved"]}>
            Besnik Creative Agency.
          </Typography.Text>
        </Col>
        <Col>
          <NetbookLogo color="#fff" />
        </Col>
        <Col>
          <Space>
            <Link target="_blank" to="https://www.twitter.com">
              <Twitter />
            </Link>
            <Link target="_blank" to="https://www.instagram.com">
              <Instagram />
            </Link>
            <Link target="_blank" to="https://www.facebook.com">
              <Facebook />
            </Link>
            <Link target="_blank" to="https://www.linedin.com">
              <Linkedin />
            </Link>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default PrimaryFooter;
