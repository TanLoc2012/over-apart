import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Pagination.scss';

function Pagination() {
    return (
        <div className="pagination">
            <FontAwesomeIcon icon={faChevronLeft} style={{ cursor: 'pointer' }}></FontAwesomeIcon>
            <div className="pagination__item pagination-active">1</div>
            <div className="pagination__item">2</div>
            <div className="pagination__item">3</div>
            <div>...</div>
            <div className="pagination__item">19</div>
            <FontAwesomeIcon icon={faChevronRight} style={{ cursor: 'pointer' }}></FontAwesomeIcon>
        </div>
    );
}

export default Pagination;
