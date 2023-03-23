import { ButtonToolbar, Col, ButtonGroup, Button } from 'react-bootstrap';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './user.css';

const User = ({ user, onDelete }) => {
  return (
    <>
      <Col>
        Nome e cognome:{' '}
        <span className="fw-bolder">
          {user.firstName} - {user.lastName}
        </span>
      </Col>
      <Col>
        Username: <span className="fw-bolder">{user.username}</span>
      </Col>
      <Col>
        Password:{' '}
        <span className="fw-bolder" id="psw">
          {user.password}
        </span>
      </Col>
      <Col>
        Email: <span className="fw-bolder">{user.email}</span>
      </Col>
      <Col>
        Data di nascita: <span className="fw-bolder">{user.dateOfBirth}</span>
      </Col>
      <ButtonToolbar>
        <ButtonGroup>
          <Button
            className="me-2"
            variant="danger"
            size="sm"
            onClick={() => {
              onDelete(user);
            }}
          >
            <MdOutlineDeleteForever className="me-1" />| Elimina la
            registrazione
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Link
            to={`/edit-user/${user.id}`}
            className="btn btn-success btn-sm me-2"
          >
            <FaPencilAlt className="me-1" />| Modifica i dati
          </Link>
        </ButtonGroup>
      </ButtonToolbar>
    </>
  );
};

export default User;
