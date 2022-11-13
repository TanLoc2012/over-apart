import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="container__footer">
            <footer className="container footer">
                <div className="footer__section">
                    <h5 className="footer__section-title">HỖ TRỢ KHÁCH HÀNG</h5>
                    <div className="footer__section-content">
                        <p>Hotline: 034 765 1292</p>
                        <p>Hỗ trợ khách hàng: hotro@op.vn</p>
                        <p>Báo lỗi bảo mật: security@op.vn</p>
                    </div>
                </div>
                <div className="footer__section">
                    <h5 className="footer__section-title">VỀ CHÚNG TÔI</h5>
                    <div className="footer__section-content">
                        <Link to="">Về OverApartment</Link>
                        <Link to="">Chính sách giải quyết khiếu nại</Link>
                        <Link to="">Chính sách bảo mật thông tin cá nhân</Link>
                    </div>
                </div>
                <div className="footer__section">
                    <h5 className="footer__section-title">DANH MỤC</h5>
                    <div className="footer__section-content">
                        <Link to="">Nội thất</Link>
                        <Link to="">Thiết kế mẫu</Link>
                        <Link to="">Dự án thực tế</Link>
                        <Link to="">Dự đoán xu hướng</Link>
                    </div>
                </div>
                <div className="footer__section">
                    <h5 className="footer__section-title">HỢP TÁC VÀ LIÊN KẾT</h5>
                    <div className="footer__section-content">
                        <Link to="">Trở thành nhà thiết kế?</Link>
                        <Link to="">Trở thành nhà cung cấp nội thất?</Link>
                    </div>
                </div>
                <div className="footer__section">
                    <h5 className="footer__section-title">KẾT NỐI VỚI CHÚNG TÔi</h5>
                    <div>
                        <Link to="">
                            <FontAwesomeIcon icon={faFacebook} className="footer__section-social" />
                        </Link>
                        <Link to="">
                            <FontAwesomeIcon icon={faSquareInstagram} className="footer__section-social" />
                        </Link>
                        <Link to="">
                            <FontAwesomeIcon icon={faYoutube} className="footer__section-social" />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
