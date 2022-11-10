import './Cart.scss';
import ListShopCart from './ListShopCart/ListShopCart';
import images from '../../assets/images';

function Cart() {
    const shopItems = [
        {
            shopName: "1994's store",
            items: [
                {
                    img: images.f1,
                    itemName: 'Bo ban ghe 1',
                    price: 50000,
                    quantity: 1,
                    totalPrice: 50000,
                },
                {
                    img: images.f1,
                    itemName: 'Bo ban ghe 2',
                    price: 50000,
                    quantity: 1,
                    totalPrice: 50000,
                },
            ],
        },
        {
            shopName: "1994's store 1",
            items: [
                {
                    img: images.f1,
                    itemName: 'Bo ban ghe 1',
                    price: 50000,
                    quantity: 1,
                    totalPrice: 50000,
                },
            ],
        },
        {
            shopName: "1994's store",
            items: [
                {
                    img: images.f1,
                    itemName: 'Bo ban ghe 1',
                    price: 50000,
                    quantity: 1,
                    totalPrice: 50000,
                },
                {
                    img: images.f1,
                    itemName: 'Bo ban ghe 2',
                    price: 50000,
                    quantity: 1,
                    totalPrice: 50000,
                },
            ],
        },
    ];

    return (
        <div className="container container__cart">
            <div className="cart__left">
                <div className="cart__left-title">
                    <input type="checkbox" className="shop__cart-input"></input>
                    <span className="cart__name">Tất cả (2 sản phẩm)</span>
                    <span className="cart__price">Đơn giá</span>
                    <span className="cart__quantity">Số lượng</span>
                    <span className="cart__total-price">Số tiền</span>
                    <span className="cart__action">Thao tác</span>
                </div>
                <div className="cart__left-shop">
                    {shopItems.map((shopItem) => (
                        <ListShopCart shopItem={shopItem}></ListShopCart>
                    ))}
                </div>
            </div>
            <div className="cart__right">
                <div className="cart__right-customer">
                    <div className="customer__header">
                        <span>Giao tới</span>
                        <span className="customer__header-item">Thay đổi</span>
                    </div>
                    <div className="customer__info">
                        <span>Tấn Lộc</span>
                        <span className="customer__info-seperate"></span>
                        <span>0347651292</span>
                    </div>
                    <div className="customer__address">
                        12/2, đường số 5, Phường Linh Chiểu, Quận Thủ Đức, Hồ Chí Minh
                    </div>
                </div>
                <div className="cart__right-price">
                    <div className="price__item">
                        <span className="">Tạm tính</span>
                        <span className="price__item-value">50.000 đ</span>
                    </div>
                    <div className="price__total">
                        <span className="">Tổng tiền</span>
                        <span className="price__total-value">50.000 đ</span>
                    </div>
                </div>
                <button className="cart__right-btn">Mua hàng (1)</button>
            </div>
        </div>
    );
}

export default Cart;
