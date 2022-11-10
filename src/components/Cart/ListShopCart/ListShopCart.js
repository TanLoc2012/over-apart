import '../Cart.scss';
import ShopItem from './ShopItem';
import { Link } from 'react-router-dom';

function ListShopCart({ shopItem }) {
    return (
        <div className="shop__cart">
            <div className="shop__cart-title">
                <input type="checkbox" className="shop__cart-input"></input>
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
