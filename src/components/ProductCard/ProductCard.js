import './ProductCard.scss';
import images from '../../assets/images';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    product = product
        ? product
        : {
              id: 1,
              img: images.f1,
              productName: 'Bộ bàn ghế Barcelona',
              rating: 5,
              sold: 20,
              price: '6.900.000 đ',
          };

    return (
        <div className="product__cart">
            <div className="product__cart-image">
                <Link to={`/product/${product.id}`}>
                    <img src={product.img} alt="Product image"></img>
                </Link>
            </div>
            <div className="product__card-info">
                <p className="product__card-info-name">{product.productName}</p>
                <div className="product__card-info-review">
                    <div className="product__card-info-rating">★★★★★</div>
                    <div className="product__card-info-seperate"></div>

                    {product.sold ? (
                        <div className="product__card-info-quantity">Đã bán {product.sold}</div>
                    ) : (
                        <div className="product__card-info-quantity">{product.isVIP}</div>
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
