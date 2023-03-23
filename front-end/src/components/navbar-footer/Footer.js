import { Container, Col, Row } from 'react-bootstrap';
import Contacts from '../Contacts';

const FooterComplete = () => {
  return (
    <>
      <hr className="border border-5 border-dark" />
      <Container
        as="footer"
        fluid
        className="bg-dark text-light p-4 text-center "
      >
        <Row>
          <Col>
            <span className="h5">Bar app &copy; dal 2023 fino ad oggi!</span>
            <Contacts />
          </Col>
        </Row>
      </Container>
      <hr className="border border-5 border-dark" />
    </>
  );
};

export default FooterComplete;
