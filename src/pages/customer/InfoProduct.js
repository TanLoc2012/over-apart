import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Cart from '../../components/Cart/Cart';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import HeaderPSection from '../../components/Shopinfo/HeaderPSection';

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
            <HeaderPSection></HeaderPSection>
            <Footer></Footer>
        </div>
    );
}

export default InfoProductPage;
