import ProductShow from './ProductShow';

const ProductList = ({ products = [], cartUser }) => {
  if (products.length === 0)
    return (
      <div className="alert alert-info mx-3">
        Nessun prodotto da visualizzare
      </div>
    );
  return (
    <div className="row gy-4 mx-3">
      {products.map((element) => {
        return (
          <div key={element.id} className="col-12 col-sm-6 col-lg-3">
            <ProductShow item={element} cartUser={cartUser} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
