import { useEffect, useRef } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Header.module.scss';

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

export const Header = ({
  avatarImage,
  // businessImage,
  descriptionLong,
  // thumbnailImage,
  verified,
  displayName,
  headerColour,
  headerImage,
  rating,
}: Props) => {
  const headerWrapper = useRef(null);
  useEffect(() => {
    if (headerWrapper.current !== null) {
      if (!!headerImage) {
        //@ts-ignore
        headerWrapper.current.style['background-image'] = `url(${headerImage})`;
      } else {
        //@ts-ignore
        headerWrapper.current.style['background-color'] = headerColour;
      }
    }
  }, []);
  return (
    <div ref={headerWrapper} className={styles.wrapper}>
      <div className={styles.header}>
        <Container>
          <Row>
            <Col>
              <div className={styles.headerWrapper}>
                <h1>{displayName}</h1>
                <p>{rating}/5</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.summaryWrapper}>
        <Container>
          <Row>
            <Col>
              <div className={styles.summary}>
                <img className={styles.avatar} src={avatarImage} />
                {verified && <p className={styles.verifiedStatus}>Verified</p>}
                <p className={styles.businessDescription}>{descriptionLong}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
