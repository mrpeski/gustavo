import React, { FC, PropsWithChildren, useState } from "react";
import { Layout, theme } from "antd";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

const AppLayout: FC<PropsWithChildren<{ header: FC }>> = ({
  children,
  header,
}) => {
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
          {React.createElement(header)}
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
