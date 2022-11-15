import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/customer/HomePage';
import LoginPage from './pages/login/LoginPage';
import CartPage from './pages/customer/CartPage';
import ShopPage from './pages/customer/ShopPage';
import FurniturePage from './pages/customer/FurniturePage';
import SampleDesignPage from './pages/customer/SampleDesignPage';
import RealProjectPage from './pages/customer/RealProjectPage';
import MyProject from './pages/customer/MyProject';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>
                <Route path="/shop" element={<ShopPage />}></Route>
                <Route path="/furniture" element={<FurniturePage />}></Route>
                <Route path="/sample-design" element={<SampleDesignPage />}></Route>
                <Route path="/real-project" element={<RealProjectPage />}></Route>
                <Route path="/my-project" element={<MyProject />}></Route>
            </Routes>
        </Router>
        // <HomePage />
    );
}

export default App;
