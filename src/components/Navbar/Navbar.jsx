import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import "./Navbar.css";

export default function Navbar() {
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
                        <Link to="">
                            <LuShoppingCart />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
