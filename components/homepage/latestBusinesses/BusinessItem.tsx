import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./BusinessItem.scss";

export type Business = {
  thumbnailImage: string;
  displayName: string;
  shortDescription: string;
};

export default ({
  thumbnailImage,
  displayName,
  shortDescription
}: Business) => {
  return (
    <Col xs={12} md={4}>
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
    </Col>
  );
};
