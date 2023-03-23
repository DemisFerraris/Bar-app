import { useEffect, useState } from 'react';
import { getProductsUser, deleteProductFromUser } from '../api';

import { Link, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Alert, Container, Row } from 'react-bootstrap';
import CartShow from '../components/cart/CartShow';
// import CartShow from '../components/CartShow';

const CartUser = () => {
  const { userId } = useParams();
  const [cartProduct, setCartProduct] = useState([]);

  const loadProduct = async () => {
    // data prodotti del user
    const resultProductsUser = await getProductsUser(userId);
    setCartProduct(resultProductsUser);
    // elimina prodotto
  };

  useEffect(() => {
    loadProduct();
  }, [userId]);

  if (cartProduct.length === 0) {
    return (
      <>
        <h4 className="mx-3">Il tuo carrello:</h4>
        <Link
          to={`/login-user/${userId}/products`}
          className="btn btn-primary btn-sm mx-3"
        >
          <AiOutlineArrowLeft className="me-1" />| Torna al profilo
        </Link>
        <hr className="border border-5 border-dark" />
        <div className="alert alert-info mx-3">Il tuo carrello è vuoto</div>
      </>
    );
  } else {
    return (
      <>
        {/* Sezione carrello */}
        <h4 className="mx-3">Il tuo carrello:</h4>
        <Link
          to={`/login-user/${userId}/products`}
          className="btn btn-primary btn-sm mx-3"
        >
          <AiOutlineArrowLeft className="me-1" />| Torna al profilo
        </Link>
        <hr className="border border-5 border-dark" />
        <Alert className="m-3 conatiner " variant="info">
          <Container>
            <Row className="justify-content-center">
              {cartProduct.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col col-sm-4 col-lg-3 p-3 border border-2 rounded border-dark shadow m-5 text-center bg-light"
                  >
                    <CartShow
                      item={item}
                      userId={userId}
                      deleteProduct={async () => {
                        const resultProducts = await deleteProductFromUser(
                          userId,
                          item.id
                        );
                        if (resultProducts.ok) {
                          setCartProduct(resultProducts.data);
                        } else {
                          console.log(resultProducts.data);
                        }
                        console.log('Hai eliminato ' + item.name);
                      }}
                    />
                  </div>
                );
              })}
            </Row>
          </Container>
        </Alert>
      </>
    );
  }
};

export default CartUser;
