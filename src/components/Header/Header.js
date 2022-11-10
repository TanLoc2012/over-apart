import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './Header.scss';
import Search from '../Search/Search';
import images from '../../assets/images';
import Avatar from '../Avatar/Avatar';

function Header() {
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
                    <Link to="/real-design" className="header__nav-item">
                        Dự án thực tế
                    </Link>
                </nav>
                <Search></Search>
                <nav className="header__nav">
                    <div className="header__nav__container-cart">
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faCartShopping} className="header__nav__cart" />
                        </Link>
                        <div className="header__nav__cart__number">0</div>
                    </div>
                    <div className="header__nav__authen">
                        <Link to="/register" className="header__nav__authen-item header__nav__authen-seperate">
                            Đăng ký
                        </Link>
                        <Link to="/login" className="header__nav__authen-item">
                            Đăng nhập
                        </Link>
                    </div>
                    {/* <Avatar /> */}
                </nav>
            </header>
        </div>
    );
}

export default Header;
