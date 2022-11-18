import './ApartmentCard.scss';
import images from '../../assets/images';
import { Link } from 'react-router-dom';

function ApartmentCard({ product }) {
    product = product
        ? product
        : {
              img: images.a1,
              productName: 'Chung cư Vinhome Quận 9',
              description1: 'Chủ đầu tư: Vinhome',
              description2: 'Địa chỉ: Quận 9, TP Hồ Chí Minh',
          };

    return (
        <div className="apartment__cart">
            <div className="apartment__cart-image">
                <Link to="/apartment-detail">
                    <img src={product.img} alt="Product image"></img>
                </Link>
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
