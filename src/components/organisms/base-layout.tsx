import {
  Affix,
  Button,
  Col,
  Input,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";
import StickyHeader from "./sticky-header";
import { Outlet } from "react-router-dom";
import { useRef } from "react";
import PrimaryFooter from "./primary-footer";
const { Content } = Layout;
const linkMock = [
  {
    label: "Home",
    subLink: ["Home", "Community", "Events", "Contact"],
  },

  {
    label: "Home",
    subLink: ["Home", "Community", "Events", "Contact"],
  },
  {
    label: "Home",
    subLink: ["Home", "Community", "Events", "Contact"],
  },
  {
    label: "Home",
    subLink: ["Home", "Community", "Events", "Contact"],
  },
];

const BaseLayout: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  return (
    <Layout>
      <Affix>
        <StickyHeader ref={headerRef} />
      </Affix>
      <Content>
        <Outlet />
      </Content>
      {/* secondary-footer */}
      <Row
        justify="space-between"
        style={{
          backgroundColor: "#2B2B39",
          padding: "70px 135px",
          color: "#fff",
        }}
      >
        {linkMock.map((link) => (
          <Col>
            <Space direction="vertical">
              {link.subLink.map((l) => (
                <Typography.Text style={{ color: "#fff" }}>{l}</Typography.Text>
              ))}
            </Space>
          </Col>
        ))}
        <Col>
          <Space direction="vertical">
            <Typography.Title level={3} style={{ color: "#fff" }}>
              Subscribe Cirkle Newsletter
            </Typography.Title>
            <Typography.Text style={{ color: "#fff" }}>
              Subscribe to be the first one to know about updates. Enter your
              email
            </Typography.Text>
            <Input.Group compact>
      <Input style={{ width: 'calc(100% - 200px)',backgroundColor:"transparent",color:"#fff" }} defaultValue="https://ant.design" />
      <Button>Submit</Button>
    </Input.Group>
          </Space>
        </Col>
      </Row>
      {/* primary-footer */}
      <PrimaryFooter />
    </Layout>
  );
};

export default BaseLayout;
