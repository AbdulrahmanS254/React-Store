import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Checkout.css"; 

export default function Checkout() {
    // 1. نحضر بيانات السلة لعرضها في ملخص الطلب
    const { cartItems } = useCart();

    // 2. نحسب الإجمالي (نفس الكود المستخدم في صفحة السلة)
    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="container my-12!">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/3">
                    <h2 className="text-2xl font-semibold mb-6">
                        Shipping Details
                    </h2>

                    <form className="checkout-form">
                        <div className="mb-4">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" name="address" />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="mb-4 md:w-2/3">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" name="city" />
                            </div>
                            <div className="mb-4 md:w-1/3">
                                <label htmlFor="zip">ZIP Code</label>
                                <input type="text" id="zip" name="zip" />
                            </div>
                        </div>
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

                        <button
                            type="submit"
                            className="w-full bg-slate-800 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
