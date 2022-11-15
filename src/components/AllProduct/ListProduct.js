import './AllProduct.scss';
import ProductCard from '../ProductCard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../Pagination/Pagination';

import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

function ListProduct() {
    var layouts = [
        { i: '1', x: 0, y: 0, w: 3, h: 1 },
        { i: '2', x: 3, y: 0, w: 3, h: 1 },
        { i: '3', x: 6, y: 0, w: 3, h: 1 },
        { i: '4', x: 9, y: 0, w: 3, h: 1 },
        { i: '5', x: 0, y: 1, w: 3, h: 1 },
        { i: '6', x: 3, y: 1, w: 3, h: 1 },
        { i: '7', x: 6, y: 1, w: 3, h: 1 },
        { i: '8', x: 9, y: 1, w: 3, h: 1 },
        { i: '9', x: 0, y: 2, w: 3, h: 1 },
        { i: '10', x: 3, y: 2, w: 3, h: 1 },
        { i: '11', x: 6, y: 2, w: 3, h: 1 },
        { i: '12', x: 9, y: 2, w: 3, h: 1 },
    ];
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
            <ResponsiveGridLayout
                className="list__product-body"
                layouts={{ lg: layouts }}
                breakpoints={{ lg: 970, md: 940, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 8, xs: 4, xxs: 2 }}
                rowHeight={270}
                compactType="horizontal"
            >
                <div key="1">
                    <ProductCard></ProductCard>
                </div>
                <div key="2">
                    <ProductCard></ProductCard>
                </div>
                <div key="3">
                    <ProductCard></ProductCard>
                </div>
                <div key="4">
                    <ProductCard></ProductCard>
                </div>
                <div key="5">
                    <ProductCard></ProductCard>
                </div>
                <div key="6">
                    <ProductCard></ProductCard>
                </div>
                <div key="7">
                    <ProductCard></ProductCard>
                </div>
                <div key="8">
                    <ProductCard></ProductCard>
                </div>
                <div key="9">
                    <ProductCard></ProductCard>
                </div>
                <div key="10">
                    <ProductCard></ProductCard>
                </div>
                <div key="11">
                    <ProductCard></ProductCard>
                </div>
                <div key="12">
                    <ProductCard></ProductCard>
                </div>
            </ResponsiveGridLayout>
            <Pagination></Pagination>
        </div>
    );
}

export default ListProduct;
