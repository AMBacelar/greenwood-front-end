import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./LatestBusinesses.scss";
import BusinessItem, { Business } from "./BusinessItem";

type LatestBusinesses = {
  businesses: Array<Business>;
};

export default ({ businesses }: LatestBusinesses) => {
  const renderedBusinesses = businesses.map((business, index) => (
    <BusinessItem
      key={index}
      thumbnailImage={business.thumbnailImage}
      displayName={business.displayName}
      shortDescription={business.shortDescription}
    />
  ));

  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col>
            <h3>Latest Businesses</h3>
          </Col>
        </Row>
        <Row>{renderedBusinesses}</Row>
      </Container>
    </div>
  );
};
