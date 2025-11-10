import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>Ferrous</h3>
                    <p>
                        Curated goods for a modern and stylish life. We believe
                        in quality and design that lasts.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Shop</h4>
                    <ul>
                        <li>
                            <a href="#">Categories</a>
                        </li>
                        <li>
                            <a href="#">New Arrivals</a>
                        </li>
                        <li>
                            <a href="#">Sale</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Help</h4>
                    <ul>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">Shipping & Returns</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#">FB</a>
                        <a href="#">IG</a>
                        <a href="#">TW</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Ferrous. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
