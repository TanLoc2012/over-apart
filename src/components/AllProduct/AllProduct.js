import './AllProduct.scss';
import Filter from './Filter';
import ListProduct from './ListProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../ProductCard/ProductCard';
import images from '../../assets/images';
import ApartmentCard from '../ApartmentCard/ApartmentCard';

function AllProduct({ headerTitle, listCard }) {
    headerTitle = headerTitle ? headerTitle : 'Tất cả sản phẩm';
    listCard = listCard
        ? listCard
        : {
              component: <ProductCard></ProductCard>,
              itemInfos: [
                  {
                      img: images.f1,
                      productName: 'Bộ bàn ghế Barcelona',
                      rating: 5,
                      sold: 20,
                      price: '6.900.000 đ',
                  },
              ],
          };
    return (
        <div className="container_shop-all-product">
            <div className="container__list-product">
                <div className="list__product-header">
                    <div className="list__product-header-left">{headerTitle}</div>
                    <div className="list__product-header-right">
                        <div className="list__product-header-right-text">Sắp xếp theo</div>
                        <button className="list__product-header-right-btn">
                            <span>Mới Nhất</span>
                            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
                <ListProduct listCard={listCard}></ListProduct>
            </div>
            <Filter></Filter>
        </div>
    );
}

export default AllProduct;
