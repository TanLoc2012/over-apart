import { Fragment } from 'react';
import AccountSideBar from '../../../components/AccountSideBar/AccountSideBar';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import './MyAccount.scss';

function MyAddressPage() {
    const breadcrumb = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '',
            content: 'Địa chỉ của tôi',
        },
    ];
    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <div className="container my__address">
                <AccountSideBar></AccountSideBar>
                <div className="my__address-info">
                    <div style={{ marginRight: '16px', marginLeft: '16px' }} className="info-header">
                        <div className="">Địa chỉ</div>
                        <button>Thêm địa chỉ</button>
                    </div>
                    <div className="my__address-info-body">
                        <div className="address__info-body-item">
                            <div className="body__item-header">
                                <div className="body__item-header-info">
                                    <span className="body__item-header-name">Nguyễn Tấn Lộc</span>
                                    <div className="body__item-header-seperate"></div>
                                    <span>(+84) 347651292</span>
                                </div>
                                <div className="body__item-header-btn">
                                    <button>Cập nhật</button>
                                    <button>Xóa</button>
                                </div>
                            </div>
                            <div className="body__item-body">
                                <div>
                                    <div>14/38, làng tăng phú</div>
                                    <div>Phường Tăng Nhơn Phú A, Thành Phố Thủ Đức, TP. Hồ Chí Minh</div>
                                </div>
                                <button>Thiết lập mặc định</button>
                            </div>
                            <button className="body__item-footer">Mặc định</button>
                        </div>
                        <div className="address__info-body-item-seperate"></div>
                        <div className="address__info-body-item">
                            <div className="body__item-header">
                                <div className="body__item-header-info">
                                    <span className="body__item-header-name">Nguyễn Tấn Lộc</span>
                                    <div className="body__item-header-seperate"></div>
                                    <span>(+84) 347651292</span>
                                </div>
                                <div className="body__item-header-btn">
                                    <button>Cập nhật</button>
                                    <button>Xóa</button>
                                </div>
                            </div>
                            <div className="body__item-body">
                                <div>
                                    <div>14/38, làng tăng phú</div>
                                    <div>Phường Tăng Nhơn Phú A, Thành Phố Thủ Đức, TP. Hồ Chí Minh</div>
                                </div>
                                <button>Thiết lập mặc định</button>
                            </div>
                            <button className="body__item-footer">Mặc định</button>
                        </div>
                        <div className="address__info-body-item-seperate"></div>
                        <div className="address__info-body-item">
                            <div className="body__item-header">
                                <div className="body__item-header-info">
                                    <span className="body__item-header-name">Nguyễn Tấn Lộc</span>
                                    <div className="body__item-header-seperate"></div>
                                    <span>(+84) 347651292</span>
                                </div>
                                <div className="body__item-header-btn">
                                    <button>Cập nhật</button>
                                    <button>Xóa</button>
                                </div>
                            </div>
                            <div className="body__item-body">
                                <div>
                                    <div>14/38, làng tăng phú</div>
                                    <div>Phường Tăng Nhơn Phú A, Thành Phố Thủ Đức, TP. Hồ Chí Minh</div>
                                </div>
                                <button>Thiết lập mặc định</button>
                            </div>
                            <button className="body__item-footer">Mặc định</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default MyAddressPage;
