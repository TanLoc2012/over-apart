import './ProductCard.scss';
import images from '../../assets/images';
import { Link } from 'react-router-dom';

function ProductCard() {
    return (
        <div className="product__cart">
            <div className="product__cart-image">
                <Link to="/">
                    <img src={images.f1} alt="Product image"></img>
                </Link>
            </div>
            <div className="product__card-info">
                <p className="product__card-info-name">MO231 - Pomeranian White</p>
                <div className="product__card-info-review">
                    <div className="product__card-info-rating">★★★★★</div>
                    <div className="product__card-info-seperate"></div>
                    <div className="product__card-info-quantity">Đã bán 11</div>
                </div>
                <p className="product__card-info-price">6.900.000 đ</p>
            </div>
        </div>
    );
}

export default ProductCard;
