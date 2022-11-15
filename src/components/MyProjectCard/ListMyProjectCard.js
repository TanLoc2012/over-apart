import MyProjectCard from './MyProjectCard';
import ProductCard from '../ProductCard/ProductCard';
import './MyProjectCard.scss';

import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

function ListMyProjectCard() {
    var layouts = [
        { i: '1', x: 0, y: 0, w: 4, h: 1 },
        { i: '2', x: 3, y: 0, w: 4, h: 1 },
        { i: '3', x: 6, y: 0, w: 4, h: 1 },
        { i: '4', x: 0, y: 1, w: 4, h: 1 },
        { i: '5', x: 3, y: 1, w: 4, h: 1 },
        { i: '6', x: 6, y: 1, w: 4, h: 1 },
    ];
    return (
        <ResponsiveGridLayout
            className="container list__project-card"
            layouts={{ lg: layouts }}
            breakpoints={{ lg: 1180, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={300}
            compactType="horizontal"
        >
            <div key="1">
                <MyProjectCard></MyProjectCard>
            </div>
            <div key="2">
                <MyProjectCard></MyProjectCard>
            </div>
            <div key="3">
                <MyProjectCard></MyProjectCard>
            </div>
            <div key="4">
                <MyProjectCard></MyProjectCard>
            </div>
            <div key="5">
                <MyProjectCard></MyProjectCard>
            </div>
            <div key="6">
                <MyProjectCard></MyProjectCard>
            </div>
        </ResponsiveGridLayout>
    );
}

export default ListMyProjectCard;
