import './HeaderPSection.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';
import images from '../../assets/images';
import Star from '../Star/star';
import Pagination from '../Pagination/Pagination';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addToCart } from '../../reducers/cartSlice';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { url } from '../../configs';

function ShopInfo({ product }) {
    const dispath = useDispatch();
    const [otherProduct, setOtherProduct] = useState();
    const [relatedProduct, setRelatedProduct] = useState();
    const [quantityProduct, setQuantityProduct] = useState(1);
    console.log(product);

    useEffect(() => {
        axios.get(`${url}/api/product/hot-sale/category/${product.categoryId}`).then((reponse) =>
            setOtherProduct({
                headerText: 'Các sản phẩm khác của shop',
                pathHeaderText: '',
                productInfos: reponse.data,
            }),
        );
    }, []);

    useEffect(() => {
        axios.get(`${url}/api/product/hot-sale/category/${product.categoryId}`).then((reponse) =>
            setRelatedProduct({
                headerText: 'Các sản phẩm liên quan',
                pathHeaderText: '',
                productInfos: reponse.data,
            }),
        );
    }, []);

    return (
        <div className="container container__info">
            <div className="first_box">
                <div className="left_column">
                    <img src={product.images[0]} alt="Product image" className="select"></img>
                    {/* <Swiper className="swiper" slidesPerView={4}>
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <img src={product.img} alt="Product image" className="option select"></img>
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
                    </Swiper> */}
                    <div className="empty"></div>
                </div>
                <div className="right_column">
                    <h1>{product.productName}</h1>
                    <p className="code">Mã sản phẩm: {product.code}</p>
                    <div>
                        <div className="star_box">
                            <Star number={3.5} />
                            <p>|</p>
                            <p>{product.sold} đã bán</p>
                            <p>|</p>
                            <p>{product.like} đã thích</p>
                            <p>|</p>
                            <p>{product.comment} bình luận</p>
                        </div>
                        <p className="money">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                product.price,
                            )}
                        </p>
                        <div style={{ marginBottom: '12px' }} className="shop__item-quantity-wrapper">
                            <span style={{ fontSize: '1.8rem', marginRight: '12px', fontWeight: '600' }}>Số lượng</span>
                            <div className="shop__item-quantity">
                                <FontAwesomeIcon
                                    icon={faMinus}
                                    className="quantity__icon"
                                    onClick={() => setQuantityProduct(quantityProduct - 1)}
                                />
                                <input
                                    type="text"
                                    className="quantity__number"
                                    value={quantityProduct}
                                    onChange={(e) => setQuantityProduct(e.target.value)}
                                ></input>
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className="quantity__icon"
                                    onClick={() => setQuantityProduct(quantityProduct + 1)}
                                />
                            </div>
                        </div>
                        <button
                            style={{ backgroundColor: '#FFCF86', cursor: 'pointer' }}
                            onClick={() => dispath(addToCart({ product, quantityProduct }))}
                        >
                            Thêm vào giỏ
                        </button>
                        <button style={{ backgroundColor: '#56A4C6' }}>Xem model 3D</button>
                        <button style={{ backgroundColor: '#FFB441' }}>Thêm yêu thích</button>
                    </div>
                </div>
            </div>
            <div className="second_box">
                <div className="left_column">
                    <div className="shop_avatar">
                        <img src={images.avatar} alt="Product image"></img>
                    </div>
                    <div className="text_box">
                        <p>Adidas</p>
                        <button>
                            <Link to={'/'}>Xem shop</Link>
                        </button>
                    </div>
                </div>
                <div className="middle_column">
                    <p></p>
                </div>
                <div className="right_column">
                    <div style={{ marginLeft: 40 }} className="left-left">
                        <p>Đánh giá</p>
                        <p style={{ marginTop: '16px' }}>Sản phẩm</p>
                    </div>
                    <div className="left-right">
                        <p>250</p>
                        <p style={{ marginTop: '16px' }}>250</p>
                    </div>
                    <div className="left-left">
                        <p>Tỷ lệ giao hàng</p>
                        <p style={{ marginTop: '16px' }}>Đã bán</p>
                    </div>
                    <div className="left-right">
                        <p>250</p>
                        <p style={{ marginTop: '16px' }}>250</p>
                    </div>
                </div>
            </div>
            <div className="third_box">
                <div className="empty"></div>
                <div className="title">CHI TIẾT SẢN PHẨM</div>
                <div className="info">
                    <div className="left">
                        <div className="empti"></div>
                        <p>Danh mục</p>
                        <p>Xuất xứ</p>
                        <p>Màu sắc</p>
                        <p>Chất liệu</p>
                        <p>Bảo hành</p>
                    </div>
                    <div className="right">
                        <div className="empti"></div>
                        <p>Bàn</p>
                        <p>Anh</p>
                        <p>Đen</p>
                        <p>Gỗ</p>
                        <p>2 năm</p>
                    </div>
                </div>
                <div className="title">MÔ TẢ SẢN PHẨM</div>
                <div className="descript">
                    <div className="empti"></div>
                    <p>
                        Thiết kế đơn giản, tiện dụng, linh hoạt, có thể tháo rời khi cần di chuyển <br />
                        Khung sắt 25x25 sơn tĩnh điện <br />
                        Mặt gỗ công nghiệp phủ melamine dày 18ly. <br />
                        Kích thước : 80x40x75cm <br />
                        Bàn làm việc chắc chắn, nhỏ gọn phù hợp cho không gian nhỏ và chức năng
                    </p>
                    <div className="empti"></div>
                </div>
            </div>

            <div className="fourth_box">
                <div className="empty"></div>
                <div className="title">ĐÁNH GIÁ SẢN PHẨM</div>
                <div className="filter-comment">
                    <div className="left">
                        <p>
                            <a>3.5</a> trên 5
                        </p>
                        <Star number={3.5} />
                    </div>
                    <div className="empti"></div>
                    <button> Mới nhất </button>
                    <button> Cũ nhất </button>
                </div>
                <div className="comment-section">
                    <div className="comment">
                        <img src={images.avatar} alt="Product image"></img>
                        <div className="text">
                            <div className="first">
                                <p className="name">Nguyen Tan Loc</p>
                                <p className="report">Báo cáo</p>
                            </div>
                            <Star number={5} />
                            <p className="date">2022-10-25 6:35</p>
                            <p className="content">
                                Bàn đẹp mà cái lỗ khoang sẵn không liên quan với cái thanh sắt để đóng dô luôn{' '}
                            </p>
                            <img src={images.a1} alt="Product image"></img>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={images.avatar} alt="Product image"></img>
                        <div className="text">
                            <div className="first">
                                <p className="name">Nguyen Tan Loc</p>
                                <p className="report">Báo cáo</p>
                            </div>
                            <Star number={5} />
                            <p className="date">2022-10-25 6:35</p>
                            <p className="content">
                                Bàn đẹp mà cái lỗ khoang sẵn không liên quan với cái thanh sắt để đóng dô luôn{' '}
                            </p>
                            <img src={images.a1} alt="Product image"></img>
                            <img src={images.f1} alt="Product image"></img>
                        </div>
                    </div>
                    <Pagination></Pagination>
                </div>
            </div>
            {otherProduct ? <ImageSlider child={otherProduct}></ImageSlider> : <p>Loading</p>}
            {relatedProduct ? <ImageSlider child={relatedProduct}></ImageSlider> : <p>Loading</p>}
        </div>
    );
}

export default ShopInfo;
