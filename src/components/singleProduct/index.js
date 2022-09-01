import { AiFillStar, AiOutlineStar, AiOutlineLeft } from "react-icons/ai";
import blackwhite from "assets/black-white.png";
import blueWhite from "assets/blue-white.jpg";
import "pages/product/product.css";
import { Link } from "react-router-dom";
import { useProduct } from "context/productContext";
import { ADD_TO_CART, REMOVE_FROM_CART } from "reducer/productConstant";

export const SingleProductCard = ({ product }) => {
  const { productDispatch, productState } = useProduct();

  const productExists = (id) => {
    const getProduct = productState.cart.find((product) => product.id === id);
    if (getProduct) return true;
    else return false;
  };

  const isProductInCart = productExists(product.id)
  return (
    <section>
      <div className="align-center font-sm gap-2">
        <Link to="/">
          <AiOutlineLeft />
        </Link>
        <p className="">your design space</p>
      </div>
      <div className="main-product-box">
        <div className="display-img-container">
          <img src={product?.img} alt="display-img" className="display-img" />
        </div>
        <div className="flex">
          <div className="side-display-img">
            <img src={product?.img} alt="display-img" className="side-img" />
            <img src={product?.img} alt="display-img" className="side-img" />
            <img src={product?.img} alt="display-img" className="side-img" />
          </div>
          <div className="single-product-details">
            <p className="font-md">{product?.name}</p>
            <p className="font-xs">by KICKSUP</p>

            <div className="single-product-stars">
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiOutlineStar className="rating-star" />
              <AiOutlineStar className="rating-star" />
            </div>

            <p className="review-tag">80 reviews</p>
            <p className="price-tag">RS {product?.price}</p>
            <p className="offer-tag">
              Get an exclusive 20% off shopping with HDFC bank
            </p>

            <div className="product-category">
              <div className="align-center category-unit">
                <p className="category-title">Front</p>
                <img src={blackwhite} className="black-white-img" />
                <div className="square blue-square"></div>
                <img src={blueWhite} className="blue-white-img" />
              </div>

              <div className="align-center category-unit">
                <p className="category-title">Middle</p>
                <img src={blackwhite} className="black-white-img" />
                <div className="square blue-square"></div>
                <img src={blueWhite} className="blue-white-img" />
              </div>

              <div className="align-center category-unit">
                <p className="category-title">Back</p>
                <img src={blackwhite} className="black-white-img" />
                <div className="square blue-square"></div>
                <img src={blueWhite} className="blue-white-img" />
              </div>

              <div className="align-center category-unit">
                <p className="category-title">Sole</p>
                <div className="square black-square"></div>
                <div className="square blue-square"></div>
                <div className="square gray-square"></div>
              </div>

              <div className="align-center category-unit">
                <p className="category-title">Size</p>
                <div className="size-square flex-center">7</div>
                <div className="size-square flex-center">8</div>
                <div className="size-square flex-center">9</div>
                <div className="size-square flex-center">10</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex font-xs rate-prosuct-box">
        <p className="rate-product-tag">Rate Product</p>
        <div className="font-vsm">
          <AiOutlineStar className="rating-star" />
          <AiOutlineStar className="rating-star" />
          <AiOutlineStar className="rating-star" />
          <AiOutlineStar className="rating-star" />
          <AiOutlineStar className="rating-star" />
        </div>
      </div>

      <div className="flex-center product-btn-box">
        <button className="outline-btn product-btn">share Design</button>

        {isProductInCart ? (
          <button
          className="hero-btn cart-btn product-btn"
          onClick={() =>
            productDispatch({ type: REMOVE_FROM_CART, payload: product.id })
          }
        >
          remove from Cart
        </button>
        ) : (
          <button
          className="hero-btn cart-btn product-btn"
          onClick={() =>
            productDispatch({ type: ADD_TO_CART, payload: product })
          }
        >
          add to Cart
        </button>
        )}
        
      </div>
    </section>
  );
};
