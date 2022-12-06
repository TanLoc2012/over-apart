import '../Cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    decrementQuantity,
    selectItem,
    incrementQuantity,
    removeProductInCart,
    changeQuantityProduct,
} from '../../../reducers/cartSlice';
import { useState } from 'react';

function ShopItem({ item }) {
    const dispath = useDispatch();
    const product = item;
    const [quantityProduct, setQuantityProduct] = useState(item.quantity);

    const handleBlurInputQuantity = (e) => {
        const quantity = e.target.value;
        dispath(changeQuantityProduct({ product, quantity }));
    };

    const hanldeChangeInputQuantity = (e) => {
        setQuantityProduct(e.target.value);
    };
    return (
        <div className="shop__item">
            <input
                type="checkbox"
                className="shop__cart-input"
                checked={item.isChecked}
                onClick={() => dispath(selectItem(product))}
            ></input>
            <div className="cart__name shop__item-img-name">
                <Link to="">
                    <img src={item.product.img} alt="Product image" className="shop__item-img"></img>
                </Link>
                <Link to="">
                    <span className="shop__item-name">{item.product.productName}</span>
                </Link>
            </div>
            <span className="cart__price shop__item-price">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.product.price)}
            </span>
            <div className="cart__quantity shop__item-quantity-wrapper">
                <div className="shop__item-quantity">
                    <FontAwesomeIcon
                        icon={faMinus}
                        className="quantity__icon"
                        onClick={() => {
                            setQuantityProduct(quantityProduct - 1);
                            dispath(decrementQuantity(item));
                        }}
                    />
                    <input
                        type="text"
                        className="quantity__number"
                        value={quantityProduct}
                        onChange={hanldeChangeInputQuantity}
                        onBlur={handleBlurInputQuantity}
                    ></input>
                    <FontAwesomeIcon
                        icon={faPlus}
                        className="quantity__icon"
                        onClick={() => {
                            setQuantityProduct(quantityProduct + 1);
                            dispath(incrementQuantity(item));
                        }}
                    />
                </div>
            </div>
            <span className="cart__total-price shop__item-total-price">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                    item.quantity * item.product.price,
                )}
            </span>
            <span className="cart__action-item" onClick={() => dispath(removeProductInCart(product))}>
                Xóa
            </span>
        </div>
    );
}

export default ShopItem;
