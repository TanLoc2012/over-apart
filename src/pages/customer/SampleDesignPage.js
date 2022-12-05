import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import AllProduct from '../../components/AllProduct/AllProduct';
import HeaderText from '../../components/HeaderText/HeaderText';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SampleDesignPage() {
    const [designFeautured, setDesignFeautured] = useState();
    const [listCard, setListCard] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/sample-design').then((reponse) => {
            console.log(reponse.data);
            setDesignFeautured({
                headerText: 'Thiết kế nổi bật',
                pathHeaderText: '',
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
            content: 'Thiết kế mẫu',
        },
    ];

    useEffect(() => {
        axios.get('http://localhost:5000/sample-design').then((reponse) => {
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
        <div>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <HeaderText></HeaderText>
            {designFeautured ? <ImageSlider child={designFeautured}></ImageSlider> : <p>Loading</p>}
            <div className="container">{listCard ? <AllProduct listCard={listCard}></AllProduct> : <p>Loading</p>}</div>
            <Footer></Footer>
        </div>
    );
}

export default SampleDesignPage;
