import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";

import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";

import { useCart } from "../../context/CartContext";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const totalPages = Math.ceil(products.length / productsPerPage);

    // Calculate the indexes for slicing
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;

    // Create the array for the *current page*
    const currentProducts = products.slice(firstIndex, lastIndex);

    // (Add these right after the calculations)
    const handleNextPage = () => {
        // Use Math.min to stop at the last page
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        // Use Math.max to stop at the first page
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

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
                        {currentProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                productData={product}
                            />
                        ))}
                    </div>
                </div>
                <div className="pagination">
                    <Button
                        btnText={"Prev"}
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    ></Button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button
                        btnText={"Next"}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    ></Button>
                </div>
            </section>
        </>
    );
}
