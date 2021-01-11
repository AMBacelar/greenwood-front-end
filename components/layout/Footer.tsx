import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

import styles from './Footer.scss';
import imageUrl from 'utils/imageUrl';

export const Footer = () => (
  <footer>
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col md={4}>
            <div className={styles.branding}>
              <img
                alt="Greenwood branding"
                className={styles.footerLogo}
                src={imageUrl('/logo_dark.png')}
              />
              <p className={styles.mission}>
                Changing the narrative of Black Businesses as a whole. Shining a
                light on new, fresh ventures whilst enabling the black community
                to succeed in the professional fields that they wish to follow.
              </p>
            </div>
          </Col>
          <Col md={2}>
            <h4 className={styles.header}>Quick Links</h4>
            <ul className={styles.footerList}>
              <li><Link passHref href="/">Home</Link></li>
              <li><Link passHref href="/aboutus">About Us</Link></li>
              <li>The Catalogue</li>
              <li><Link passHref href="/article">Blogs</Link></li>
              <li>The App</li>
            </ul>
          </Col>
          <Col md={2}>
            <h4 className={styles.header}>Quick Links</h4>
            <ul className={styles.footerList}>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>GDPR</li>
            </ul>
          </Col>
          <Col md={4}>
            <h4 className={styles.header}>Contact Us</h4>
            <p className={styles.contactText}>
              Feel free to get in touch with us via phone or send us a message
            </p>
            <p className={styles.phoneNumber}>+4479 000 0000</p>
            <p className={styles.email}><a href="mailto:info@thegreenwoodapp.com">info@thegreenwoodapp.com</a></p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className={styles.baseBar}>
      <Container>
        <Row>
          <Col sm={6}>&copy; 2020 Greenwood Network. All Rights reserved</Col>
          <Col sm={6} className={styles.meta}>
            <a>Privacy Policy</a>
            <a>Terms and Conditions</a>
          </Col>
        </Row>
      </Container>
    </div>
  </footer>
);

export default Footer;
