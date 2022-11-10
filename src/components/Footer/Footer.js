import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
                        <p>Về OverApartment</p>
                        <p>Chính sách giải quyết khiếu nại</p>
                        <p>Chính sách bảo mật thông tin cá nhân</p>
                    </div>
                </div>
                <div className="footer__section">
                    <h5 className="footer__section-title">DANH MỤC</h5>
                    <div className="footer__section-content">
                        <p>Nội thất</p>
                        <p>Thiết kế mẫu</p>
                        <p>Dự án thực tế</p>
                        <p>Dự đoán xu hướng</p>
                    </div>
                </div>
                <div className="footer__section">
                    <h5 className="footer__section-title">HỢP TÁC VÀ LIÊN KẾT</h5>
                    <div className="footer__section-content">
                        <p>Trở thành nhà thiết kế?</p>
                        <p>Trở thành nhà cung cấp nội thất?</p>
                    </div>
                </div>
                <div className="footer__section">
                    <h5 className="footer__section-title">KẾT NỐI VỚI CHÚNG TÔi</h5>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} className="footer__section-social" />
                        <FontAwesomeIcon icon={faSquareInstagram} className="footer__section-social" />
                        <FontAwesomeIcon icon={faYoutube} className="footer__section-social" />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
