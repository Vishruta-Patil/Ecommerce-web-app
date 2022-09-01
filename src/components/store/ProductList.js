import { ProductCard } from "components/card/ProductCard";
import { ProductData } from "data/productData";
import { Link } from "react-router-dom";

export const ProductList = () => {
  return (
    <div className="main-content mild-shadow">
      <div className="store-section-header justify-between">
        <p className="font-sm">SHOES</p>
        <div className="align-center">
          <span className="material-icons font-sm">search</span>
          <button className="outline-btn sort-btn">Sort By</button>
        </div>
      </div>

      <div className="products-content">
        {ProductData.map((item, index) => (
          <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
            <ProductCard item={item} key={index} />
          </Link>
        ))}
      </div>
    </div>
  );
};
