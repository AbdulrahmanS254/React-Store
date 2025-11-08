import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <div className="container">
                <h2 className="brand">Hadid</h2>
                <ul className="links-box">
                    <li className="link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="link">
                        <Link to="/product/">Sample Product</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
