import React from 'react'
import './ImageSlider.scss';
import ProductCard from '../ProductCard/ProductCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination ,Navigation} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function ImageSlider() {
    return(
            <Swiper className="container swiper home-slider" navigation={true} slidesPerView={6} pagination={{clickable: true,}} modules={[Pagination,]}>
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <ProductCard></ProductCard>
                        </SwiperSlide>
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
            </Swiper>
    )
}
export default ImageSlider