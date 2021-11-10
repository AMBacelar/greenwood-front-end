import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imageUrl from '../../../utils/imageUrl';

import styles from './Section2.module.scss';

interface Props {
  featuredBlog: {
    bgImage: string;
    dateCreated: number;
    url: string;
    title: string;
    blogText: string;
  };
}

const Section2 = ({ featuredBlog }: Props) => {
  const articleText = featuredBlog.blogText
    .split('\n')
    .map((substring, index) => (
      <p className={styles['blog-text-body']} key={index}>
        {substring}
      </p>
    ));
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col>
            <div className={styles.content}>
              <Row>
                <Col md={5}>
                  <img
                    className={styles['blog-image']}
                    src={imageUrl(featuredBlog.bgImage)}
                  />
                </Col>
                <Col md={7}>
                  <div className={styles['blog-text-wrapper']}>
                    <p className={styles['blog-text-date-created']}>
                      {featuredBlog.dateCreated}
                    </p>
                    <h2 className={styles['blog-text-blog-title']}>
                      {featuredBlog.title}
                    </h2>
                    <article>{articleText}</article>
                    <a
                      href={featuredBlog.url}
                      className={styles['blog-text-button']}
                    >
                      Read More
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
