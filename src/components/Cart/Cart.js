import './Cart.scss';
import ListShopCart from './ListShopCart/ListShopCart';
import { useDispatch, useSelector } from 'react-redux';
import { selectAll, selectAllOfShop } from '../../reducers/cartSlice';
import { useState } from 'react';

function Cart() {
    const dispath = useDispatch();
    const cart = useSelector((state) => state.cart);

    let isCheckedStatusInput = cart.length === 0 ? false : true;
    let totalMoney = 0;
    cart.map((shop) => {
        if (shop.isChecked === false) isCheckedStatusInput = false;
        totalMoney = shop.products.reduce((a, b) => (b.isChecked ? a + b.product.price * b.quantity : a), totalMoney);
    });

    return (
        <div className="container container__cart">
            <div className="cart__left">
                <div className="cart__left-title">
                    <input
                        type="checkbox"
                        className="shop__cart-input"
                        checked={isCheckedStatusInput}
                        onClick={() => dispath(selectAll(!isCheckedStatusInput))}
                    ></input>
                    <span className="cart__name">Tất cả</span>
                    <span className="cart__price">Đơn giá</span>
                    <span className="cart__quantity">Số lượng</span>
                    <span className="cart__total-price">Số tiền</span>
                    <span className="cart__action">Thao tác</span>
                </div>
                <div className="cart__left-shop">
                    {cart.map((shop) => (
                        <ListShopCart shop={shop}></ListShopCart>
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
                        <span className="price__item-value">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalMoney)}{' '}
                        </span>
                    </div>
                    <div className="price__total">
                        <span className="">Tổng tiền</span>
                        <span className="price__total-value">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalMoney)}{' '}
                        </span>
                    </div>
                </div>
                <button className="cart__right-btn">Mua hàng</button>
            </div>
        </div>
    );
}

export default Cart;
