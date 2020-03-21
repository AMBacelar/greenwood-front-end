import { useEffect, useRef } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./Header.scss";
import imageUrl from "../../utils/imageUrl";

export type Props = {
  avatarImage: string;
  businessImage: string;
  descriptionLong: string;
  displayName: string;
  headerColour: string;
  headerImage: string;
  rating: number;
  thumbnailImage: string;
  verified: boolean;
};

const BusinessDetailsPageHeader = ({
  avatarImage,
  // businessImage,
  descriptionLong,
  // thumbnailImage,
  verified,
  displayName,
  headerColour,
  headerImage,
  rating
}: Props) => {
  const headerWrapper = useRef(null);
  useEffect(() => {
    if (headerWrapper.current !== null) {
      if (!!headerImage) {
        //@ts-ignore
        headerWrapper.current.style["background-image"] = `url(${imageUrl(
          headerImage
        )})`;
      } else {
        //@ts-ignore
        headerWrapper.current.style["background-color"] = headerColour;
      }
    }
  }, []);
  return (
    <div ref={headerWrapper} className={styles.wrapper}>
      <div className={styles.header}>
        <Container>
          <Row>
            <Col>
              <div className={styles["header-wrapper"]}>
                <h1>{displayName}</h1>
                <p>{rating}/5</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles["summary-wrapper"]}>
        <Container>
          <Row>
            <Col>
              <div className={styles["summary"]}>
                <img className={styles.avatar} src={imageUrl(avatarImage)} />
                {verified && (
                  <p className={styles["verified-status"]}>Verified</p>
                )}
                <p className={styles["business-description"]}>
                  {descriptionLong}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BusinessDetailsPageHeader;
