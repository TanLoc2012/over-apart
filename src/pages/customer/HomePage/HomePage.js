import { Fragment } from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import images from '../../../assets/images';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './HomePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

function HomePage() {
    const product = {
        img: images.p1,
        productName: 'Phòng khách Châu Âu',
        isVIP: 'VIP',
        rating: 5,
        price: '6.900.000 đ',
    };

    return (
        <Fragment>
            <Header></Header>
            <div className="home__page-wrapper">
                <div className="home__opacity-mask">
                    <div className="home__header-wrapper">
                        <div className="home__header">
                            <div className="home__header-title-first">HÃY THIẾT KẾ</div>
                            <div className="home__header-title-last">THEO PHONG CÁCH CỦA BẠN</div>
                            <div className="home__header-btn-wrapper">
                                <button className="home__header-btn-guide">
                                    <div>Xem hướng dẫn</div>
                                    <FontAwesomeIcon
                                        className="home__header-btn-guide-icon"
                                        icon={faCirclePlay}
                                    ></FontAwesomeIcon>
                                </button>
                                <button className="home__header-btn-design">Thiết kế</button>
                            </div>
                        </div>
                        <div
                            style={{ backgroundImage: `url(${images.h1})` }}
                            className="home__header-backgound-img"
                        ></div>
                    </div>
                </div>
                <div className="home__body-wrapper">
                    <div className="container home__body">
                        <div className="home__body-title">
                            <div className="home__body-title-text">Danh Mục Nội Thất</div>
                            <div className="home__body-description">
                                Hãy bắt đầu khám phá bằng cách chọn bất kỳ danh mục đồ nội thất nào
                            </div>
                        </div>
                        <div className="home__body-category">
                            <div className="category__product">
                                <div className="category__product-item">
                                    <img src={images.h2} alt="Product image"></img>
                                    <div className="product__item-info">
                                        <div>Ghế Quý’s Tộc’s</div>
                                        <div className="product__item-info-rating">★★★★★</div>
                                        <div className="product__item-info-price">2.650.000 đ</div>
                                    </div>
                                </div>
                                <div
                                    style={{ marginLeft: '120px', marginTop: '12px' }}
                                    className="category__product-item"
                                >
                                    <div className="category__product-item">
                                        <img src={images.h2} alt="Product image"></img>
                                        <div className="product__item-info">
                                            <div>Ghế Quý’s Tộc’s</div>
                                            <div className="product__item-info-rating">★★★★★</div>
                                            <div className="product__item-info-price">2.650.000 đ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="category__text-wrapper">
                                <div className="category__text">
                                    <div className="category__text-item">Tủ</div>
                                    <div className="category__text-item">Bàn</div>
                                    <div className="category__text-item">Giường</div>
                                    <div className="category__text-item category__text-item-active">Ghế</div>
                                    <div className="category__text-item">Giường</div>
                                    <div className="category__text-item">Gương</div>
                                    <div className="category__text-item">Đèn</div>
                                    <div className="category__text-item">Tranh</div>
                                </div>
                            </div>

                            <div className="category__product">
                                <div className="category__product-item">
                                    <div className="category__product-item">
                                        <img src={images.h2} alt="Product image"></img>
                                        <div className="product__item-info">
                                            <div>Ghế Quý’s Tộc’s</div>
                                            <div className="product__item-info-rating">★★★★★</div>
                                            <div className="product__item-info-price">2.650.000 đ</div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{ marginLeft: '120px', marginTop: '12px' }}
                                    className="category__product-item"
                                >
                                    <div className="category__product-item">
                                        <img src={images.h2} alt="Product image"></img>
                                        <div className="product__item-info">
                                            <div>Ghế Quý’s Tộc’s</div>
                                            <div className="product__item-info-rating">★★★★★</div>
                                            <div className="product__item-info-price">2.650.000 đ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__footer-wrapper">
                    <div className="container home__footer">
                        <div className="home__footer-header">
                            <div className="">Dự án thực tế</div>
                            <div className="home__footer-header-active">Thiết kế mẫu</div>
                            <div className="">Dự đoán xu hướng</div>
                        </div>
                        <div className="home__footer-body">
                            <div className="footer__body-img">
                                <img src={images.p1} alt="Product image"></img>
                                <img src={images.p1} alt="Product image"></img>
                            </div>
                            <div className="footer__body-list-card-wrapper">
                                <div className="footer__body-list-card">
                                    <ProductCard product={product}></ProductCard>
                                    <ProductCard product={product}></ProductCard>
                                    <ProductCard product={product}></ProductCard>
                                </div>
                                <div className="footer__body-list-card">
                                    <ProductCard product={product}></ProductCard>
                                    <ProductCard product={product}></ProductCard>
                                    <ProductCard product={product}></ProductCard>
                                </div>
                                <div className="footer__body-show-more">
                                    <button>Xem thêm</button>
                                </div>
                            </div>
                        </div>
                        <div className="header__banner"></div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}
export default HomePage;
