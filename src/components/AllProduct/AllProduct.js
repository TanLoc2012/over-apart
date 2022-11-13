import './AllProduct.scss';
import Filter from './Filter';
import ListProduct from './ListProduct';

function AllProduct() {
    return (
        <div className="container_shop-all-product">
            <ListProduct></ListProduct>
            <Filter></Filter>
        </div>
    );
}

export default AllProduct;
