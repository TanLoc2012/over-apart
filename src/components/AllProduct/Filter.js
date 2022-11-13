import './AllProduct.scss';
import FilterItem from './FilterItem';

function Filter() {
    return (
        <div className="all__product-filter">
            <div className="all__product-filter-header">LỌC SẢN PHẨM</div>
            <div className="all__product-filter-body">
                <FilterItem></FilterItem>
                <FilterItem></FilterItem>
            </div>
        </div>
    );
}

export default Filter;
