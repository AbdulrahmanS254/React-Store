import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ProductCard.css";

export default function ProductCard({ productData }) {
    return (
        <div className="product-card">
            <Link to={`/product/?id=${productData.id}`}>
                <div className="card-img-box flex justify-center">
                    <img className="object-contain inline-block mx-auto" src={productData.image} alt={productData.title} />
                </div>
                <div className="card-text">
                    <h3>{productData.title}</h3>
                    <p className="product-desc">{productData.description}</p>
                </div>
            </Link>
            <div className="buy-box flex justify-between w-full items-center">
                <p className="text-lg font-semibold">{productData.price}$</p>
                <Button btnText={"Add To Cart"} />
            </div>
        </div>
    );
}
