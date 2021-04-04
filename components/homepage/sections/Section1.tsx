import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Section1.module.scss';
import LatestBusinesses from '../latestBusinesses/LatestBusinesses';

const Section1 = ({ businesses }: any) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <div className={styles.header}>
              <div className={styles.content}>
                <h1>Black Owned Businesses all in one palce</h1>
                <p>
                  Access our collection of black owned businesses, each reviewed
                  and rated by you. From small businnesses to large
                  organisations
                </p>
              </div>
              <a className={styles.cta} href="#">
                check it out
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles['latest-businesses']}>
        <LatestBusinesses businesses={businesses} />
      </div>
    </div>
  );
};

export default Section1;
