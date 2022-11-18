import './MyAccount.scss';
import AccountSideBar from '../../../components/AccountSideBar/AccountSideBar';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import Pagination from '../../../components/Pagination/Pagination';
import { Fragment } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const ResponsiveGridLayout = WidthProvider(Responsive);

function FavoritesPage() {
    const breadcrumb = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '',
            content: 'Mục yêu thích',
        },
    ];
    var layouts = [
        { i: '1', x: 0, y: 0, w: 3, h: 1 },
        { i: '2', x: 3, y: 0, w: 3, h: 1 },
        { i: '3', x: 6, y: 0, w: 3, h: 1 },
        { i: '4', x: 9, y: 0, w: 3, h: 1 },
        { i: '5', x: 0, y: 1, w: 3, h: 1 },
        { i: '6', x: 3, y: 1, w: 3, h: 1 },
        { i: '7', x: 6, y: 1, w: 3, h: 1 },
        { i: '8', x: 9, y: 1, w: 3, h: 1 },
        { i: '9', x: 0, y: 2, w: 3, h: 1 },
        { i: '10', x: 3, y: 2, w: 3, h: 1 },
        { i: '11', x: 6, y: 2, w: 3, h: 1 },
        { i: '12', x: 9, y: 2, w: 3, h: 1 },
    ];
    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <div className="container my__favorites-wrapper">
                <AccountSideBar></AccountSideBar>
                <div className="my__favorites">
                    <div className="info-header">
                        <div>Mục Yêu Thích</div>
                        <button className="my__favorites-btn list__product-header-right-btn">
                            <span>Nội thất</span>
                            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                        </button>
                    </div>
                    <ResponsiveGridLayout
                        className="container list__favorites-item"
                        layouts={{ lg: layouts }}
                        breakpoints={{ lg: 950, md: 900, sm: 768, xs: 480, xxs: 0 }}
                        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                        rowHeight={300}
                        compactType="horizontal"
                    >
                        <div key="1">
                            <ProductCard></ProductCard>
                        </div>
                        <div key="2">
                            <ProductCard></ProductCard>
                        </div>
                        <div key="3">
                            <ProductCard></ProductCard>
                        </div>
                        <div key="4">
                            <ProductCard></ProductCard>
                        </div>
                        <div key="5">
                            <ProductCard></ProductCard>
                        </div>
                        <div key="6">
                            <ProductCard></ProductCard>
                        </div>
                    </ResponsiveGridLayout>
                    <Pagination></Pagination>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default FavoritesPage;
