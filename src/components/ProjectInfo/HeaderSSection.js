import './HeaderSSection.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import ListShopCart from '../Cart/ListShopCart/ListShopCart';
import images from '../../assets/images';
import Star from '../Star/star';
import Pagination from '../Pagination/Pagination';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { Link } from 'react-router-dom';
function ProductInfo({ product }) {
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
    const otherProduct = {
        headerText: 'Các sản phẩm khác của shop',
        pathHeaderText: '',
        productInfos: [
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona 1',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona 2',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona 3',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona 10',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona 11',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
        ],
    };

    const relatedProduct = {
        headerText: 'Các sản phẩm liên quan',
        pathHeaderText: '',
        productInfos: [
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona 1',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona 2',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona 3',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona 10',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
            {
                img: images.f1,
                productName: 'Bộ bàn ghế Barcelona 11',
                rating: 5,
                sold: 20,
                price: '6.900.000 đ',
            },
        ],
    };
        return(
        <div className="container container__info">
            <img src={product.img} alt="Title image" className="title"></img>
            <div className="second_box">
                <div className="left">
                    <p className="title_name">Photo - Wayfair modern white kitchen - derbala villa</p>
                    <div className="publisher">
                        <img src={product.img} alt="Title image"></img>
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
                        <div className="empty"></div>
                        <p className="type">FREE</p>
                        <button><Link to={'/'}>
                            Xem thiết kế                        
                        </Link></button>
                </div>
            </div>
            <div className="third_box">
                <div className="empty"></div>
                <div className="title">
                    CHI TIẾT SẢN PHẨM
                </div>
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
                <div className="title">
                    MÔ TẢ SẢN PHẨM
                </div>
                <div className="descript">
                    <div className="empti"></div>
                    <p>
                    Thiết kế đơn giản, tiện dụng, linh hoạt, có thể tháo rời khi cần di chuyển <br/>
                    Khung sắt 25x25 sơn tĩnh điện <br/>
                    Mặt gỗ công nghiệp phủ melamine dày 18ly. <br/>
                    Kích thước : 80x40x75cm <br/>
                    Bàn làm việc chắc chắn, nhỏ gọn phù hợp cho không gian nhỏ và chức năng
                    </p>
                    <div className="empti"></div>
                </div>
            </div>
            <div className="cart">
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
            </div>
            </div>
            
            <div className="fourth_box">
                <div className="empty"></div>
                <div className="title">
                    ĐÁNH GIÁ SẢN PHẨM
                </div>
                <div className="filter-comment">
                    <div className="left">
                        <p><a>3.5</a>   trên 5</p>
                        <Star number={3.5}/>
                    </div>
                    <div className="empti">

                    </div>
                    <button> Mới nhất </button>
                    <button> Cũ nhất </button>
                </div>
                <div className="comment-box">
                    <img src={product.img} alt="Title image"></img>
                    <div className="text-area">
                        <label>name</label>
                        <textarea type="textarea" placeholder='Nhập bình luận'></textarea>
                        <div className="right-text">
                            <div className="stick">
                            <Star number={3.5}/>
                            </div>    
                            <div className="empty"></div>
                            <button>Gửi</button>
                        </div>
                    </div>
                </div>
                <div className="comment-section">
                    <div className="comment">
                        <img src={images.avatar} alt="Product image"></img>
                        <div className="text">
                            <div className="first">
                            <p className="name">Nguyen Tan Loc</p>
                            <p className="report">Báo cáo</p>
                            </div>
                            <Star number={5}/>
                            <p className="date">2022-10-25 6:35</p>
                            <p className="content">Bàn đẹp mà cái lỗ khoang sẵn không liên quan với cái thanh sắt để đóng dô luôn </p>
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
                            <Star number={5}/>
                            <p className="date">2022-10-25 6:35</p>
                            <p className="content">Bàn đẹp mà cái lỗ khoang sẵn không liên quan với cái thanh sắt để đóng dô luôn </p>
                            <img src={images.a1} alt="Product image"></img>
                            <img src={images.f1} alt="Product image"></img>
                        </div>
                    </div>
                    <Pagination></Pagination>
                </div>
            </div>
            <ImageSlider child={otherProduct}></ImageSlider>
            <ImageSlider child={relatedProduct}></ImageSlider>
        </div>
        );
}

export default ProductInfo;
