import React, { FC, PropsWithChildren, useState } from "react";
import {
  Button,
  Col,
  Divider,
  Layout,
  Row,
  Space,
  theme,
  Typography,
} from "antd";
import Sidebar from "./Sidebar";
import OpportunityBrowsing from "./OpportunityBrowsing";
import { SearchOutlined } from "@ant-design/icons";
import CandidateAction from "./CandidateAction";
import { MailIcon, TagIcon, UserCheckIcon, UserCloseIcon, UserVoiceIcon } from "./icons";

const { Title, Paragraph } = Typography;

const { Header, Content } = Layout;

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sidebar />
      <Layout style={{ marginLeft: 80 }}>
        <Header
          style={{
            padding: 32,
            marginBottom: 32,
            background: colorBgContainer,
          }}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col flex="385px" style={{ marginRight: 32 }}>
              <Title level={4} style={{ margin: 0 }}>
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
        </Header>
        <Content
          style={{
            padding: 32,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
