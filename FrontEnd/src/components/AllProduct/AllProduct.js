import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import './AllProduct.scss';
import Filter from './Filter';
import ListProduct from './ListProduct';
import { url } from '../../configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../ProductCard/ProductCard';

function AllProduct({ headerTitle, categoryId, type }) {
    headerTitle = headerTitle ? headerTitle : 'Tất cả sản phẩm';
    const [selectValue, setSelectValue] = useState('newest');
    const [listCard, setListCard] = useState();
    const [totalPage, setTotalPage] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios
            .get(`${url}/api/product/${type}/${categoryId}?sortBy=${selectValue}&page=${currentPage}`)
            .then((reponse) => {
                let result = [];
                reponse.data.productCardResponseList.map((product) => {
                    result.push(<ProductCard product={product} type={'product'}></ProductCard>);
                });
                setListCard(result);
                setTotalPage(reponse.data.totalPage);
            });
    }, [selectValue, currentPage]);

    const pagination = (currentPage, totalPage) => {
        let page = [];
        if (currentPage < 4) {
            totalPage = totalPage < 6 ? totalPage : 5;
            for (let i = 1; i <= totalPage; i++) {
                page.push(
                    <div
                        className={currentPage == i ? 'pagination__item pagination-active' : 'pagination__item'}
                        onClick={(e) => setCurrentPage(e.target.innerText)}
                    >
                        {i}
                    </div>,
                );
            }
        } else {
            totalPage = Number(currentPage) + 2 > totalPage ? totalPage : Number(currentPage) + 2;
            for (let i = currentPage - 2; i <= totalPage; i++) {
                page.push(
                    <div
                        className={currentPage == i ? 'pagination__item pagination-active' : 'pagination__item'}
                        onClick={(e) => setCurrentPage(e.target.innerText)}
                    >
                        {i}
                    </div>,
                );
            }
        }
        return (
            <div className="pagination">
                <FontAwesomeIcon
                    icon={faAnglesLeft}
                    style={currentPage == 1 ? { opacity: 0.3 } : { cursor: 'pointer' }}
                    onClick={() => setCurrentPage(1)}
                ></FontAwesomeIcon>
                {page.map((item) => item)}
                <FontAwesomeIcon
                    icon={faAnglesRight}
                    style={currentPage == totalPage[totalPage.length - 1] ? { opacity: 0.3 } : { cursor: 'pointer' }}
                    onClick={() => setCurrentPage(totalPage)}
                ></FontAwesomeIcon>
            </div>
        );
    };

    return (
        <div className="container_shop-all-product">
            <div className="container__list-product">
                <div className="list__product-header">
                    <div className="list__product-header-left">{headerTitle}</div>
                    <div className="list__product-header-right">
                        <div className="list__product-header-right-text">Sắp xếp theo</div>
                        <select
                            value={selectValue}
                            onChange={(e) => setSelectValue(e.target.value)}
                            className="select-wrapper"
                        >
                            <option value="newest">Mới Nhất</option>
                            <option value="oldest">Cũ nhất</option>
                            <option value="price_increase">Giá: Tăng dần</option>
                            <option value="price_decrease">Giá: Giảm dần</option>
                            <option value="hot-sale">Nổi bật</option>
                            <option value="trend">Dự đoán xu hướng</option>
                        </select>
                    </div>
                </div>
                {listCard ? <ListProduct listCard={listCard}></ListProduct> : <p>Loading</p>}
                {totalPage ? pagination(currentPage, totalPage) : <p>Loading</p>}
            </div>
            <Filter></Filter>
        </div>
    );
}

export default AllProduct;
