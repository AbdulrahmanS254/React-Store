import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ProductCard.css";


export default function ProductCard({ productData }) {
    return (
        <Link to={`/product/${productData.id}`} className="product-card">
            <div className="card-img">
                <img src={productData.image} alt={productData.title} />
            </div>
            <div className="card-text">
                <h3>{productData.title}</h3>
                <p className="product-desc">{productData.description}</p>
                <Button btnText={"Add To Cart"}/>
            </div>
        </Link>
    );
}
