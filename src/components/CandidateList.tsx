import React from "react";
import { Avatar, Badge, Checkbox, Divider, List, Row, Typography } from "antd";
import data from "../candidates.json";
import candidateDetails from "./CandidateDetails";
import CandidateListHeader from "./CandidateListHeader";

const CandidateList: React.FC = () => (
  <List
    style={{
      background: "white",
      borderRadius: 16, 
      overflow: "hidden", 
      padding: "8px 0"}}
    header={<CandidateListHeader />}
    bordered
    itemLayout="horizontal"
    dataSource={data}
    renderItem={candidateDetails}
  />
);

export default CandidateList;
