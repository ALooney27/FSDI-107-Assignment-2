import Product from "../components/product";
import "./catalog.css";

function Catalog() {
  return (
    <div className="catalog">
      <h1>Check out our amazing products</h1>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
//create a product component and render the quantity picker inside of the product component
//render the <Product> component 5 times into the Catalog.

export default Catalog;
