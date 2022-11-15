import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './pages/customer/HomePage';
import LoginPage from './pages/login/LoginPage';
import CartPage from './pages/customer/CartPage';
import ShopPage from './pages/customer/ShopPage';
import InfoProductPage from './pages/customer/InfoProduct';

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" exact element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/shop" element={<ShopPage />}></Route>
            <Route path="/product" element={<InfoProductPage />}></Route>
            </Routes>
        </Router>
        // <HomePage />
    );
}

export default App;
