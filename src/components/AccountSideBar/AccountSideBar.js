import './AccountSideBar.scss';
import Avatar from '../Avatar/Avatar';
import images from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function AccountSideBar() {
    return (
        <div className="container account__sidebar">
            <div className="account__sidebar-avatar">
                <img src={images.avatar} alt="Product image" style={{ width: '48px', borderRadius: '48px' }}></img>
                <span className="">Tấn Lộc</span>
            </div>
            <div className="account__sidebar-value">
                <Link className="">
                    <FontAwesomeIcon icon={faUser} className="account__sidebar-value-icon"></FontAwesomeIcon>
                    <span>Thông tin tài khoản</span>
                </Link>
                <Link to="/profile">
                    <FontAwesomeIcon
                        icon={faUser}
                        className="account__sidebar-value-icon"
                        style={{ opacity: '0' }}
                    ></FontAwesomeIcon>
                    <span>Hồ sơ</span>
                </Link>
                <Link to="/address">
                    <FontAwesomeIcon
                        icon={faUser}
                        className="account__sidebar-value-icon"
                        style={{ opacity: '0' }}
                    ></FontAwesomeIcon>
                    <span>Địa chỉ</span>
                </Link>
                <Link className="">
                    <FontAwesomeIcon
                        icon={faUser}
                        className="account__sidebar-value-icon"
                        style={{ opacity: '0' }}
                    ></FontAwesomeIcon>
                    <span>Đổi mật khẩu</span>
                </Link>
                <Link className="">
                    <FontAwesomeIcon
                        icon={faUser}
                        className="account__sidebar-value-icon"
                        style={{ opacity: '0' }}
                    ></FontAwesomeIcon>
                    <span>Đổi tài khoản ngân hàng</span>
                </Link>
                <Link className="">
                    <FontAwesomeIcon
                        icon={faUser}
                        className="account__sidebar-value-icon"
                        style={{ opacity: '0' }}
                    ></FontAwesomeIcon>
                    <span>Xóa tài khoản</span>
                </Link>
                <Link to="/my-purchase">
                    <FontAwesomeIcon icon={faClipboard} className="account__sidebar-value-icon"></FontAwesomeIcon>
                    <span>Đơn mua</span>
                </Link>
                <Link to="/my-wishlist">
                    <FontAwesomeIcon icon={faHeart} className="account__sidebar-value-icon"></FontAwesomeIcon>
                    <span>Mục yêu thích</span>
                </Link>
                <Link className="">
                    <FontAwesomeIcon icon={faUser} className="account__sidebar-value-icon"></FontAwesomeIcon>
                    <span>Nhà thiết kế</span>
                </Link>
                <Link className="">
                    <FontAwesomeIcon icon={faUser} className="account__sidebar-value-icon"></FontAwesomeIcon>
                    <span>Nhà cung cấp nội thất</span>
                </Link>
            </div>
        </div>
    );
}

export default AccountSideBar;
