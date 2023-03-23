import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgBancone from '../images/bancone-bar.jpg';
import { Col, Row } from 'react-bootstrap';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Bar-app-Home';
  }, []);

  return (
    <>
      <h3 className="m-3">HomePage</h3>
      <hr className="border border-5 border-dark" />
      <div className="position-relative overflow-scroll text-center">
        <img
          src={imgBancone}
          className="img-fluid img-chaos"
          alt="Immagine bancone bar"
          style={{ height: '100%', width: '100%' }}
        />
        <div
          className="position-absolute back-shadow"
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.60)',
            color: ' white',
            top: '0',
            left: '0',
          }}
        >
          <h5 className="m-3">L’Italia dei grandi caffè storici</h5>
          <p
            className="mt-2 mb-0 "
            style={{
              fontSize: 'small',
            }}
          >
            In principio fu il caffè, quando i turchi introducono in Europa la
            bevanda nera che immediatamente conquista il gusto degli europei.
            Siamo alla fine del 1600 e in Austria nasce il primo caffè. Serve
            ancora qualche decennio e nel 1720 nasce a Venezia il Caffè Florian.
            È proprio da questo incantevole caffè veneziano che possiamo far
            iniziare la storia del bar in Italia.
          </p>
        </div>
      </div>
      <hr className="border border-5 border-dark" />

      <Col>
        <Row className="m-3 fw-bold text-center">
          <Link className="btn btn-dark btn-sm my-2" to="/">
            Home
          </Link>
          <Link className="btn btn-dark btn-sm my-2" to="/menu">
            Menu
          </Link>
          <Link className="btn btn-dark btn-sm my-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-dark btn-sm my-2" to="/register">
            Vai alla Registrazione
          </Link>
        </Row>
      </Col>
    </>
  );
};

export default HomePage;
