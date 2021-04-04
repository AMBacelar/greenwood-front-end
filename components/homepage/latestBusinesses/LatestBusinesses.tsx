import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./LatestBusinesses.module.scss";
import BusinessItem from "./BusinessItem";

interface Props {
  businesses: Array<{
    thumbnailImage: string;
    displayName: string;
    shortDescription: string;
    slug: string;
  }>;
}

const LatestBusinesses = ({ businesses }: Props) => {
  const renderedBusinesses = businesses.map((business, index) => (
    <BusinessItem
      key={index}
      thumbnailImage={business.thumbnailImage}
      displayName={business.displayName}
      shortDescription={business.shortDescription}
      slug={business.slug}
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

export default LatestBusinesses;
