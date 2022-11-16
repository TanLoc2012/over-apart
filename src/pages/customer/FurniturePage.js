import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import AllProduct from '../../components/AllProduct/AllProduct';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { Fragment } from 'react';
import images from '../../assets/images';

function FurniturePage() {
    const breadcrumb = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '',
            content: 'Nội thất',
        },
    ];

    const trendPrediction = {
        headerText: 'Dự đoán xu hướng',
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

    const productFeautured = {
        headerText: 'Nội thất nổi bật',
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

    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <div className="container">
                <ImageSlider child={trendPrediction}></ImageSlider>
                <ImageSlider child={productFeautured}></ImageSlider>
                <AllProduct></AllProduct>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default FurniturePage;
