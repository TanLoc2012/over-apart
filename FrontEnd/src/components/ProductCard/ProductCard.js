import './ProductCard.scss';
import { Link } from 'react-router-dom';

function ProductCard({ product, type }) {
    return (
        <div className="product__cart">
            <div className="product__cart-image">
                <Link to={`/${type}/${product.id}`}>
                    <img src={product.image} alt="Product image"></img>
                </Link>
            </div>
            <div className="product__card-info">
                <p className="product__card-info-name">{product.productName}</p>
                <div className="product__card-info-review">
                    <div className="product__card-info-rating">★★★★★</div>
                    <div className="product__card-info-seperate"></div>

                    {product.isVIP ? (
                        <div className="product__card-info-quantity">{product.isVIP}</div>
                    ) : (
                        <div className="product__card-info-quantity">Đã bán {product.sold}</div>
                    )}
                </div>
                <p className="product__card-info-price">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;
