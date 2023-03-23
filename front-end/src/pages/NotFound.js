import { Alert, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Alert variant="warning" className="p-5 border border-5 ">
        <h1>Ooops la pagina non esiste</h1>
        <Link to="/">Torna alla home page</Link>
      </Alert>
    </Container>
  );
};

export default NotFound;
