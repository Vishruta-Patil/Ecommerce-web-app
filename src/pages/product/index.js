import { SingleProductCard } from "components/singleProduct";
import { Cart } from "components/store/Cart";
import { ProductData } from "data/productData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";

export const SingleProduct = () => {
  const params = useParams();
  const { productId } = params;
  const [product, setProduct] = useState()

  useEffect(() => {
    const getProduct = ProductData.find(product => product.id === productId)
    setProduct(getProduct)
  }, [productId])


  return (
    <div className="single-product-container">
      <div className="single-product mild-shadow">
        <SingleProductCard product={product}/>
      </div>
        <Cart />
    </div>
  );
};
