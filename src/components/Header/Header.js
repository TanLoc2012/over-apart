import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Header.scss';
import Search from '../Search/Search';
import images from '../../assets/images';
import Avatar from '../Avatar/Avatar';
import ListCartItem from './ListCartItem';

function Header() {
    var [displaySearch, setDisplaySearch] = useState(false);
    const handleDisplaySearch = () => {
        setDisplaySearch(!displaySearch);
    };

    return (
        <div className="container__header">
            <header className="container header">
                <div className="header__logo">
                    <Link to="/">
                        <img src={images.logo1} alt="Logo1" />
                    </Link>
                </div>
                <nav className="header__nav">
                    <Link to="/furniture" className="header__nav-item">
                        Nội thất
                    </Link>
                    <Link to="/sample-design" className="header__nav-item">
                        Thiết kế mẫu
                    </Link>
                    <Link to="/real-project" className="header__nav-item">
                        Dự án thực tế
                    </Link>
                    <Link to="/my-project" className="header__nav-item">
                        Thiết kế của tôi
                    </Link>
                </nav>

                <nav className="header__nav">
                    <Search
                        child={{
                            borderRadius: '46px',
                            placeHolder: 'Nhập tên sản phẩm, cửa hàng',
                            isDisplaySearch: displaySearch ? 'block' : 'none',
                        }}
                    ></Search>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="header__nav-search"
                        onClick={() => handleDisplaySearch()}
                    />
                    <div className="header__cart-wrapper">
                        <div className="header__nav__container-cart">
                            <Link to="/cart">
                                <FontAwesomeIcon icon={faCartShopping} className="header__nav__cart" />
                            </Link>
                            <div className="header__nav__cart__number">0</div>
                        </div>
                        <div className="header__nav-cart-list">
                            <div className="header__nav-cart-list-header">Sản phẩm mới thêm</div>
                            <div className="header__nav-cart-list-body">
                                <ListCartItem></ListCartItem>
                                <ListCartItem></ListCartItem>
                                <ListCartItem></ListCartItem>
                                <ListCartItem></ListCartItem>
                                <ListCartItem></ListCartItem>
                                <ListCartItem></ListCartItem>
                            </div>
                            <div className="header__nav-cart-list-footer">
                                <div>
                                    <span>Tổng tiền:</span>
                                    <span style={{ color: 'red' }}> 4.500.000 đ</span>
                                </div>
                                <button>Xem Giỏ Hàng</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="header__nav__authen">
                        <Link to="/register" className="header__nav__authen-item header__nav__authen-seperate">
                            Đăng ký
                        </Link>
                        <Link to="/login" className="header__nav__authen-item">
                            Đăng nhập
                        </Link>
                    </div> */}
                    <Avatar child={{ imgWidth: '36px', href: '/', img: images.avatar }} />
                </nav>
            </header>
        </div>
    );
}

export default Header;
