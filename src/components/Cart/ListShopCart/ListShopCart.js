import '../Cart.scss';
import ShopItem from './ShopItem';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectAllOfShop } from '../../../reducers/cartSlice';

function ListShopCart({ shop }) {
    const dispath = useDispatch();

    return (
        <div className="shop__cart">
            <div className="shop__cart-title">
                <input
                    type="checkbox"
                    className="shop__cart-input"
                    checked={shop.isChecked}
                    onClick={() => dispath(selectAllOfShop(shop))}
                ></input>
                <Link to="">
                    <span className="shop__cart-name">{shop.shopName}</span>
                </Link>
            </div>
            {shop.products.map((item) => (
                <ShopItem key={item.product.id} item={item}></ShopItem>
            ))}
        </div>
    );
}

export default ListShopCart;
