import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./Section1.scss";
import LatestBusinesses from "../latestBusinesses/LatestBusinesses";

export default ({ businesses }: any) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div className={styles.header}>
              <h1>Black Owned Businesses all in one palce</h1>
              <p>
                Access our collection of black owned businesses, each reviewed
                and rated by you. From small businnesses to large organisations
              </p>
              <button>check it out</button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles["latest-businesses"]}>
        <LatestBusinesses businesses={businesses} />
      </div>
    </div>
  );
};
