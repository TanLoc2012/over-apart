import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import AllProduct from '../../components/AllProduct/AllProduct';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../configs';
import { useParams } from 'react-router-dom';

function FurniturePage() {
    const [trendPrediction, setTrendPrediction] = useState();
    const [productFeautured, setProductFeautured] = useState();
    const params = useParams();

    useEffect(() => {
        axios.get(`${url}/api/product/hot-sale/category/${params.categoryId}`).then((reponse) => {
            setTrendPrediction({
                headerText: 'Dự đoán xu hướng',
                pathHeaderText: '',
                type: 'product',
                productInfos: reponse.data,
            });
        });
    }, []);

    useEffect(() => {
        axios.get(`${url}/api/product/hot-sale/category/${params.categoryId}`).then((reponse) => {
            setProductFeautured({
                headerText: 'Nội thất nổi bật',
                pathHeaderText: '',
                type: 'product',
                productInfos: reponse.data,
            });
        });
    }, []);

    const breadcrumb = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '',
            content: 'Nội thất',
        },
    ];

    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <div className="container">
                {trendPrediction ? <ImageSlider child={trendPrediction}></ImageSlider> : <p>Loading</p>}
                {productFeautured ? <ImageSlider child={productFeautured}></ImageSlider> : <p>Loading</p>}
                <AllProduct categoryId={params.categoryId} type={params.type}></AllProduct>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default FurniturePage;
