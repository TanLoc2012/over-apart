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
import ImageGallery from 'react-image-gallery';
import images from '../../../assets/images';

function ApartmentDetailPage() {
    const [listLayout, setListLayout] = useState();
    const [listCard, setListCard] = useState();
    const [apartment, setApartment] = useState();
    const [stateInfoShow, setStateInfoShow] = useState('Thông tin rút gọn');
    const params = useParams();
    const title = ['Thông tin rút gọn', 'Quy mô dự án', 'Phối cảnh dự án'];

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
                type: 'project',
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

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <div className="container apartment__detail-wrapper">
                <h2>Chung Cư Vinhome Quận 9</h2>
                <div>
                    {title.map((item) => (
                        <button
                            key={item}
                            onClick={(e) => setStateInfoShow(e.target.innerHTML)}
                            className={
                                stateInfoShow === item
                                    ? 'my__purchase-state-item my__purchase-state-item-active'
                                    : 'my__purchase-state-item'
                            }
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div
                    className={stateInfoShow === 'Thông tin rút gọn' ? 'info-apartment info-active' : 'info-apartment'}
                >
                    <div>Dự án: 9X Quy Nhơn</div>
                    <div>Vị trí: Khu đô thị Richmond, phường Ghềnh Ráng, thành phố Quy Nhơn, tỉnh Bình Định</div>
                    <div>Loại hình: Căn hộ, shophouse</div>
                    <div>Chủ đầu tư: Công ty Cổ phần Hưng Thịnh Land</div>
                    <div>Tổng diện tích: 2 ha</div>
                </div>
                <div className={stateInfoShow === 'Phối cảnh dự án' ? 'info-apartment info-active' : 'info-apartment'}>
                    <ImageGallery showFullscreenButton={false} showPlayButton={false} items={images} />
                </div>
                <div
                    className={
                        stateInfoShow === 'Quy mô dự án' ? 'project-perspective info-active' : 'project-perspective'
                    }
                >
                    <div>
                        9X Quy Nhơn có diện tích khoảng 2 ha, được thiết kế xây dựng với mô hình căn hộ để ở. Dự án bao
                        gồm 5 block căn hộ bao gồm: The Glory, The Riches, The Lucky, The Friendly, The Trendy.
                    </div>
                    <img src={images.logo1} alt="Quy mo 1" />
                    <img src={images.quymo2} alt="quy mo 2" />
                    <div>
                        Các tòa tháp căn hộ tại 9X Quy Nhơn có chiều cao 21 tầng và 1 tầng hầm, với khoảng 1596 căn hộ.
                        Các sản phẩm có diện tích đa dạng từ 38 m2 – 50 m2 – 72 m2 – 86 m2, được thiết kế từ 1 – 3 phòng
                        ngủ và căn hộ studio.
                    </div>
                    <img src={images.quymo3} alt="quy mo 3" />
                </div>
                {listLayout ? <ImageSlider child={listLayout}></ImageSlider> : <p>Loading</p>}
                {listCard ? <AllProduct headerTitle={'Thiết kế mẫu'} listCard={listCard}></AllProduct> : <p>Loading</p>}
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default ApartmentDetailPage;
