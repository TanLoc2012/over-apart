import './HeaderSSection.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import images from '../../assets/images';
import Star from '../Star/star';
import Pagination from '../Pagination/Pagination';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { Link } from 'react-router-dom';
function ProductInfo({ product }) {
        return(
        <div className="container container__info">
            <img src={product.img} alt="Title image" className="option select"></img>
            <div className="second_box">
                <div className="left">
                    <p className="title">Photo - Wayfair modern white kitchen - derbala villa</p>
                    <div className="publisher">
                        <img src={product.img} alt="Title image" className="option select"></img>
                        <p>Nguyễn Tấn Lộc</p>
                    </div>
                    <p className="time">5 ngày trước</p>
                </div>
                <div className="right">

                        <div className="star_box">
                            <Star number={3.5}/>
                            <p>|</p>
                            <p>{product.sold} đã bán</p>
                            <p>|</p>
                            <p>{product.like} đã thích</p>
                            <p>|</p>
                            <p>{product.comment} bình luận</p>
                        </div>
                        <p className="type">FREE</p>
                        <button><Link to={'/'}>
                            Xem thiết kế                        
                        </Link></button>
                </div>
            </div>
        </div>
        );
}

export default ProductInfo;
