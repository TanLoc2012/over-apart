import './Header.scss';

function ListCartItem({ product }) {
    return (
        <div className="cart__list-item">
            <div className="cart__list-item-info">
                <img src={product.img} alt="Product image"></img>
                <div>{product.productName}</div>
            </div>
            <div style={{ color: 'red' }}>{product.price.toLocaleString('it-IT')} đ</div>
        </div>
    );
}

export default ListCartItem;
