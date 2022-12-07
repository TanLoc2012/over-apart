import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShop, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';
import AccountSideBar from '../../../components/AccountSideBar/AccountSideBar';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import './MyAccount.scss';
import images from '../../../assets/images';

function MyPurchasePage() {
    const breadcrumb = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '',
            content: 'Địa chỉ của tôi',
        },
    ];
    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <div className="container my__purchase-wrapper">
                <AccountSideBar></AccountSideBar>
                <div className="my__purchase">
                    <div className="info-header">
                        <div>Đơn hàng của tôi</div>
                    </div>
                    <div>
                        <button className="my__purchase-state-item my__purchase-state-item-active">Tất cả đơn</button>
                        <button className="my__purchase-state-item">Đang xử lý</button>
                        <button className="my__purchase-state-item">Hoàn thành</button>
                    </div>
                    <div className="my__purchase-search">
                        <div className="my__purchase-search-item">
                            <FontAwesomeIcon
                                className="my__purchase-search-item-icon"
                                icon={faSearch}
                            ></FontAwesomeIcon>
                            <input placeholder="Tìm đơn hàng"></input>
                        </div>
                        <div className="my__purchase-search-btn">
                            <div className="my__purchase-search-seperate"></div>
                            <button className="">Tìm đơn hàng</button>
                        </div>
                    </div>
                    <div className="my__purchase-item">
                        <div className="my__purchase-item-state">
                            <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
                            <span>Giao hàng thành công</span>
                        </div>
                        <div className="my__purchase-item-shop">
                            <div className="shop__product">
                                <div className="shop__product-left">
                                    <img src={images.f1} alt="Product image"></img>
                                    <div className="shop__product-info">
                                        <div className="">Bộ bàn ghế Barcelona</div>
                                        <div className="">x2</div>
                                        <div className="shop-icon">
                                            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
                                            <span>Monito Shop</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop__product-price">50.000 đ</div>
                            </div>
                            <div className="shop__product">
                                <div className="shop__product-left">
                                    <img src={images.f1} alt="Product image"></img>
                                    <div className="shop__product-info">
                                        <div className="">Bộ bàn ghế Barcelona</div>
                                        <div className="">x2</div>
                                        <div className="shop-icon">
                                            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
                                            <span>Monito Shop</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop__product-price">50.000 đ</div>
                            </div>
                        </div>
                        <div>
                            <div className="my__purchase-item-footer-total-money">Tổng tiền: 50.000 đ</div>
                            <div className="my__purchase-item-footer-btn-wrapper">
                                <button className="my__purchase-item-footer-btn">Đánh giá</button>
                                <button className="my__purchase-item-footer-btn">Mua lại</button>
                                <button className="my__purchase-item-footer-btn">Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                    <div className="my__purchase-item">
                        <div className="my__purchase-item-state">
                            <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
                            <span>Giao hàng thành công</span>
                        </div>
                        <div className="my__purchase-item-shop">
                            <div className="shop__product">
                                <div className="shop__product-left">
                                    <img src={images.f1} alt="Product image"></img>
                                    <div className="shop__product-info">
                                        <div className="">Bộ bàn ghế Barcelona</div>
                                        <div className="">x2</div>
                                        <div className="shop-icon">
                                            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
                                            <span>Monito Shop</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop__product-price">50.000 đ</div>
                            </div>
                            <div className="shop__product">
                                <div className="shop__product-left">
                                    <img src={images.f1} alt="Product image"></img>
                                    <div className="shop__product-info">
                                        <div className="">Bộ bàn ghế Barcelona</div>
                                        <div className="">x2</div>
                                        <div className="shop-icon">
                                            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
                                            <span>Monito Shop</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop__product-price">50.000 đ</div>
                            </div>
                        </div>
                        <div>
                            <div className="my__purchase-item-footer-total-money">Tổng tiền: 50.000 đ</div>
                            <div className="my__purchase-item-footer-btn-wrapper">
                                <button className="my__purchase-item-footer-btn">Đánh giá</button>
                                <button className="my__purchase-item-footer-btn">Mua lại</button>
                                <button className="my__purchase-item-footer-btn">Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default MyPurchasePage;
