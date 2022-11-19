import './HeaderPSection.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
function ShopInfo({ product }) {
    console.log(product.img.naturalHeight);
    return (
        <div className="container container__info">
            <div className="first_box">
                <div className="left_column">
                    <img src={product.img} alt="Product image" className="select"></img>
                    <Swiper className="swiper" slidesPerView={4}>
                        <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <img src={product.img} alt="Product image" className="option"></img>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={product.img} alt="Product image" className="option"></img>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={product.img} alt="Product image" className="option"></img>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={product.img} alt="Product image" className="option"></img>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={product.img} alt="Product image" className="option"></img>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={product.img} alt="Product image" className="option"></img>
                        </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
                <div className="right_column">
                    <h1> {product.productName}</h1>
                    <p className="code"> {product.code}</p>
                </div>
            </div>
        </div>
    );
}

export default ShopInfo;
