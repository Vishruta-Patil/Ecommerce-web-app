import {AiOutlineCloseCircle} from "react-icons/ai"
import { useProduct } from "context/productContext"
import { REMOVE_FROM_CART } from "reducer/productConstant"

export const CartCard = ({product}) => {
    const {productDispatch} = useProduct()
    return (
        <section className="cart-card-container">
            <div className="cart-img-content">
                <img src={product?.img} alt="" className="cart-card-img" />
                <AiOutlineCloseCircle className="cross-icon" onClick={() => productDispatch({type: REMOVE_FROM_CART, payload: product?.id})}/>
            </div>
            <div>
                <h2 className="font-xs">{product?.name}</h2>
                <p>by KICKSUP and you</p>
                <p className="font-xs cart-price">RS {product?.price}</p>
            </div>
        </section>
    )
}