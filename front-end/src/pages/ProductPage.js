import { useEffect, useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { searchProducts } from '../api';
import ProductList from '../components/product/ProductList';

const ProductPage = ({ userId }) => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const updateData = async (term) => {
    const responseData = await searchProducts(term);
    setData(responseData);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  /* serve quando si mette un button per inviare la ricerca e bisogna inserire onSubmit={handleFormSubmit} nel form o onClick={handleFormSubmit} nel button */
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   updateData(inputValue);
  // };

  useEffect(() => {
    document.title = 'Bar-app-Menu';
    updateData(inputValue); // togliere inputValue quando si usa il button
  }, [inputValue]);

  return (
    <>
      <Container>
        <Row>
          <Col className="h2">I nostri prodotti:</Col>
          <form className="w-25">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={handleInputChange}
              value={inputValue}
            ></input>
          </form>
        </Row>
      </Container>
      <hr className="border border-5 border-dark my-3" />
      <Alert className="text-center mx-3">
        <Col>
          Per effettuare l'ordinazione registrarsi o effettuare il login
        </Col>
      </Alert>

      <ProductList products={data} cartUser={userId} />
    </>
  );
};

export default ProductPage;
