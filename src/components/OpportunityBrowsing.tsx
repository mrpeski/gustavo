import React, { FC, useState } from "react";
import type { MenuProps } from "antd";
import { Badge, Button, Dropdown, message, Space, Tooltip } from "antd";
import { ExpandIcon } from "./icons";

const ListRenderer: FC<{label: string, count: number}> = ({label, count}) =>{
  return <span style={{display: "flex",
    justifyContent: "space-between",
    padding: "8px 16px",
    height: "56px",
    alignItems: "center",
    fontSize: "16px",
    
    }}>
      {label}
      <Badge count={count} color="#F8F8F8" style={{color: "#444", fontWeight: 500}}/>
      </span>
}

const items: MenuProps["items"] = [
  {
    label: <ListRenderer label="Applied" count={1745}/>,
    key: "1",
    title: "Applied",
  },
  {
    label: <ListRenderer label="Shortlisted" count={453}/>,
    key: "2",
    title: "Shortlisted",

  },
  {
    label: <ListRenderer label="Technical Interview" count={123}/>,
    key: "3",
    title: "Technical Interview",

  },
  {
    label: <ListRenderer label="Opportunity Browsing" count={123}/>,
    key: "4",
    title: "Opportunity Browser",
  },
  {
    label: <ListRenderer label="Video Interview I" count={123}/>,
    key: "5",
        title: "Video Interview I",

  },
  {
    label: <ListRenderer label="Video Interview II" count={123}/>,   
     key: "6",
      title: "Video Interview II",
  },
  {
    label: <ListRenderer label="Video Interview III" count={123}/>,
        key: "7",
        title: "Video Interview III",
  },
  {
    label: <ListRenderer label="Offer" count={123}/>,
        key: "8",
        title: "Offer",
  },
  {
    label: <ListRenderer label="Withdrawn" count={123}/>,
        key: "9",
        title: "Withdraw",
  }, 
];

const menuProps = {
  items,
  // onClick: handleMenuClick,
  selectable: true,
  defaultSelectedKeys: ['4'],
};

const OpportunityBrowsing: React.FC = () => {
  const [selected, setSelected] = useState<string>('Opportunity Browsing');

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    const item: any = items.find(item => item?.key === e.key)
    if(item?.title) setSelected(item?.title)
};
  return <Space wrap>
    <Dropdown 
      menu={{...menuProps, onClick: handleMenuClick}}>
      <Button
        size="large"
        style={{ 
          boxShadow: "0px 4px 25px 0px #1D4ED80D", 
          width: 321,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: 'none',
          borderRadius: "16px",
          color: "#1D4ED8",
          fontWeight: "500",
         }}
      >
          <span>{selected}</span>
          {/* <DownOutlined /> */}
          <ExpandIcon fill="#1D4ED8"/>
      </Button>
    </Dropdown>
  </Space>
};

export default OpportunityBrowsing;
