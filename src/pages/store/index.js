import "./store.css";
import { Cart } from "components/store/Cart";
import { Filter } from "components/store/Filter";
import { ProductList } from "components/store/ProductList";

export const Store = () => {
  return (
    <section className="store-content">
      <Filter />
      <ProductList />
      <Cart />
    </section>
  );
};
