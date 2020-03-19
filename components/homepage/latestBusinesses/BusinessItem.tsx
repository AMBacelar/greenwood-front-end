import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./BusinessItem.scss";
import Link from "next/link";

export type Business = {
  thumbnailImage: string;
  displayName: string;
  shortDescription: string;
  businessUrl: string;
};

export default ({
  thumbnailImage,
  displayName,
  shortDescription,
  businessUrl
}: Business) => {
  return (
    <Col xs={12} md={4}>
      <Link href={businessUrl}>
        <div className={styles.wrapper}>
          <Row>
            <Col xs={4}>
              <img className={styles.thumb} src={thumbnailImage} alt="" />
            </Col>
            <Col xs={8}>
              <div className={styles.info}>
                <h4>{displayName}</h4>
                <p>{shortDescription}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  );
};
