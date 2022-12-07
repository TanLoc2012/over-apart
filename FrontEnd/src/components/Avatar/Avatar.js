import './Avatar.scss';
import { Link } from 'react-router-dom';

function Avatar({ child }) {
    return (
        <div className="avatar">
            <Link to={child.href} className="avatar">
                <img className="avatar__image" src={child.img} alt="Avatar" style={{ width: child.imgWidth }} />
            </Link>
            <div className="account__nav">
                <Link to="/profile">Tài khoản của tôi</Link>
                <Link to="/my-purchase">Đơn hàng của tôi</Link>
                <Link to="">Đăng xuất</Link>
            </div>
        </div>
    );
}

export default Avatar;
