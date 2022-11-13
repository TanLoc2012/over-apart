import images from '../../assets/images';
import './Header.scss';

function ListCartItem() {
    return (
        <div className="cart__list-item">
            <div className="cart__list-item-info">
                <img src={images.f1} alt="Product image"></img>
                <div>Bo ban ghe </div>
            </div>
            <div style={{ color: 'red' }}>1.999.999 đ</div>
        </div>
    );
}

export default ListCartItem;
