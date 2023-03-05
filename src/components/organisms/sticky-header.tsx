import React, { forwardRef } from "react";
import styles from "./sticky-header.module.scss";
import NetbookLogo from "@netbook/assets/netbook-logo.svg";
import { SearchOutlined } from "@ant-design/icons";
import { Col, Divider, Layout, Menu, Row, Space, Input, Button } from "antd";

const { Header } = Layout;
const StickyHeader: React.FC = forwardRef((_, ref) => {
  return (
    <div ref={ref}>
      <Header className={styles["sticky-header"]}>
        <Row justify="space-between">
          <Col span={12}>
            <Space>
              <NetbookLogo />
              <Menu
                className={styles["nav"]}
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                items={new Array(4).fill(null).map((_, index) => {
                  const key = index + 1;
                  return {
                    key,
                    label: `nav ${key}`,
                  };
                })}
              />
            </Space>
          </Col>
          <Col span={8}>
            <Space>
              <Input
                size="large"
                prefix={<SearchOutlined />}
                placeholder="Search here"
              />
              <Button size="large" type="primary">
                Login
              </Button>
            </Space>
          </Col>
        </Row>
      </Header>
      <Divider className={styles["divider"]} />
    </div>
  );
});

export default StickyHeader;
