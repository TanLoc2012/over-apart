import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ListMyProjectCard from '../../components/MyProjectCard/ListMyProjectCard';
import Paginaton from '../../components/Pagination/Pagination';

function MyProjectPage() {
    const breadcrumb = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '',
            content: 'Thiết kế của tôi',
        },
    ];

    return (
        <div>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <ListMyProjectCard></ListMyProjectCard>
            <Paginaton></Paginaton>
            <Footer></Footer>
        </div>
    );
}

export default MyProjectPage;
