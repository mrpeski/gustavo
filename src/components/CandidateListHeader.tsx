import { Row, Checkbox, Typography, Divider, Badge } from "antd";

const CandidateListHeader = () => {
  return (
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
        <Typography.Title
          level={5}
          style={{
            margin: 0,
            marginLeft: 16,
            color: "#1D4ED8",
          }}
        >
          247 Candidates
        </Typography.Title>
      </Row>
      <Row>
        <span style={{ color: "#1D4ED8" }}>Quaified</span>
        <Divider type="vertical" />
        <span>Tasks</span>
        <Badge
          count={25}
          overflowCount={5000}
          color="#F8F8F8"
          style={{ color: "#444", fontWeight: 500 }}
        />
        <Divider type="vertical" />
        <span>Disquaified</span>
        <Badge
          count={78}
          overflowCount={5000}
          color="#F8F8F8"
          style={{ color: "#444", fontWeight: 500 }}
        />
      </Row>
    </div>
  );
};

export default CandidateListHeader;
