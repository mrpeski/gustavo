import { theme, Row, Col, Button, Divider, Typography } from "antd";
import CandidateAction from "./CandidateAction";
import OpportunityBrowsing from "./OpportunityBrowsing";
import { TagIcon, UserCloseIcon, UserCheckIcon, UserVoiceIcon, MailIcon } from "./icons";

const { Title, Paragraph } = Typography;

const PageHeader = () => {
    const {
      token: { colorBgContainer,colorPrimary },
    } = theme.useToken();
    return <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col flex="385px" style={{ marginRight: 32 }}>
        <Title level={4} style={{ margin: 0, color: colorPrimary }}>
          London Internship Program
        </Title>
        <Paragraph>London</Paragraph>
      </Col>
      <Col flex="auto">
        <Row justify={"space-between"}>
          <OpportunityBrowsing />
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8
          }}>
            <Button
              size="large"
              type="default"
              icon={<TagIcon />}
              href="https://www.google.com"
            />
            <Button
              size="large"
              style={{alignSelf: "center"}}
              icon={<UserCloseIcon />}
              href="https://www.google.com"
            />
            <Button
              size="large"
              icon={<UserCheckIcon />}
              href="https://www.google.com"
            />
            <Button
              size="large"
              icon={<UserVoiceIcon />}
              href="https://www.google.com"
            />
            <Button
              size="large"
              icon={<MailIcon />}
              href="https://www.google.com"
            />
            <Divider type="vertical" />
            <CandidateAction />
          </div>
        </Row>
      </Col>
    </Row>
  }
  
  export default  PageHeader 