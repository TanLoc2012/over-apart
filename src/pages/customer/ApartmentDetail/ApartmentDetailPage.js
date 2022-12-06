import './ApartmentDetailPage.scss';
import axios from 'axios';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import ImageSlider from '../../../components/ImageSlider/ImageSlider';
import AllProduct from '../../../components/AllProduct/AllProduct';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ApartmentDetailPage() {
    const [listLayout, setListLayout] = useState();
    const [listCard, setListCard] = useState();
    const [apartment, setApartment] = useState();
    const params = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/real-project/${params.apartmentId}`)
            .then((reponse) => setApartment(reponse.data));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/layouts').then((reponse) =>
            setListLayout({
                headerText: 'Layout',
                pathHeaderText: '',
                isDisplayShowMore: 'none',
                component: 'apartment',
                productInfos: reponse.data,
            }),
        );
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/sample-design').then((reponse) => {
            let result = [];
            reponse.data.map((product) => {
                result.push(<ProductCard product={product}></ProductCard>);
            });
            setListCard({
                component: result,
                type: 'apartment-detail',
            });
        });
    }, []);

    const breadcrumb = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '/real-project',
            content: 'Dự án thực tế',
        },
        {
            path: '',
            content: 'Chung cư Vinhome Quận 9',
        },
    ];

    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <div className="container apartment__detail-wrapper">
                <h2>Chung Cư Vinhome Quận 9</h2>
                <div>
                    <button className="my__purchase-state-item my__purchase-state-item-active">
                        Thông tin rút gọn
                    </button>
                    <button className="my__purchase-state-item">Quy mô dự án</button>
                    <button className="my__purchase-state-item">Phối cảnh dự án</button>
                </div>
                <div className="info-apartment">
                    <div>Dự án: 9X Quy Nhơn</div>
                    <div>Vị trí: Khu đô thị Richmond, phường Ghềnh Ráng, thành phố Quy Nhơn, tỉnh Bình Định</div>
                    <div>Loại hình: Căn hộ, shophouse</div>
                    <div>Chủ đầu tư: Công ty Cổ phần Hưng Thịnh Land</div>
                    <div>Tổng diện tích: 2 ha</div>
                </div>
                {listLayout ? <ImageSlider child={listLayout}></ImageSlider> : <p>Loading</p>}
                {listCard ? <AllProduct headerTitle={'Thiết kế mẫu'} listCard={listCard}></AllProduct> : <p>Loading</p>}
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default ApartmentDetailPage;
