import React, { FC, PropsWithChildren, useState } from "react";
import { Layout, theme } from "antd";
import Sidebar from "./Sidebar";
const { Header, Content } = Layout;

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}></Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
          children={children}
        />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
