import './Shop.scss';
import Avatar from '../Avatar/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import Search from '../Search/Search';
import images from '../../assets/images';
import AllProduct from '../AllProduct/AllProduct';

function Shop() {
    return (
        <div className="container container__shop">
            <div className="container__shop-info">
                <div className="shop__info-left">
                    <Avatar child={{ imgWidth: '72px', href: '/', img: images.avatar }}></Avatar>
                    <span className="">1994's Store</span>
                </div>
                <div className="shop__info-overview">
                    <div className="shop__info-overview-item">
                        <div className="shop__info-overview-item-value">
                            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
                            <span>Sản Phẩm:</span>
                            <span className="shop__info-overview-item-text">250</span>
                        </div>
                        <div className="shop__info-overview-item-value">
                            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
                            <span>Đánh Giá:</span>
                            <span className="shop__info-overview-item-text">4.8 (12.7k Đánh Giá)</span>
                        </div>
                        <div className="shop__info-overview-item-value">
                            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
                            <span>Đánh Giá:</span>
                            <span className="shop__info-overview-item-text">4.8 (12.7k Đánh Giá)</span>
                        </div>
                    </div>
                    <div className="shop__info-overview-item">
                        <div className="shop__info-overview-item-value">
                            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
                            <span>Tỷ Lệ Giao Hàng:</span>
                            <span className="shop__info-overview-item-text">99%</span>
                        </div>
                        <div className="shop__info-overview-item-value">
                            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
                            <span>Đã bán:</span>
                            <span className="shop__info-overview-item-text">250</span>
                        </div>
                        <div className="shop__info-overview-item-value">
                            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
                            <span>Đã bán:</span>
                            <span className="shop__info-overview-item-text">250</span>
                        </div>
                    </div>
                    <Search child={{ borderRadius: '4px', placeHolder: 'Tìm sản phẩm tại cửa hàng' }}></Search>
                </div>
            </div>
            <div>{/* <AllProduct></AllProduct> */}</div>
        </div>
    );
}

export default Shop;
