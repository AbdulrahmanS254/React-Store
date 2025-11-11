import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import "./Navbar.css";

import { useCart } from "../../context/CartContext";

export default function Navbar() {
    const { cartItems } = useCart();
    const totalItems = cartItems.length;
    return (
        <nav>
            <div className="container">
                <Link to={"/"} className="brand">
                    Ferrous
                </Link>
                <ul className="links-box">
                    <li className="link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="link">
                        <Link to="/product/">Sample Product</Link>
                    </li>
                    <li className="link">
                        <Link to="/cart">
                            <LuShoppingCart />
                            <span>{totalItems}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
