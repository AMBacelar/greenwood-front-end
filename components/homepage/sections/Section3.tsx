import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./Section3.module.scss";
import Link from "next/link";
import imageUrl from "../../../utils/imageUrl";

interface Props {
  featuredBusinesses: Array<{
    ariaLabel: string;
    businessImage: string;
    slug: string;
  }>;
}

const Section3 = ({ featuredBusinesses }: Props) => {
  const renderImages = featuredBusinesses.map((business, index) => (
    <Link key={index} href={`/business/${business.slug}`}>
      <img
        aria-label={business.ariaLabel}
        src={imageUrl(business.businessImage)}
        className={styles["featured-business-image"]}
      />
    </Link>
  ));
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col>
            <h2 className={styles.header}>
              checkout some of the businesses that are ready to cater to you
            </h2>
            <p className={styles.text}>
              These are just a few of many. Find whatever business suits your
              need with all the information you available to you in THE
              CATALOGUE. From Makeup artists to mechanics, photographers to
              cosmetic brands. Find what you need, when you need it.
            </p>
            <div className={styles["featured-business-container"]}>
              {renderImages}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section3;
