import { Cart } from "components/store/Cart";
import { useParams } from "react-router-dom";
import "./product.css";

export const SingleProduct = () => {
  const params = useParams();
  const { productId } = params;

  return (
    <div className="single-product-container">
      <div className="single-product mild-shadow">Shree Krishna</div>

      <div className="cart-container">
        <Cart />
      </div>
    </div>
  );
};
