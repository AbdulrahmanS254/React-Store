import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import "./App.css"

function App() {
    return (
        <div className="app-layout">
            <Navbar />

            <main>

                <Outlet />
            </main>

            {/* <Footer /> */}
        </div>
    );
}

export default App;
