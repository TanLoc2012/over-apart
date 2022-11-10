import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/customer/HomePage';
import LoginPage from './pages/login/LoginPage';
import CartPage from './pages/customer/CartPage';
import ShopPage from './pages/customer/ShopPage';

function App() {
    return (
        <Router>
            <Route path="/" exact>
                <HomePage></HomePage>
            </Route>
            <Route path="/login">
                <LoginPage></LoginPage>
            </Route>
            <Route path="/cart">
                <CartPage></CartPage>
            </Route>
            <Route path="/shop">
                <ShopPage></ShopPage>
            </Route>
        </Router>
        // <HomePage />
    );
}

export default App;
