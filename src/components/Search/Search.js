import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search() {
    return (
        <div className="search">
            <button className="search__btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search__btn__icon" />
                <input placeholder="Nhập tên nội thất" className="search_btn_input" />
            </button>
        </div>
    );
}

export default Search;
