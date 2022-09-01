import { CartCard } from "components/card/CartCard";
import { useProduct } from "context/productContext";
import { FiShoppingBag } from "react-icons/fi";

export const Cart = () => {
  const { productState } = useProduct();
  const { cart } = productState;

  return (
    <div className="cart-content mild-shadow ">
      <div className="store-section-header justify-between">
        <p className="font-sm">CART</p>
        <FiShoppingBag className="font-sm" />
      </div>

      {cart.length === 0 ? (
        <p className="font-xs flex-center cart-tag-line">
          What's stopping you, designer?
        </p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <CartCard product={product}/>
          ))}
          
        </div>
      )}

      <div className="cart-footer">
        <div className="flex cart-footer-content">
          <div className="align-center cart-footer-unit">
            <span className="material-icons font-xs ">location_on</span>
            <p className="font-xs">Home</p>
          </div>

          <div className="align-center cart-footer-unit">
            <span className="material-icons font-xs">calendar_today</span>
            <p className="font-xs">Select date</p>
          </div>
        </div>

        <div className="flex-center">
          <button className="hero-btn order-btn">order now</button>
        </div>
      </div>
    </div>
  );
};
