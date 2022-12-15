import './Header.scss';

function ListCartItem({ product }) {
    return (
        <div className="cart__list-item">
            <div className="cart__list-item-info">
                <img src={product.images[0]} alt="Product image"></img>
                <div className="cart__list-item-name">{product.productName}</div>
            </div>
            <div style={{ color: 'red' }}>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}{' '}
            </div>
        </div>
    );
}

export default ListCartItem;
