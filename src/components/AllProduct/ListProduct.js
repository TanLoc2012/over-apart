import './AllProduct.scss';
import ProductCard from '../ProductCard/ProductCard';

import Pagination from '../Pagination/Pagination';

import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

function ListProduct({ listCard }) {
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
            <ResponsiveGridLayout
                className="list__product-body"
                layouts={{ lg: layouts }}
                breakpoints={{ lg: 970, md: 940, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 8, xs: 4, xxs: 2 }}
                rowHeight={270}
                compactType="horizontal"
            >
                <div key="1">{listCard.component}</div>
                <div key="2">{listCard.component}</div>
                <div key="3">{listCard.component}</div>
                <div key="4">{listCard.component}</div>
                <div key="5">{listCard.component}</div>
                <div key="6">{listCard.component}</div>
                <div key="7">{listCard.component}</div>
                <div key="8">{listCard.component}</div>
                <div key="9">{listCard.component}</div>
                <div key="10">{listCard.component}</div>
                <div key="11">{listCard.component}</div>
                <div key="12">{listCard.component}</div>
            </ResponsiveGridLayout>
            <Pagination></Pagination>
        </div>
    );
}

export default ListProduct;
