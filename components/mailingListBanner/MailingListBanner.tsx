import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import styles from './MailingListBanner.scss';

interface Props {}

export default ({}: Props) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col>
            <h2 className={styles.header}>Subscribe to our mailing list</h2>
            <InputGroup className={styles.mailingListInput}>
              <FormControl
                placeholder="Enter e-mail address..."
                aria-label="Enter e-mail address..."
              />
              <InputGroup.Append>
                <Button className={styles.subscribe}>Subscribe</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
