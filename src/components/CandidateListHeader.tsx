import { Row, Checkbox, Typography, Divider, Badge } from "antd"

const CandidateListHeader = () => {
    return <div
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

export default CandidateListHeader