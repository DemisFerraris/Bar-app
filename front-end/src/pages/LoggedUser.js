import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts, getUserById, deleteUserById } from '../api';
import { Alert, Col } from 'react-bootstrap';
import { BsBoxArrowRight } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import User from '../components/user/User';
// import CartUser from '../pages/CartUser';
import ProductList from '../components/product/ProductList';

const LoggedUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleDeleteClickUser = async () => {
    const confirm = window.confirm('Sei sicuro di eliminare la registrazione?');
    if (confirm) {
      const result = await deleteUserById(userId);
      if (result.ok) {
        navigate('/login');
      } else {
        console.log(result);
      }
    }
  };

  useEffect(() => {
    const loadData = async () => {
      // data prodotti del user
      const resultProductsUser = await getUserById(userId);
      if (resultProductsUser.ok) {
        setUser(resultProductsUser.data);
      } else {
        console.log(resultProductsUser.data);
      }
      // data prodotti
      const resultProducts = await getProducts();
      if (resultProducts.ok) {
        setProducts(resultProducts.data);
      } else {
        console.log(resultProducts.data);
      }
    };

    loadData();
  }, [userId]);

  // if per evitare il map dei user senza prodotti

  return (
    <>
      {/* Sezione utente */}
      <h4 className="mx-3">Benvenuto {user.username}!</h4>
      <Alert className="m-3" variant="info">
        <Col>
          <User user={user} onDelete={handleDeleteClickUser} />
        </Col>
        <Link
          to={`/login-user/${userId}/cart`}
          className="btn btn-warning btn-sm my-2 me-2"
        >
          <AiOutlineShoppingCart />| Apri il carrello
        </Link>
        <Link to="/login" className="btn btn-primary btn-sm my-2">
          <BsBoxArrowRight className="me-1" /> | Log out
        </Link>
      </Alert>
      <hr className="border border-5 border-dark" />

      {/* Sezione prodotti */}
      <h4 className="mx-3">Menu:</h4>
      <Alert className="m-3" variant="info">
        <ProductList products={products} cartUser={userId} />
      </Alert>
    </>
  );
};
export default LoggedUser;
