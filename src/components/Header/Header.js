import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import Search from '../Search/Search';
import images from '../../assets/images';
import Avatar from '../Avatar/Avatar';

function Header() {
    return (
        <div className="container">
            <header className="header">
                <div className="header__logo">
                    <img src={images.logo1} alt="Logo1" />
                </div>
                <nav className="header__nav">
                    <a href="" className="header__nav__item">
                        Nội thất
                    </a>
                    <a href="" className="header__nav__item">
                        Thiết kế mẫu
                    </a>
                    <a href="" className="header__nav__item">
                        Dự án thực tế
                    </a>
                    <a href="" className="header__nav__item">
                        Thiết kế của tôi
                    </a>
                </nav>
                <nav className="header__nav">
                    <Search></Search>
                    <div className="header__nav__container__cart">
                        <a href="">
                            <FontAwesomeIcon icon={faCartShopping} className="header__nav__cart" />
                        </a>
                        <div className="header__nav__cart__number">1</div>
                    </div>
                    <Avatar />
                </nav>
            </header>
        </div>
    );
}

export default Header;
