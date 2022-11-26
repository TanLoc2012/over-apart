import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import HeaderSSection from '../../components/ProjectInfo/HeaderSSection';
import images from '../../assets/images';

function InfoProjectPage() {
    const child = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '/',
            content: 'Tổng quát thiết kế',
        },
        {
            path: '',
            content: 'Photo - Wayfair modern white kitchen - derbala villa',
        }
    ];

    return (
        <div>
            <Header></Header>
            <Breadcrumb child={child}></Breadcrumb>
            <HeaderSSection product={{ img: images.f1,productName: 'Bộ bàn ghế Barcelona 1',rating: 5,sold: 20,like:5,comment:5,price: '6.900.000 đ',code:'MÃ SẢN PHẨM 2001353'}}></HeaderSSection>
            <Footer></Footer>
        </div>
    );
}

export default InfoProjectPage;
