import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zip: "",
    });

    const [inputErrors, setInputErrors] = useState({});

    const navigate = useNavigate();

    const { cartItems, clearCart } = useCart();

    // total money
    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Full Name is required";

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.city) newErrors.city = "City is required";
        if (!formData.zip) newErrors.zip = "ZIP Code is required";

        setInputErrors(newErrors);

        return Object.keys(newErrors).length === 0; // returns an array with the keys of the object
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            console.log("Order Placed:", {
                customer: formData,
                items: cartItems,
                total: total.toFixed(2),
            });
            alert("Order Placed Successfully!");
            clearCart();
            navigate("/");
        } else {
            console.log("Form has errors");
        }
    };

    return (
        <div className="container my-12!">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/3">
                    <h2 className="text-2xl font-semibold mb-6">
                        Shipping Details
                    </h2>

                    <form className="checkout-form" onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            {inputErrors.name && (
                                <p className="error-text">{inputErrors.name}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {inputErrors.email && (
                                <p className="error-text">
                                    {inputErrors.email}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                            {inputErrors.address && (
                                <p className="error-text">
                                    {inputErrors.address}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="mb-4 md:w-2/3">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                                {inputErrors.city && (
                                    <p className="error-text">
                                        {inputErrors.city}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4 md:w-1/3">
                                <label htmlFor="zip">ZIP Code</label>
                                <input
                                    type="text"
                                    id="zip"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleInputChange}
                                />
                                {inputErrors.zip && (
                                    <p className="error-text">
                                        {inputErrors.zip}
                                    </p>
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-slate-800 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                        >
                            Place Order
                        </button>
                    </form>
                </div>

                <div className="lg:w-1/3">
                    <h2 className="text-2xl font-semibold mb-6">
                        Order Summary
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center"
                                >
                                    <div>
                                        <p className="font-semibold">
                                            {item.title}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Qty: {item.quantity}
                                        </p>
                                    </div>
                                    <span className="font-semibold">
                                        $
                                        {(item.price * item.quantity).toFixed(
                                            2
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between font-bold text-lg mb-6">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
