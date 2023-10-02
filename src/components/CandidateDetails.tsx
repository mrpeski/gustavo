import { List, Checkbox, Avatar, Row } from "antd";
import { FC } from "react";

const styles: any = {
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 30,
    fontSize: 20,
  },
  wrapper: {
    backgroundColor: "white",
    padding: 16,
    display: "flex",
    gap: 24,
  },
  title: {
    color: "#000",
    fontSize: 14,
    fontWeight: 600,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  residence: {
    color: "#000",
    fontSize: 10,
    fontWeight: 500,
  },
  school: {
    color: "#000",
    fontSize: 10,
    fontWeight: 300,
  },
  userTag: {
    display: "flex",
    padding: "2px 10px",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 16,
    color: "#037092",
    fontSize: 8,
    fontWeight: 500,
    background: "#F3FAFC",
  },
  systemTag: {
    color: "#1D4ED8",
    fontSize: 8,
  },
};

const Description: FC<{ item: any }> = ({ item }) => {
  const { currentResidence, firstName, lastName, education, tags } = item;

  return (
    <Row align={"middle"} style={styles.wrapper}>
      <span className="Avatar" style={styles.avatar}>
        {`${firstName[0]} ${lastName[0]}`}
      </span>

      <article style={styles.details}>
        <a
          href="https://ant.design"
          style={styles.title}
        >{`${firstName} ${lastName}`}</a>
        <p style={styles.residence}>{currentResidence}</p>
        <p style={styles.school}>
          {education.highestLevel} - {education.school} ({education.startDate} -{" "}
          {education.endDate})
        </p>
        <Row style={{ gap: 8 }}>
          {tags.system.map((tag: string) => (
            <span style={styles.systemTag}>#{tag}</span>
          ))}
        </Row>
        <Row style={{ gap: 8 }}>
          {tags.user.map((tag: string) => (
            <span style={styles.userTag}>{tag}</span>
          ))}
        </Row>
      </article>
    </Row>
  );
};

const candidateDetails = (item: any, index: number) => {
  return (
    <List.Item style={{ background: "white" }}>
      <Checkbox />
      <List.Item.Meta description={<Description item={item} />} />
    </List.Item>
  );
};

export default candidateDetails;
