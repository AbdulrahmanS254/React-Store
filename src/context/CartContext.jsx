import { useContext, createContext, useReducer, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const getInitialCart = () => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    };

    const [cartItems, dispatch] = useReducer(cartReducer, [], getInitialCart);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    function cartReducer(state, action) {
        switch (action.type) {
            case "ADD_ITEM": {
                const product = action.payload;
                const existingItem = state.find(
                    (item) => item.id === product.id
                );

                if (existingItem) {
                    return state.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                } else {
                    return [...state, { ...product, quantity: 1 }];
                }
            }
            case "REMOVE_ITEM": {
                const productId = action.payload;
                return state.filter((item) => item.id !== productId);
            }
            case "INCREMENT_QUANTITY": {
                const productId = action.payload;
                return state.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            case "DECREMENT_QUANTITY": {
                const productId = action.payload;
                return state.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                        : item
                );
            }
        }
    }

    const addToCart = (product) => {
        dispatch({
            type: "ADD_ITEM",
            payload: product,
        });
    };

    const removeFromCart = (productId) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: productId,
        });
    };

    const incrementQuantity = (productId) => {
        dispatch({
            type: "INCREMENT_QUANTITY",
            payload: productId,
        });
    };

    const decrementQuantity = (productId) => {
        dispatch({
            type: "DECREMENT_QUANTITY",
            payload: productId,
        });
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                incrementQuantity,
                decrementQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// to use the context easily in the othe components we will create a simple custom hook
export function useCart() {
    return useContext(CartContext);
}
