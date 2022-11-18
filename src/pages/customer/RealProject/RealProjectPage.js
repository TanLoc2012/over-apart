import './RealProjectPage.scss';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import AllProduct from '../../../components/AllProduct/AllProduct';
import HeaderText from '../../../components/HeaderText/HeaderText';
import ImageSlider from '../../../components/ImageSlider/ImageSlider';
import images from '../../../assets/images';
import ApartmentCard from '../../../components/ApartmentCard/ApartmentCard';

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
    const aparatmentFeautured = {
        headerText: 'Chung cư nổi bật',
        pathHeaderText: '',
        component: <ApartmentCard></ApartmentCard>,
        productInfos: [
            {
                img: images.a1,
                productName: 'Chung cư Vinhome Quận 9',
                description1: 'Chủ đầu tư: Vinhome',
                description2: 'Địa chỉ: Quận 9, TP Hồ Chí Minh',
            },
            {
                img: images.a1,
                productName: 'Chung cư Vinhome Quận 9',
                description1: 'Chủ đầu tư: Vinhome',
                description2: 'Địa chỉ: Quận 9, TP Hồ Chí Minh',
            },
            {
                img: images.a1,
                productName: 'Chung cư Vinhome Quận 9',
                description1: 'Chủ đầu tư: Vinhome',
                description2: 'Địa chỉ: Quận 9, TP Hồ Chí Minh',
            },
            {
                img: images.a1,
                productName: 'Chung cư Vinhome Quận 9',
                description1: 'Chủ đầu tư: Vinhome',
                description2: 'Địa chỉ: Quận 9, TP Hồ Chí Minh',
            },
            {
                img: images.a1,
                productName: 'Chung cư Vinhome Quận 9',
                description1: 'Chủ đầu tư: Vinhome',
                description2: 'Địa chỉ: Quận 9, TP Hồ Chí Minh',
            },
            {
                img: images.a1,
                productName: 'Chung cư Vinhome Quận 9',
                description1: 'Chủ đầu tư: Vinhome',
                description2: 'Địa chỉ: Quận 9, TP Hồ Chí Minh',
            },
            {
                img: images.a1,
                productName: 'Chung cư Vinhome Quận 9',
                description1: 'Chủ đầu tư: Vinhome',
                description2: 'Địa chỉ: Quận 9, TP Hồ Chí Minh',
            },
            {
                img: images.a1,
                productName: 'Chung cư Vinhome Quận 9',
                description1: 'Chủ đầu tư: Vinhome',
                description2: 'Địa chỉ: Quận 9, TP Hồ Chí Minh',
            },
            {
                img: images.a1,
                productName: 'Chung cư Vinhome Quận 9',
                description1: 'Chủ đầu tư: Vinhome',
                description2: 'Địa chỉ: Quận 9, TP Hồ Chí Minh',
            },
        ],
    };
    const listCard = {
        component: <ApartmentCard></ApartmentCard>,
        itemInfos: [
            {
                img: images.f1,
                productName: 'Chung cư Vinhome Quận 9',
                description1: 'Chủ đầu tư: Vinhome',
                description2: 'Địa chỉ: Quận 9, TP Hồ Chí Minh',
            },
        ],
    };
    return (
        <div>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <HeaderText></HeaderText>
            <ImageSlider child={aparatmentFeautured}></ImageSlider>
            <div className="container">
                <div className="real__project">
                    <form>
                        <select>
                            <option selected value="grapefruit">
                                Tỉnh/Thành
                            </option>
                            <option value="lime">Tây Ninh</option>
                            <option value="coconut">Tp. Hồ Chí Minh</option>
                            <option value="mango">Hà Nội</option>
                        </select>
                    </form>
                    <form>
                        <select>
                            <option selected value="grapefruit">
                                Quận/Huyện
                            </option>
                            <option value="lime">Tây Ninh</option>
                            <option value="coconut">Tp. Hồ Chí Minh</option>
                            <option value="mango">Hà Nội</option>
                        </select>
                    </form>
                    <form>
                        <input type="text" list="data" placeholder="Nhập/chọn tên chung cư" />
                        <datalist id="data">
                            <option value="Tây Ninh"></option>
                            <option selected value="Tp. Hồ Chí Minh"></option>
                        </datalist>
                    </form>
                    <form>
                        <select>
                            <option selected value="grapefruit">
                                Lô
                            </option>
                            <option value="lime">A</option>
                            <option value="coconut">B</option>
                            <option value="mango">C</option>
                        </select>
                    </form>
                    <form>
                        <select>
                            <option selected value="grapefruit">
                                Phòng
                            </option>
                            <option value="lime">Tây Ninh</option>
                            <option value="coconut">Tp. Hồ Chí Minh</option>
                            <option value="mango">Hà Nội</option>
                        </select>
                    </form>
                </div>
                <AllProduct headerTitle={'Chung cư'} listCard={listCard}></AllProduct>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default RealProjectPage;
