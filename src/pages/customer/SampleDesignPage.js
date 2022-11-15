import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import AllProduct from '../../components/AllProduct/AllProduct';
import HeaderText from '../../components/HeaderText/HeaderText';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

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

    return (
        <div>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <HeaderText></HeaderText>
            <ImageSlider></ImageSlider>
            <div className="container">
                <AllProduct></AllProduct>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default SampleDesignPage;
