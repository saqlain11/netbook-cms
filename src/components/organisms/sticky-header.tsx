import { forwardRef } from "react";
import styles from "./sticky-header.module.scss";
import NetbookLogo from "@netbook/assets/netbook-logo.svg";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { Col, Divider, Layout, Menu, Row, Space, Input, Button } from "antd";
import STATIC_TEXT from "@netbook/__Fixtures__/ui-static-text";
import { Link } from "react-router-dom";

const { Header } = Layout;
const StickyHeader = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    HEADER: { NAVIGATION,CTA },
  } = STATIC_TEXT;
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
                items={NAVIGATION.map((nav) => {
                  return {
                    key: nav.key,
                    label: (
                      <Link className={styles["header-nav-link"]} to={nav.link}>
                        {nav.label}
                      
                       </Link>
                    ),
                    children: nav.children,
                  };
                })}
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
                {CTA.LOGIN}
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
