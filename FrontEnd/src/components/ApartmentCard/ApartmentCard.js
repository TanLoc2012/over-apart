import './ApartmentCard.scss';
import { Link } from 'react-router-dom';

function ApartmentCard({ product }) {
    return (
        <div className="apartment__cart">
            <div className="apartment__cart-image">
                <Link to={`/apartment-detail/${product.id}`}>
                    <img src={product.img} alt="Product image"></img>
                </Link>

                <div className=""></div>
            </div>
            <div className="apartment__card-info">
                <p className="apartment__card-info-name">{product.productName}</p>
                <p>{product.description1}</p>
                <p>{product.description2}</p>
            </div>
        </div>
    );
}

export default ApartmentCard;
