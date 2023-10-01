import React from "react";
import { Avatar, Badge, Checkbox, Divider, List, Row, Typography } from "antd";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const CandidateList: React.FC = () => (
  <List
    header={
      <div
        style={{
          background: "#FFF",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Row>
          <Checkbox />
          <Typography.Title level={5} style={{ margin: 0 }}>
            247 Candidates
          </Typography.Title>
        </Row>
        <Row>
          <span>Quaified</span>
          <Divider type="vertical" />
          <span>Tasks</span>
          <Badge count={25} showZero color="#faad14" />
          <Divider type="vertical" />
          <span>Disquaified</span>
          <Badge count={78} showZero color="#faad14" />
        </Row>
      </div>
    }
    bordered
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <Checkbox />
        <List.Item.Meta
          avatar={
            <Avatar
              src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
            />
          }
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);

export default CandidateList;
