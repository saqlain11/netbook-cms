import { Affix, Layout } from "antd";
import StickyHeader from "./sticky-header";
import { Outlet } from "react-router-dom";
import { useContext, useRef } from "react";
import PrimaryFooter from "./primary-footer";
import SecondaryFooter from "./secondary-footer";
import { LayoutContext } from "@netbook/contexts";

const { Content } = Layout;

const BaseLayout: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  return (
    <Layout>
      {/* stick-header */}
      <Affix>
        <StickyHeader ref={headerRef} />
      </Affix>
      {/* content */}
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
