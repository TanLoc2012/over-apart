import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import AllProduct from '../../components/AllProduct/AllProduct';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { Fragment, useEffect, useState } from 'react';
import images from '../../assets/images';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';

function FurniturePage() {
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

    const [trendPrediction, setTrendPrediction] = useState();
    const [productFeautured, setProductFeautured] = useState();
    const [listCard, setListCard] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/products').then((reponse) => {
            setTrendPrediction({
                headerText: 'Dự đoán xu hướng',
                pathHeaderText: '',
                productInfos: reponse.data,
            });
        });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/products').then((reponse) => {
            setProductFeautured({
                headerText: 'Nội thất nổi bật',
                pathHeaderText: '',
                productInfos: reponse.data,
            });
        });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/products').then((reponse) => {
            let result = [];
            reponse.data.map((product) => {
                result.push(<ProductCard product={product}></ProductCard>);
            });
            setListCard({
                component: result,
            });
        });
    }, []);

    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <div className="container">
                {trendPrediction ? <ImageSlider child={trendPrediction}></ImageSlider> : <p>Loading</p>}
                {productFeautured ? <ImageSlider child={productFeautured}></ImageSlider> : <p>Loading</p>}
                {listCard ? <AllProduct listCard={listCard}></AllProduct> : <p>Loading</p>}
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default FurniturePage;
