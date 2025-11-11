import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CgChevronLeft } from "react-icons/cg";
import { useCart } from "../../context/CartContext";

export default function ProductDetails() {

    // calling the hook at the top level to avoid problems with hook orders
    const { addToCart } = useCart();


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
    }, [id]);

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

    function handleAddToCart() {
        addToCart(product);
    }

    const { title, price, description, image, category } = product;

    return (
        <div className="container my-8!">
            <Link
                to="/"
                className="text-slate-600 hover:text-slate-900 mb-4 flex! items-center"
            >
                <CgChevronLeft /> Back to all products
            </Link>

            <div className="flex flex-col lg:flex-row bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
                <div className="w-full lg:w-1/2 p-4 flex justify-center items-center">
                    <div className="aspect-square w-full max-w-md bg-gray-100 rounded-lg p-4">
                        <img
                            className="w-full h-full object-contain object-center"
                            src={image}
                            alt={title}
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 p-6 flex flex-col">
                    <div className="grow">
                        <p className="text-sm font-semibold text-slate-500 uppercase text-left">
                            {category}
                        </p>
                        <h1 className="my-2 text-3xl font-bold text-slate-800 text-left">
                            {title}
                        </h1>

                        <p className="mb-4 text-3xl font-light text-slate-900 text-left">
                            ${price}
                        </p>

                        <p className="text-base text-slate-600 mt-4 font-light text-left">
                            {description}
                        </p>
                    </div>

                    <div className="mt-6">
                        <button
                            className="w-full bg-transparent py-3 px-5 text-center text-base font-semibold border border-black text-black transition-all cursor-pointer shadow-md hover:shadow-lg hover:bg-black hover:text-white"
                            type="button"
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
