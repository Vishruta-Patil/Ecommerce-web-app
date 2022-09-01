import { ProductCard } from "components/card/ProductCard";
import { useProduct } from "context/productContext";
import { ProductData } from "data/productData";
import { Link } from "react-router-dom";

export const ProductList = () => {
  const { filteredProductData } = useProduct();
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
        {filteredProductData?.length === 0 ? (
          <h1 className="empty-products">No Products Found</h1>
        ) : (
          filteredProductData?.map((item, index) => (
            <Link
              to={`/product/${item.id}`}
              style={{ textDecoration: "none" }}
              key={index}
            >
              <ProductCard item={item} key={index} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
