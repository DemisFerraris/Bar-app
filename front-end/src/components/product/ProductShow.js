import { useState, useEffect } from 'react';

import { addProductFromUser } from '../../api';

import { Button, Card } from 'react-bootstrap';
import './ProductShow.css';

const ProductShow = ({ item, cartUser }) => {
  const [productCart, setProductCart] = useState({
    id: '',
    name: '',
    image: '',
    category: '',
    description: '',
    price: '',
  });

  const handleClickAddProduct = async () => {
    setProductCart({
      id: item.id,
      name: item.name,
      image: item.image,
      category: item.category,
      description: item.description,
      price: item.price,
    });
    if (productCart.id) {
      const result = await addProductFromUser(cartUser, productCart);
      window.alert(
        item.name +
          ' è stato aggiunto al carrello.\n' +
          "Grazie per l'ordinazione"
      );
      console.log(result);
    }
  };

  useEffect(() => {
    handleClickAddProduct();
  }, []);

  return (
    <Card className="border border-1 border-dark animation">
      <Card.Header style={{ height: '18rem' }}>
        <Card.Img
          variant="top"
          src={item.image}
          alt={item.name}
          style={{ height: '100%', width: '100%' }}
        />
      </Card.Header>
      <Card.Body style={{ height: '22.5rem' }}>
        <Card.Title>{item.name}</Card.Title>
        <hr />
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <span className="text-secondary">Prezzo {item.price} &euro;</span>
        <Button onClick={handleClickAddProduct} variant="success">
          Carrello
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductShow;
