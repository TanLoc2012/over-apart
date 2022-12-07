import './AllProduct.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function FilterItem() {
    return (
        <div className="fliter__body-item">
            <div className="filter__item-title">
                <span className="">Danh mục</span>
                <FontAwesomeIcon icon={faChevronDown} style={{ cursor: 'pointer' }}></FontAwesomeIcon>
            </div>
            <div className="filter__item-body">
                <div className="filter__item-body-item">
                    <input type="checkbox"></input>
                    <span className="filter__item-body-item-text">Tất cả</span>
                </div>
                <div className="filter__item-body-item">
                    <input type="checkbox"></input>
                    <span className="filter__item-body-item-text">Bàn</span>
                </div>
                <div className="filter__item-body-item">
                    <input type="checkbox"></input>
                    <span className="filter__item-body-item-text">Ghế</span>
                </div>
            </div>
        </div>
    );
}

export default FilterItem;
