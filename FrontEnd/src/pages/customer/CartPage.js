import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Cart from '../../components/Cart/Cart';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

function CartPage() {
    const child = [
        {
            path: '/',
            content: 'Trang chủ',
        },
        {
            path: '',
            content: 'Giỏ hàng',
        },
    ];

    return (
        <div>
            <Header></Header>
            <Breadcrumb child={child}></Breadcrumb>
            <Cart></Cart>
            <Footer></Footer>
        </div>
    );
}

export default CartPage;
