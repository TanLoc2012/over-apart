import './AllProduct.scss';
import ProductCard from '../ProductCard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../Pagination/Pagination';

function ListProduct() {
    return (
        <div className="list__product">
            <div className="list__product-header">
                <div className="list__product-header-left">Tất cả sản phẩm</div>
                <div className="list__product-header-right">
                    <div className="list__product-header-right-text">Sắp xếp theo</div>
                    <button className="list__product-header-right-btn">
                        <span>Mới Nhất</span>
                        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <div className="list__product-body">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
            <Pagination></Pagination>
        </div>
    );
}

export default ListProduct;
