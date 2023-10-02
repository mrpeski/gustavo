import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import { ExpandIcon } from "./icons";

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const CandidateAction: React.FC = () => (
  <Space wrap>
    <Dropdown.Button
      size={"large"}
      type="primary"
      menu={menuProps}
      onClick={handleButtonClick}
      icon={<ExpandIcon />}
    >
      Move To Video Interview I
    </Dropdown.Button>
  </Space>
);

export default CandidateAction;
