import './ImageSlider.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ImageSlider({ child }) {
    return (
        <div className="container img__slider">
            <div className="img__slider-header">
                <div className="header__text-left">{child.headerText}</div>
                <Link to={child.pathHeaderText} className="header__text-right">
                    Xem thêm
                </Link>
            </div>
            <hr className="img__slider-hr" />
            <Swiper
                className="swiper"
                navigation={true}
                slidesPerView={5}
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                <div className="swiper-wrapper">
                    {child.productInfos.map((product) => {
                        <SwiperSlide className="swiper-slide">
                            <ProductCard product={product}></ProductCard>
                        </SwiperSlide>;
                    })}
                </div>
                <div className="swiper-button-next">
                    <FontAwesomeIcon icon={faChevronRight} style={{ color: 'white' }}></FontAwesomeIcon>
                </div>
                <div className="swiper-button-prev">
                    <FontAwesomeIcon icon={faChevronLeft} style={{ color: 'white' }}></FontAwesomeIcon>
                </div>
            </Swiper>
        </div>
    );
}
export default ImageSlider;
