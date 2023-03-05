import { Affix, Col, Layout, Row, Space, Typography } from "antd";
import StickyHeader from "./sticky-header";
import { Outlet } from "react-router-dom";
import NetbookLogo from "@netbook/assets/netbook-logo.svg";
import { useRef } from "react";
const { Footer, Content } = Layout;

const BaseLayout: React.FC = () => {
  const headerRef = useRef(null);
  return (
    <Layout>
      <Affix>
        <StickyHeader ref={headerRef} />
      </Affix>
      <Content>
        <Outlet />
      </Content>
      <Footer style={{ backgroundColor: "#20202D", color: "#fff" }}>
        {/* primary-footer */}
        <Row align="middle" justify="space-between">
          <Col>
            <Typography.Text style={{ color: "#fff" }}>
              Besnik Creative Agency.
            </Typography.Text>
          </Col>
          <Col>
            <NetbookLogo color="#fff" />
          </Col>
          <Col>
            <Space></Space>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default BaseLayout;
