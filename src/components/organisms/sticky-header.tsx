import { forwardRef, useContext } from "react";
import styles from "./sticky-header.module.scss";
import NetbookLogo from "@netbook/assets/netbook-logo.svg";
import { SearchOutlined } from "@ant-design/icons";
import { Col, Divider, Layout, Menu, Row, Space, Input, Button } from "antd";
import STATIC_TEXT from "@netbook/__Fixtures__/ui-static-text";
import { Link } from "react-router-dom";
import { LayoutContext } from "@netbook/contexts";
import { INavigation } from "@netbook/model";

const {
  header: { navigation: staticNavigation, cta: staticCTA },
} = STATIC_TEXT;

const { Header } = Layout;
const StickyHeader = forwardRef<HTMLDivElement>((_, ref) => {
  //@todo: have to remove these error in ts
  const {
    layoutState: { navigation, staticText },
  } = useContext(LayoutContext);

  //@todo: need to refactor this
  const cta = staticText[0]?.staticText?.header?.cta;
  return (
    <div ref={ref}>
      <Header className={`${styles["sticky-header"]} px-135`}>
        <Row justify="space-between">
          <Col span={12}>
            <Space>
              <Link to="/">
                <NetbookLogo />
              </Link>
              <Menu
                className={`${styles["header-nav"]} ml-16`}
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                items={(navigation || staticNavigation).map(
                  (nav: INavigation) => {
                    return {
                      key: nav.key,
                      label: (
                        <Link
                          className={styles["header-nav-link"]}
                          to={nav.link}
                        >
                          {nav.label}
                        </Link>
                      ),
                      children: nav.children,
                    };
                  }
                )}
              />
            </Space>
          </Col>
          <Col span={5}>
            <Space>
              <Input
                size="large"
                prefix={<SearchOutlined />}
                placeholder="Search here"
              />
              <Button size="large" type="primary">
                {cta?.login ?? staticCTA.login}
              </Button>
            </Space>
          </Col>
        </Row>
      </Header>
      <Divider className="m-none" />
    </div>
  );
});

export default StickyHeader;
