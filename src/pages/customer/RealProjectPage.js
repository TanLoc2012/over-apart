import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import AllProduct from '../../components/AllProduct/AllProduct';
import HeaderText from '../../components/HeaderText/HeaderText';

function RealProjectPage() {
    const breadcrumb = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '',
            content: 'Dự án thực tế',
        },
    ];

    return (
        <div>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <HeaderText></HeaderText>
            <div className="container">
                <AllProduct></AllProduct>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default RealProjectPage;
