import { Button, Image } from 'react-bootstrap';
import { TiDelete } from 'react-icons/ti';

const CartShow = ({ item, deleteProduct }) => {
  return (
    <>
      <Image
        className="rounded shadow"
        src={item.image}
        alt={item.name}
        style={{ height: '10rem', width: '9rem' }}
      />
      <hr />
      <div className="fw-bold mt-3">{item.name}</div>
      <hr />
      <div>id prodotto: {item.id}</div>
      <div>{item.price} &euro;</div>
      <Button variant="danger" size="sm" onClick={deleteProduct}>
        <TiDelete />
      </Button>
    </>
  );
};

export default CartShow;
