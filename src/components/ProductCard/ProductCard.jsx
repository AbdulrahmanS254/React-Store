import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ProductCard.css";

import { useCart } from "../../context/CartContext";

export default function ProductCard({ productData }) {
    // calling the hook at the top level to avoid problems with hook orders
    const { addToCart } = useCart();

    function handleAddToCart() {
        addToCart(productData);
    }
    return (
        <div className="product-card">
            <Link to={`/product/?id=${productData.id}`}>
                <div className="card-img-box flex justify-center">
                    <img
                        className="object-contain inline-block mx-auto"
                        src={productData.image}
                        alt={productData.title}
                    />
                </div>
                <div className="card-text">
                    <h3>{productData.title}</h3>
                    <p className="product-desc">{productData.description}</p>
                </div>
            </Link>
            <div className="buy-box flex justify-between w-full items-center">
                <p className="text-lg font-semibold">{productData.price}$</p>
                <Button onClick={handleAddToCart} btnText={"Add To Cart"} />
            </div>
        </div>
    );
}
