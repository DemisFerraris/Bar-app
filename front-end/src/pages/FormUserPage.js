import { useState, useEffect } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { postUser, getUserById, putUser } from '../api';
import {
  EMAIL_PATTERN,
  PASSWORD_PATTERN,
  TogglePasswordVisibility,
} from '../utilities';

const UserForm = ({ edit }) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [inputErrors, setInputErrors] = useState({});

  const [inputState, setInputState] = useState({
    username: '',
    dateOfBirth: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const handleInputChange = (input, value) => {
    setInputState({ ...inputState, [input]: value });
  };

  // form validate
  const validate = (inputObject) => {
    const errorObj = {};
    // valid username
    if (inputObject.username === '') {
      errorObj.username = "L'username non deve essere vuoto";
    }
    // valid dateOfBirth
    if (inputObject.dateOfBirth === '') {
      errorObj.dateOfBirth = 'La data di nascita non deve essere vuota';
    }
    if (inputObject.email === '' || !inputObject.email.match(EMAIL_PATTERN)) {
      errorObj.email = "L'email non è valida";
    }
    if (inputObject.firstName === '') {
      errorObj.firstName = 'Il nome non deve essere vuoto';
    }
    if (inputObject.lastName === '') {
      errorObj.lastName = 'Il cognome non deve essere vuoto';
    }
    if (
      inputObject.password === '' ||
      !inputObject.password.match(PASSWORD_PATTERN)
    ) {
      errorObj.password =
        'la password deve contenere da 6 a 20 caratteri comprese maiuscole e numeri';
    }
    return errorObj;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // TO DO validazione javascript
    const errorObject = validate(inputState); // dichiarazione errori
    console.log(inputState);
    let result = { ok: false, data: [] };
    if (edit) {
      // faccio la PUT
      result = await putUser(inputState, userId);
    } else {
      // faccio la POST
      result = await postUser(inputState);
    }
    if (result.ok) {
      setInputErrors({}); // se tutto va bene, errori vuoti
      // faccio la redirect
      navigate('/login');
    } else {
      // TO DO gestione errori
      setInputErrors(errorObject); // mostro errori
      console.log(result.data);
    }
  };

  useEffect(() => {
    if (edit) {
      const loadData = async () => {
        const result = await getUserById(userId);
        if (result.ok) {
          // precarico gli input con i valori dell'utente
          setInputState({
            username: result.data.username,
            dateOfBirth: result.data.dateOfBirth,
            email: result.data.email,
            firstName: result.data.firstName,
            lastName: result.data.lastName,
            password: result.data.password,
          });
        } else {
          console.log(result.data);
        }
      };
      loadData();
    }
  }, [edit, userId]);

  return (
    <>
      <h3 className="m-3 text-center">
        {edit ? 'Modifica i tuoi dati' : 'Registrati'}
      </h3>
      <hr className="border border-5 border-dark my-3" />
      <Row className="m-3 justify-content-center">
        <Form className="col-12 col-sm-6 col-lg-4" onSubmit={handleFormSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={inputState.username}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
              isInvalid={inputErrors.username ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {inputErrors.username}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="firstName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              value={inputState.firstName}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
              isInvalid={inputErrors.firstName ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {inputErrors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Cognome</Form.Label>
            <Form.Control
              type="text"
              value={inputState.lastName}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
              isInvalid={inputErrors.lastName ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {inputErrors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={inputState.password}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
              isInvalid={inputErrors.password ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {inputErrors.password}
            </Form.Control.Feedback>
            <Form.Check
              className="text-muted fw-semibold fst-italic d-flex justify-content-end mt-1"
              label="mostra password"
              onClick={TogglePasswordVisibility}
            ></Form.Check>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={inputState.email}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
              isInvalid={inputErrors.email ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {inputErrors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="dateOfBirth">
            <Form.Label>Data di nascita</Form.Label>
            <Form.Control
              type="date"
              value={inputState.dateOfBirth}
              onChange={(e) => {
                handleInputChange(e.target.id, e.target.value);
              }}
              isInvalid={inputErrors.dateOfBirth ? true : false}
            />
            <Form.Control.Feedback type="invalid">
              {inputErrors.dateOfBirth}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="mt-3">
            <Button type="submit">Salva</Button>
            <Link to="/" className="btn btn-primary ms-2">
              Esci
            </Link>
          </div>
        </Form>
      </Row>
    </>
  );
};

export default UserForm;
