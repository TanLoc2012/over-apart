import images from '../../assets/images';
import './authentication.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogIn } from '../../reducers/userSlice';

function LoginPage() {
    const dispath = useDispatch();
    const userInfo = useSelector((state) => state.user.user);

    return (
        <div className="login">
            <img className="login__image" src={images.p1} alt="login image"></img>
            <div className="login__box">
                <div className="login__header">
                    <img className="logo__image" src={images.logoWhite} alt="Logo image"></img>
                    <div>
                        <select className="select-wrapper">
                            <option selected value="coconut">
                                Việt Nam
                            </option>
                            <option value="lime">Tiếng Anh</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h3>Đăng nhập</h3>
                    <div>
                        <span>Bạn chưa có tài khoản? </span>
                        <Link className="color-link" to="">
                            {' '}
                            Đăng ký
                        </Link>
                    </div>
                </div>
                <form>
                    <input className="input-wrapper" type="email" name="email" placeholder="Email" />
                    <input className="input-wrapper" type="password" name="password" placeholder="Password" />
                    <Link className="forgot__pwd color-link" to="">
                        Quên mật khẩu?
                    </Link>
                    <button type="submit">Đăng nhập</button>
                </form>
                <hr style={{ marginTop: 20, marginBottom: 20 }} />
            </div>
        </div>
    );
}

export default LoginPage;
