import { Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contacts = () => {
  return (
    <>
      <Col className="m-3">
        <hr />
        <h4>Contacts</h4>
        <h5>Email: www.bar.app@barapp.com</h5>
        <h5>Tel: 001002003004</h5>
        <h5>
          <FaInstagram /> | bar.app
        </h5>
        <h5>
          <FaLinkedin /> | www.linkedin.com/in/bar-app
        </h5>
        <hr />
      </Col>
    </>
  );
};

export default Contacts;
