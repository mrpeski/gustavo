import React, { FC, useState } from "react";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import { DocumentIcon, ExpandIcon } from "./icons";

const FilterLabel: FC<{label: string}> = ({label}) => {
  return <div style={{display: "flex", alignItems: "center", gap:8 }}>
  <DocumentIcon width={16} height={16}/> <span>{label}</span>
  </div> 
}
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const Filters: React.FC = () => {

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const { token } = theme.useToken();

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <FilterLabel label={"Personal Information"} />,
      children: <div>{text}</div>,
      style: {paddingTop: 8}
    },
    {
      key: "2",
      label: <FilterLabel label={"Education"}/>,
      children: <div>{text}</div>,
      style: {borderTop: '1px solid #F2F2F2'}
    },
    {
      key: "3",
      label: <FilterLabel label={"Work Experience"}/>,
      children: <div>{text}</div>,
      style: {borderTop: '1px solid #F2F2F2'}
    },
  {
      key: "4",
      label: <FilterLabel label={"Activity Filter"}/>,
      children: <div>{text}</div>,
      style: {borderTop: '1px solid #F2F2F2'}
    },{
      key: "5",
      label: <FilterLabel label={"Advanced Filter"}/>,
      children: <div>{text}</div>,
      style: {borderTop: '1px solid #F2F2F2'}

    },
  ];

  return (
    <>
    <header style={{display:'flex', justifyContent:'space-between', 
    padding: "18px 16px", backgroundColor: '#FFF', 
    borderRadius: "8px 8px 0 0",
    position: 'relative',marginBottom: -8, borderBottom: '1px solid #F2F2F2'
    }}>
     <span
     style={{fontWeight: "500"}}
     >Filters</span>
      <span style={{fontWeight: "300"}}>{0} Selected</span>
    </header>

      <Collapse
        onChange={onChange}
        expandIconPosition={"end"}
        expandIcon={({ isActive }) => <ExpandIcon fill={token.colorPrimary} rotate={isActive ? 90 : 0} />}
        items={items}
      />
    </>
  );
};

export default Filters;
