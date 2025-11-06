import { Outlet } from "react-router-dom"
import "./App.css"

function App() {
    return (
        <div className="app-layout">
            {/* <Navbar /> */}

            <main>

                <Outlet />
            </main>

            {/* <Footer /> */}
        </div>
    );
}

export default App;
