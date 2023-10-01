import React, { useState } from "react";
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
} from "./icons";
import { v4 } from "uuid";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        padding: 24,
        background: colorBgContainer,
        top: 0,
        bottom: 0,
        position: "fixed",
      }}
    >
      <div className="" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ border: "none" }}
        items={[
          {
            key: "1",
            icon: <Home />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <UserGroupIcon />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <Calendar />,
            label: "nav 3",
          },
          {
            key: v4(),
            icon: <AndroidShare />,
            label: "nav 3",
          },
          {
            key: v4(),
            icon: <DocumentIcon />,
            label: "nav 3",
          },
          {
            key: v4(),
            icon: <NotebookIcon />,
            label: "nav 3",
          },
          {
            key: v4(),
            icon: <HeartIcon />,
            label: "nav 3",
          },

          {
            key: "4",
            icon: (
              <Button
                type="text"
                icon={<ChevronRight />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            ),
            label: "Collapse",
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
