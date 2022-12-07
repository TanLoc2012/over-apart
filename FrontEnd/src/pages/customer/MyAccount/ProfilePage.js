import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import AccountSideBar from '../../../components/AccountSideBar/AccountSideBar';
import Select from 'react-select';
import { Fragment } from 'react';
import Avatar from '../../../components/Avatar/Avatar';
import images from '../../../assets/images';
import './MyAccount.scss';

function ProfilePage() {
    const breadcrumb = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '',
            content: 'Thông tin tài khoản',
        },
    ];
    const optionDay = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '1' },
        { value: '5', label: '2' },
        { value: '6', label: '3' },
        { value: '7', label: '1' },
        { value: '8', label: '2' },
        { value: '9', label: '3' },
        { value: '10', label: '1' },
        { value: '11', label: '2' },
        { value: '12', label: '3' },
    ];
    const optionMonth = [
        { value: '1', label: 'Tháng 1' },
        { value: '2', label: 'Tháng 2' },
        { value: '3', label: 'Tháng 3' },
    ];
    const optionYear = [
        { value: '1999', label: '1999' },
        { value: '2000', label: '2000' },
        { value: '2001', label: '2001' },
    ];

    return (
        <Fragment>
            <Header></Header>
            <Breadcrumb child={breadcrumb}></Breadcrumb>
            <div className="container profile">
                <AccountSideBar></AccountSideBar>
                <div className="profile__info">
                    <div className="info-header">
                        <div className="">Thông tin tài khoản</div>
                        <button style={{ opacity: '0' }}>Thêm địa chỉ</button>
                    </div>
                    <div className="profile__info-body">
                        <form className="profile__info-body-left">
                            <div className="info__body-item">
                                <span>Họ & Tên</span>
                                <div className="info__body-item-wrapper-input">
                                    <input
                                        type="text"
                                        className="info__body-item-input"
                                        value={'Nguyễn Tấn Lộc'}
                                    ></input>
                                </div>
                            </div>
                            <div className="info__body-item">
                                <span>Email</span>
                                <div className="info__body-item-text">
                                    <span>loc.nguyencse@gmail.com</span>
                                    <btn className="info__body-item-text-btn">Thay đổi</btn>
                                </div>
                            </div>
                            <div className="info__body-item">
                                <span>Số điện thoại</span>
                                <div className="info__body-item-text">
                                    <span>0347651292</span>
                                    <btn className="info__body-item-text-btn">Thay đổi</btn>
                                </div>
                            </div>
                            <div className="info__body-item">
                                <span>Giới tính</span>
                                <div className="info__body-item-text">
                                    <div className="info__body-item-text-radio">
                                        <input type="radio" name="sex" value="Nam"></input>
                                        <label htmlFor="Nam">Nam</label>
                                    </div>
                                    <div className="info__body-item-text-radio">
                                        <input type="radio" name="sex" value="Nữ"></input>
                                        <label htmlFor="Nữ">Nữ</label>
                                    </div>
                                    <div className="info__body-item-text-radio">
                                        <input type="radio" name="sex" value="Giới tính khác"></input>
                                        <label htmlFor="Giới tính khác">Giới tính khác</label>
                                    </div>
                                </div>
                            </div>
                            <div className="info__body-item">
                                <span>Ngày sinh</span>
                                <div className="info__body-item-text">
                                    <Select defaultValue={optionDay[1]} options={optionDay} />
                                    <Select defaultValue={optionMonth[1]} options={optionMonth} />
                                    <Select defaultValue={optionYear[1]} options={optionYear} />
                                </div>
                            </div>
                            <div className="info__body-item">
                                <span></span>
                                <div className="info__body-item-text">
                                    <button className="info__body-left-btn">Lưu</button>
                                </div>
                            </div>
                        </form>
                        <div className="profile__info-body-right">
                            <div className="profile__info-body-right-avatar">
                                <img
                                    src={images.avatar}
                                    alt="Product image"
                                    style={{ width: '100px', borderRadius: '100px' }}
                                ></img>
                                <button>Chọn ảnh</button>
                                <div>
                                    Dụng lượng file tối đa 1 MB
                                    <br />
                                    Định dạng: .JPEG, .PNG
                                </div>
                            </div>
                            <div className=""></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}

export default ProfilePage;
