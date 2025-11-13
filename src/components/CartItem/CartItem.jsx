import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


export default function CartItem({ cartItem }) {
    const { removeFromCart, incrementQuantity, decrementQuantity } = useCart();
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
            <div className="flex items-center space-x-2">
                <button onClick={() => decrementQuantity(id)} className="w-8 h-8 flex items-center cursor-pointer justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
                    −
                </button>
                <span className="w-10 text-center font-medium text-gray-800">
                    {quantity}
                </span>
                <button onClick={() => incrementQuantity(id)} className="w-8 h-8 flex items-center cursor-pointer justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
                    +
                </button>
            </div>
            <div className="cart-item-actions">
                <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}
