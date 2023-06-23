import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product() {
  return (
    <div className="product">
      <img src="https://picsum.photos/220/220" alt=""></img>
      <h5>Titles go here</h5>
      <div className="prices">
        <label>Price:</label>
        <label>Total:</label>
      </div>
      <QuantityPicker />
    </div>
  );
}

export default Product;
