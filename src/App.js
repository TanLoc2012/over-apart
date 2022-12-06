import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/customer/HomePage/HomePage';
import LoginPage from './pages/authentication/LoginPage';
import CartPage from './pages/customer/CartPage';
import ShopPage from './pages/customer/ShopPage';
import FurniturePage from './pages/customer/FurniturePage';
import SampleDesignPage from './pages/customer/SampleDesignPage';
import RealProjectPage from './pages/customer/RealProject/RealProjectPage';
import MyProjectPage from './pages/customer/MyProjectPage';
import InfoProductPage from './pages/customer/InfoProduct';
import ProfilePage from './pages/customer/MyAccount/ProfilePage';
import MyAddressPage from './pages/customer/MyAccount/MyAddressPage';
import MyPurchasePage from './pages/customer/MyAccount/MyPurchasePage';
import FavoritesPage from './pages/customer/MyAccount/FavoritesPage';
import ApartmentDetailPage from './pages/customer/ApartmentDetail/ApartmentDetailPage';
import InfoProjectPage from './pages/customer/InfoProject';
import Design2D from './pages/customer/Design2D/Design2D';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<HomePage />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>
                <Route path="/shop" element={<ShopPage />}></Route>
                <Route path="/furniture" element={<FurniturePage />}></Route>
                <Route path="/sample-design" element={<SampleDesignPage />}></Route>
                <Route path="/real-project" element={<RealProjectPage />}></Route>
                <Route path="/my-project" element={<MyProjectPage />}></Route>
                <Route path="/product/:productId" element={<InfoProductPage />}></Route>
                <Route path="/project/:projectId" element={<InfoProjectPage />}></Route>
                <Route path="/profile" element={<ProfilePage />}></Route>
                <Route path="/address" element={<MyAddressPage />}></Route>
                <Route path="/my-purchase" element={<MyPurchasePage />}></Route>
                <Route path="/my-wishlist" element={<FavoritesPage />}></Route>
                <Route path="/apartment-detail/:apartmentId" element={<ApartmentDetailPage />}></Route>
                <Route path="/design2d" element={<Design2D />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
