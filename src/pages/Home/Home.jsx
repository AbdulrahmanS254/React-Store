import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );

                if (!response.ok) {
                    throw new Error(`HTTP ERROR! status: ${response.status}`);
                }

                const result = await response.json();
                setProducts(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
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
                <span>Error in Getting the products</span>
            </div>
        );
    }

    return (
        <>
            <section className="products" style={{ marginTop: "25px" }}>
                <div className="container">
                    <h2 className="home-title">Products</h2>
                    <div className="product-list">
                        {products.map((product) => (
                            <div className="product-card">
                                <h3>{product.title}</h3>
                                <p className="product-desc">{product.description}</p>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
