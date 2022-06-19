
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [{ id: 'P1', title: 'Test', price: 10, description: 'This is a first product - amazing!'},
{ id: 'P2', title: 'New Test', price: 20, description: 'This is a Second product - amazing!'}];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
