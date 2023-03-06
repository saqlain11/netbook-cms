import { Affix, Layout, Row } from "antd";
import StickyHeader from "./sticky-header";
import { Outlet } from "react-router-dom";
import { useRef } from "react";
import PrimaryFooter from "./primary-footer";
const { Content } = Layout;

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
      <Row></Row>
      {/* primary-footer */}
      <PrimaryFooter />
    </Layout>
  );
};

export default BaseLayout;
