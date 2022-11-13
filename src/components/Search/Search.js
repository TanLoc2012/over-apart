import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search({ child }) {
    return (
        <div className="search">
            <button className="search__btn" style={{ borderRadius: child.borderRadius }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search__btn__icon" />
                <input placeholder={child.placeHolder} className="search_btn_input" />
            </button>
        </div>
    );
}

export default Search;
