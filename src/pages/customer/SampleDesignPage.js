import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import AllProduct from '../../components/AllProduct/AllProduct';
import HeaderText from '../../components/HeaderText/HeaderText';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import images from '../../assets/images';
import ProductCard from '../../components/ProductCard/ProductCard';

function SampleDesignPage() {
    const breadcrumb = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '',
            content: 'Thiết kế mẫu',
        },
    ];

    const designFeautured = {
        headerText: 'Thiết kế nổi bật',
        pathHeaderText: '',
        productInfos: [
            {
                img: images.p1,
                productName: 'Photo - Blue kitchenb 1',
                isVIP: 'FREE',
                rating: 5,
                price: '6.900.000 đ',
            },
            {
                img: images.p1,
                productName: 'Photo - Blue kitchen 2',
                isVIP: 'FREE',
                rating: 5,
                price: '6.900.000 đ',
            },
            {
                img: images.p1,
                productName: 'Photo - Blue kitchen 3',
                isVIP: 'FREE',
                rating: 5,
                price: '6.900.000 đ',
            },
            {
                img: images.p1,
                productName: 'Photo - Blue kitchen',
                isVIP: 'FREE',
                rating: 5,
                price: '6.900.000 đ',
            },
            {
                img: images.p1,
                productName: 'Photo - Blue kitchen',
                isVIP: 'FREE',
                rating: 5,
                price: '6.900.000 đ',
            },
            {
                img: images.p1,
                productName: 'Photo - Blue kitchen',
                isVIP: 'FREE',
                rating: 5,
                price: '6.900.000 đ',
            },
            {
                img: images.p1,
                productName: 'Photo - Blue kitchen',
                isVIP: 'FREE',
                rating: 5,
                price: '6.900.000 đ',
            },
            {
                img: images.p1,
                productName: 'Photo - Blue kitchen 10',
                isVIP: 'FREE',
                rating: 5,
                price: '6.900.000 đ',
            },
            {
                img: images.p1,
                productName: 'Photo - Blue kitchen 11',
                isVIP: 'FREE',
                rating: 5,
                price: '6.900.000 đ',
            },
        ],
    };

    const listCard = {
        component: (
            <ProductCard
                product={{
                    img: images.p1,
                    productName: 'Photo - Blue kitchen 11',
                    isVIP: 'FREE',
                    rating: 5,
                    price: '6.900.000 đ',
                }}
            ></ProductCard>
        ),
    };
    return (
        <div>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <HeaderText></HeaderText>
            <ImageSlider child={designFeautured}></ImageSlider>
            <div className="container">
                <AllProduct listCard={listCard}></AllProduct>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default SampleDesignPage;
