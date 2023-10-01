import React, { createElement, useState } from "react";
import { Menu, Button, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import {
  Home,
  ChevronRight,
  Calendar,
  AndroidShare,
  DocumentIcon,
  NotebookIcon,
  HeartIcon,
  UserGroupIcon,
  AppLogo,
  SettingsIcon,
} from "./icons";
import { v4 } from "uuid";
import { navConfg } from "./Sidebar/config";

const collapsedStyle = {
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Sider
      className="Sidebar"
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        background: colorBgContainer,
        top: 0,
        bottom: 0,
        padding: "32px 0",
        position: "fixed",
        boxShadow: "0px 4px 23px 0px #0000000D",
      }}
    >
      <div className="" style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
        <AppLogo />
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          width: "auto",
          gap: 12,
          // flex: "auto",
          border: "none",
          padding: 12,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <style>
          {`
          .ant-menu-title-content {
            display: none !important;
          }
          `}
        </style>

        {navConfg.map((config) => (
          <Menu.Item
            icon={config.icon}
            style={collapsed ? { ...collapsedStyle } : undefined}
          >
            {!collapsed ? <span>{config.label}</span> : null}
          </Menu.Item>
        ))}
        <Menu.Item>
          <Button
            style={{ background: "transparent", border: "none" }}
            icon={<ChevronRight />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Menu.Item>
      </Menu>
      <section className="footer" style={{
        alignItems:'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 48
        }}>
          <SettingsIcon />
        <span className="Avatar">MK</span>
      </section>
    </Sider>
  );
};

export default Sidebar;
