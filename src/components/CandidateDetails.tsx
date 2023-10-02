import { List, Checkbox, Avatar, Row } from "antd";

const styles = {
    details: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
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
      background: "#F3FAFC"
    },
    systemTag: {
      color: "#1D4ED8",
      fontSize: 8, 
    }
  }
  
const candidateDetails = (item, index) => {
    const {currentResidence, firstName, lastName, education, tags} = item;
    return <List.Item>
      <Checkbox />
      <List.Item.Meta
        avatar={
          <Avatar
            src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
          />
        }
        title={<a href="https://ant.design">
          {`${firstName} ${lastName}`}
          </a>}
        description={<article style={styles.details}>
        <p style={styles.residence}>{currentResidence}</p>
        <p style={styles.school}>
          {education.highestLevel} - {education.school} ({education.startDate} - {education.endDate})
        </p>
        <Row>
        {tags.system.map(tag => <span style={styles.systemTag}>#{tag}</span>)}
        </Row>
        <Row>
        {tags.user.map(tag => <span style={styles.userTag}>{tag}</span>)}
        </Row>
          </article>}
      />

    </List.Item>
        }
        
        export default candidateDetails