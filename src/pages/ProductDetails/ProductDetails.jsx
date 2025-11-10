import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Button from "../../components/Button/Button";

export default function ProductDetails() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [product, setProduct] = useState({});

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const id = searchParams.get("id");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products/${id}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP ERROR! status: ${response.status}`);
                }

                const productData = await response.json();
                setProduct(productData);
            } catch (err) {
                setError(true);
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    if (loading) {
        return (
            <div className="loading-box">
                <p>Loading Products</p>
                <span className="loader"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error">
                <span>Error in Getting the product data</span>
            </div>
        );
    }

    const { title, price, description, image, category } = product;

    return (
        <section className="product-details">
            <div className="container">
                <div className="product-details-card">
                    <div className="details-image">
                        <img src={image} alt={ title} />
                    </div>
                    <div className="details-category">
                        <span>{category}</span>
                    </div>
                    <div className="details-text">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="details-price">
                        <span>{price}$</span>
                        <Button btnText={'Add to cart'}></Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
