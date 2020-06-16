import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './Contact.scss';
import type { Contact } from '../../pages/business/[slug]';

export type Props = { address: string; contacts: Contact };

const BusinessDetailsPageHeader = ({ address, contacts }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col>
            <div>
              <h2>Location</h2>
              <p>{address}</p>
              <h2>Contact</h2>
              {contacts.telephone.map((telNumber, i) => (
                <p key={i}>tel: {telNumber}</p>
              ))}
              {contacts.fax.map((faxNumber, i) => (
                <p key={i}>fax: {faxNumber}</p>
              ))}
              {contacts.email.map((email, i) => (
                <p key={i}>email: {email}</p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BusinessDetailsPageHeader;
