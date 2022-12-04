import '../Cart.scss';
import ShopItem from './ShopItem';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectItem } from '../../../reducers/cartSlice';
import { useState } from 'react';

function ListShopCart({ shopItem }) {
    const dispath = useDispatch();
    const cart = useSelector((state) => state.cart);
    const [isCheckedShop, setIsCheckedShop] = useState(false);

    const handleClickShop = () => {
        cart.map((item) => {
            const product = item;
            dispath(selectItem(product));
        });
        setIsCheckedShop(!isCheckedShop);
    };
    return (
        <div className="shop__cart">
            <div className="shop__cart-title">
                <input
                    type="checkbox"
                    className="shop__cart-input"
                    checked={isCheckedShop}
                    onClick={handleClickShop}
                ></input>
                <Link to="">
                    <span className="shop__cart-name">{shopItem.shopName}</span>
                </Link>
            </div>
            {shopItem.items.map((item) => (
                <ShopItem item={item}></ShopItem>
            ))}
        </div>
    );
}

export default ListShopCart;
