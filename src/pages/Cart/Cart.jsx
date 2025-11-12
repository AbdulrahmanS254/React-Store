import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";

import "./Cart.css";

export default function Cart() {
    const { cartItems } = useCart();

    const totalPay = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <div className="cart-container container">
            <h1>Your Cart</h1>

            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is empty.</p>
                    <Link to="/" className="btn-shop">
                        Start Shopping
                    </Link>
                </div>
            ) : (
                <>
                    <div className="cart-items-list">
                        {cartItems.map((item) => (
                            <CartItem key={item.id} cartItem={item} />
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2 className="cart-total">
                            Total: ${totalPay.toFixed(2)}
                        </h2>
                        <button className="btn-checkout">
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
