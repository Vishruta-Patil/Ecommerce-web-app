import { ProductCard } from "components/ProductCard";

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
          <ProductCard />
        </div>
      </div>
    )
}