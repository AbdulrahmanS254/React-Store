import { useContext, createContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
        console.log("Product added to cart: ", product);
    };
    console.log(cartItems)

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

// to use the context easily in the othe components we will create a simple custom hook
export function useCart() {
    return useContext(CartContext);
}
