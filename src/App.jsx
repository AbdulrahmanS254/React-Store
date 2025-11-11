import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css"

import { CartProvider } from "./context/CartContext";

function App() {
    return (
        <CartProvider>
            <div className="app-layout">
                <Navbar />

                <main>

                    <Outlet />
                </main>

                <Footer />
            </div>
        </CartProvider>
    );
}

export default App;
