import NetbookLogo from '@netbook/assets/netbook-logo.svg'
import { Col, Row, Space, Typography } from 'antd'
import { Footer } from 'antd/es/layout/layout'

const PrimaryFooter: React.FC = () => {
  return (
    <Footer style={{ backgroundColor: "#20202D", color: "#fff" }}>
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
  )
}

export default PrimaryFooter
