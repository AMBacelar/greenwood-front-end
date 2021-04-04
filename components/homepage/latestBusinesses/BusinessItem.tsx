import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./BusinessItem.module.scss";
import Link from "next/link";
import imageUrl from "../../../utils/imageUrl";

interface Props {
  thumbnailImage: string;
  displayName: string;
  shortDescription: string;
  slug: string;
}

const BusinessItem = (
  {
    thumbnailImage,
    displayName,
    shortDescription,
    slug
  }: Props
) => {
  return (
    <Col xs={12} md={4}>
      <Link href={`/business/${slug}`}>
        <div className={styles.wrapper}>
          <Row>
            <Col xs={4}>
              <img
                className={styles.thumb}
                src={imageUrl(thumbnailImage)}
                alt=""
              />
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

export default BusinessItem;
