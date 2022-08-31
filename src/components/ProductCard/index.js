import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import shoe from "assets/shoe.jpg";

export const ProductCard = () => {
  return (
    <div className="product-card">
      <img src={shoe} alt="shoe" className="product-img" />
      <p className="font-vsm">Shoe 1</p>
      <div className="product-details">
        <p className="font-xs">Rs 2000</p>

        <div>
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiOutlineStar className="rating-star" />
          <AiOutlineStar className="rating-star" />
        </div>
      </div>
    </div>
  );
};
