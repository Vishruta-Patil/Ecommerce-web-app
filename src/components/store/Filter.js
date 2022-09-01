import { useProduct } from "context/productContext";
import { FiFilter, FiShoppingBag } from "react-icons/fi";
import {
  CLEAR_ALL_FILTERS,
  FILTER_BY_PRICE_RANGE,
  FILTER_BY_TEMPLATES,
  FILTER_BY_TYPE,
} from "reducer/productConstant";

export const Filter = () => {
  const colorData = [
    "red-filter",
    "blue-filter",
    "yellow-filter",
    "light-green-filter",
    "dark-green-filter",
  ];

  const { productState, productDispatch } = useProduct();

  return (
    <div className="filter-content mild-shadow">
      <div className="store-section-header justify-between">
        <p className="font-sm">FILTERS</p>
        <FiFilter
          className="font-sm"
          onClick={() => productDispatch({ type: CLEAR_ALL_FILTERS })}
        />
      </div>

      <div className="filter-column">
        <div className=" filter-unit">
          <p className="font-vsm">Cost</p>
          <div className="cost-filter align-center font-xs">
            <input
              type="checkbox"
              id="small-price"
              onChange={() =>
                productDispatch({
                  type: FILTER_BY_PRICE_RANGE,
                  payload: "lessPrice",
                })
              }
              checked={productState.filterByPrice.lessPrice}
            />
            <label htmlFor="small-price">Rs. 1500-4000</label>
          </div>
          <div className="cost-filter align-center font-xs">
            <input
              type="checkbox"
              id="medium-price"
              onChange={() =>
                productDispatch({
                  type: FILTER_BY_PRICE_RANGE,
                  payload: "mediumPrice",
                })
              }
              checked={productState.filterByPrice.mediumPrice}
            />
            <label htmlFor="medium-price">Rs. 4001-7000</label>
          </div>
          <div className="cost-filter align-center font-xs">
            <input
              type="checkbox"
              id="high-price"
              onChange={() =>
                productDispatch({
                  type: FILTER_BY_PRICE_RANGE,
                  payload: "highPrice",
                })
              }
              checked={productState.filterByPrice.highPrice}
            />
            <label htmlFor="high-price">Rs. 7001+</label>
          </div>
        </div>

        <div className=" filter-unit">
          <p className="font-vsm">Colour</p>
          <div className="flex color-filter-content">
            {colorData.map((item, index) => (
              <div className={`color-filter ${item}`} key={index}></div>
            ))}
          </div>
        </div>

        <div className=" filter-unit">
          <p className="font-vsm">Design Templates</p>
          <div className="cost-filter align-center font-xs">
            <input
              type="checkbox"
              onChange={() =>
                productDispatch({ type: FILTER_BY_TEMPLATES, payload: 2 })
              }
              id="template-2"
              checked={productState.template.includes(2)}
            />
            <label htmlFor="template-2">2</label>
          </div>
          <div className="cost-filter align-center font-xs">
            <input
              type="checkbox"
              onChange={() =>
                productDispatch({ type: FILTER_BY_TEMPLATES, payload: 3 })
              }
              id="template-3"
              checked={productState.template.includes(3)}
            />
            <label htmlFor="template-3">3</label>
          </div>
          <div className="cost-filter align-center font-xs">
            <input
              type="checkbox"
              onChange={() =>
                productDispatch({ type: FILTER_BY_TEMPLATES, payload: 4 })
              }
              id="template-3+"
              checked={productState.template.includes(4)}
            />
            <label htmlFor="template-3+">3+</label>
          </div>
        </div>

        <div className=" filter-unit">
          <p className="font-vsm">Type</p>
          <div className="cost-filter align-center font-xs">
            <input
              type="checkbox"
              onChange={() =>
                productDispatch({ type: FILTER_BY_TYPE, payload: "loafers" })
              }
              id="loafers"
              checked={productState.type.includes("loafers")}
            />
            <label htmlFor="loafers">Loafers</label>
          </div>
          <div className="cost-filter align-center font-xs">
            <input
              type="checkbox"
              onChange={() =>
                productDispatch({ type: FILTER_BY_TYPE, payload: "sneakers" })
              }
              id="sneakers"
              checked={productState.type.includes("sneakers")}
            />
            <label htmlFor="sneakers">Sneakers</label>
          </div>
        </div>
      </div>

      <button
        className="hero-btn clear-filter-btn"
        onClick={() => productDispatch({ type: CLEAR_ALL_FILTERS })}
      >
        Clear All Filters
      </button>
    </div>
  );
};
