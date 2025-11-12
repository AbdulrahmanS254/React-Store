import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
export default function CartItem({ cartItem }) {
    const { removeFromCart } = useCart();
    const { id, image, title, price, quantity } = cartItem;
    return (
        <div className="cart-item">
            <Link to={`/product/?id=${id}`}>
                <img src={image} alt={title} className="cart-item-image" />
            </Link>
            <div className="cart-item-details">
                <h3 className="cart-item-title">{title}</h3>
                <p className="cart-item-price">${price}</p>
                <p className="cart-item-quantity">Quantity: {quantity}</p>
            </div>
            <div className="cart-item-actions">
                <button className="cart-item-remove" onClick={() => removeFromCart(id)}>Remove</button>
            </div>
        </div>
    );
}
