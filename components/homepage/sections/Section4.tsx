import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Section4.module.scss';

interface Props {
  featuredVideos: Array<{
    thumbnail: string;
    url: string;
    ariaLabel: string;
  }>;
}

const Section4 = ({ featuredVideos }: Props) => {
  const renderImages = featuredVideos.map((video, index) => (
    <a key={index} href={video.url} title={video.ariaLabel} target="_blank">
      <img
        aria-label={video.ariaLabel}
        src={video.thumbnail}
        className={styles['featured-business-image']}
      />
    </a>
  ));
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col>
            <h2 className={styles.header}>We're on YouTube</h2>
            <div className={styles['featured-business-container']}>
              {renderImages}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section4;
