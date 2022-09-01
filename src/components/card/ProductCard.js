import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const ProductCard = ({item}) => {
  return (
    <div className="product-card">
      <img src={item.img} alt="shoe" className="product-img" />
      <p className="font-vsm">{item.name}</p>
      <div className="product-details">
        <p className="font-xs">Rs {item.price}</p>

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
