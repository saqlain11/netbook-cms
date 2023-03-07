import { Affix, Layout } from "antd";
import StickyHeader from "./sticky-header";
import { Outlet } from "react-router-dom";
import { useRef } from "react";
import PrimaryFooter from "./primary-footer";
import SecondaryFooter from "./secondary-footer";

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
      <SecondaryFooter />
      {/* primary-footer */}
      <PrimaryFooter />
    </Layout>
  );
};

export default BaseLayout;
