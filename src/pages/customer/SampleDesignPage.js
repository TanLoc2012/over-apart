import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import AllProduct from '../../components/AllProduct/AllProduct';
import HeaderText from '../../components/HeaderText/HeaderText';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import images from '../../assets/images';

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
        <div>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <HeaderText></HeaderText>
            <ImageSlider child={designFeautured}></ImageSlider>
            <div className="container">
                <AllProduct></AllProduct>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default SampleDesignPage;
