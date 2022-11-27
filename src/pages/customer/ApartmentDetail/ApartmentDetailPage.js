import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../../../components/ImageSlider/ImageSlider';
import images from '../../../assets/images';
import { Fragment } from 'react';
import ApartmentCard from '../../../components/ApartmentCard/ApartmentCard';
import AllProduct from '../../../components/AllProduct/AllProduct';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './ApartmentDetailPage.scss';

function ApartmentDetailPage() {
    const breadcrumb = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '/real-project',
            content: 'Dự án thực tế',
        },
        {
            path: '',
            content: 'Chung cư Vinhome Quận 9',
        },
    ];
    const listLayout = {
        headerText: 'Layout',
        pathHeaderText: '',
        isDisplayShowMore: 'none',
        component: <ApartmentCard></ApartmentCard>,
        productInfos: [
            {
                img: images.l1,
                productName: 'Layout lô A',
                description1: 'Diện tích: 400m2',
                description2: 'Loại phòng: Căn hộ chung cư',
            },
            {
                img: images.l1,
                productName: 'Layout lô B',
                description1: 'Diện tích: 400m2',
                description2: 'Loại phòng: Căn hộ chung cư',
            },
            {
                img: images.l1,
                productName: 'Layout lô C',
                description1: 'Diện tích: 400m2',
                description2: 'Loại phòng: Căn hộ chung cư',
            },
            {
                img: images.l1,
                productName: 'Layout lô D',
                description1: 'Diện tích: 400m2',
                description2: 'Loại phòng: Căn hộ chung cư',
            },
            {
                img: images.l1,
                productName: 'Layout lô E',
                description1: 'Diện tích: 400m2',
                description2: 'Loại phòng: Căn hộ chung cư',
            },
        ],
    };
    const listDesign = {
        component: (
            <ProductCard
                product={{
                    img: images.p1,
                    productName: 'Photo - Blue kitchen',
                    isVIP: 'FREE',
                    rating: 5,
                    price: '6.900.000 đ',
                }}
            ></ProductCard>
        ),
    };
    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <div className="container apartment__detail-wrapper">
                <h2>Chung Cư Vinhome Quận 9</h2>
                <div>
                    <button className="my__purchase-state-item my__purchase-state-item-active">
                        Thông tin rút gọn
                    </button>
                    <button className="my__purchase-state-item">Quy mô dự án</button>
                    <button className="my__purchase-state-item">Phối cảnh dự án</button>
                </div>
                <div className="info-apartment">
                    <div>Dự án: 9X Quy Nhơn</div>
                    <div>Vị trí: Khu đô thị Richmond, phường Ghềnh Ráng, thành phố Quy Nhơn, tỉnh Bình Định</div>
                    <div>Loại hình: Căn hộ, shophouse</div>
                    <div>Chủ đầu tư: Công ty Cổ phần Hưng Thịnh Land</div>
                    <div>Tổng diện tích: 2 ha</div>
                </div>
                <ImageSlider child={listLayout}></ImageSlider>
                <AllProduct headerTitle={'Thiết kế mẫu'} listCard={listDesign}></AllProduct>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default ApartmentDetailPage;
