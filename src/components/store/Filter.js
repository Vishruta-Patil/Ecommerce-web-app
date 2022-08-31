import { FiFilter, FiShoppingBag } from "react-icons/fi";

export const Filter = () => {
  const colorData = [
    "red-filter",
    "blue-filter",
    "yellow-filter",
    "light-green-filter",
    "dark-green-filter",
  ];


  return (
    <div className="filter-content mild-shadow">
      <div className="store-section-header justify-between">
        <p className="font-sm">FILTERS</p>
        <FiFilter className="font-sm" />
      </div>

      <div className=" filter-unit">
        <p className="font-vsm">Cost</p>
        <div className="cost-filter align-center font-xs">
          <input type="checkbox" />
          <label>Rs. 1500-4000</label>
        </div>
        <div className="cost-filter align-center font-xs">
          <input type="checkbox" />
          <label>Rs. 4001-7000</label>
        </div>
        <div className="cost-filter align-center font-xs">
          <input type="checkbox" />
          <label>Rs. 7001+</label>
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
          <input type="checkbox" />
          <label>2</label>
        </div>
        <div className="cost-filter align-center font-xs">
          <input type="checkbox" />
          <label>3</label>
        </div>
        <div className="cost-filter align-center font-xs">
          <input type="checkbox" />
          <label>3+</label>
        </div>
      </div>

      <div className=" filter-unit">
        <p className="font-vsm">Type</p>
        <div className="cost-filter align-center font-xs">
          <input type="checkbox" />
          <label>Loafers</label>
        </div>
        <div className="cost-filter align-center font-xs">
          <input type="checkbox" />
          <label>Sneakers</label>
        </div>
      </div>
      
      <button className="hero-btn clear-filter-btn">Clear All</button>
      
    </div>
  );
};
