import '../Cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ShopItem({ item }) {
    return (
        <div className="shop__item">
            <input type="checkbox" className="shop__cart-input"></input>
            <div className="cart__name shop__item-img-name">
                <Link to="">
                    <img src={item.img} alt="Product image" className="shop__item-img"></img>
                </Link>
                <Link to="">
                    <span className="shop__item-name">{item.itemName}</span>
                </Link>
            </div>
            <span className="cart__price shop__item-price">{item.price}</span>
            <div className="cart__quantity shop__item-quantity-wrapper">
                <div className="shop__item-quantity">
                    <FontAwesomeIcon icon={faMinus} className="quantity__icon" />
                    <input type="text" className="quantity__number" value={1}></input>
                    <FontAwesomeIcon icon={faPlus} className="quantity__icon" />
                </div>
            </div>
            <span className="cart__total-price shop__item-total-price">{item.totalPrice}</span>
            <span className="cart__action-item">Xóa</span>
        </div>
    );
}

export default ShopItem;
