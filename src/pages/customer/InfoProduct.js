import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import HeaderPSection from '../../components/Shopinfo/HeaderPSection';
import images from '../../assets/images';

function InfoProductPage() {
    const child = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '/',
            content: 'Ghế',
        },
        {
            path: '',
            content: 'Bộ bàn ghế ngoài trời BARCELONA',
        }
    ];

    return (
        <div>
            <Header></Header>
            <Breadcrumb child={child}></Breadcrumb>
            <HeaderPSection product={{ img: images.f1,productName: 'Bộ bàn ghế Barcelona 1',rating: 5,sold: 20,like:5,comment:5,price: '6.900.000 đ',code:'MÃ SẢN PHẨM 2001353'}}></HeaderPSection>
            <Footer></Footer>
        </div>
    );
}

export default InfoProductPage;
