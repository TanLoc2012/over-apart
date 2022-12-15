import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import HeaderPSection from '../../components/Shopinfo/HeaderPSection';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { url } from '../../configs';

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
        },
    ];

    const params = useParams();
    const [productInfo, setProductInfo] = useState();

    useEffect(() => {
        axios.get(`${url}/api/product/${params.productId}`).then((reponse) => {
            setProductInfo(reponse.data);
        });
    }, []);

    return (
        <div>
            <Header></Header>
            <Breadcrumb child={child}></Breadcrumb>
            {productInfo ? <HeaderPSection product={productInfo}></HeaderPSection> : <p>Loading</p>}
            <Footer></Footer>
        </div>
    );
}

export default InfoProductPage;
