import { Link } from 'react-router-dom';
import './Breadcrumb.scss';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';

function Breadcrumb({ child }) {
    return (
        <div className="container container__breadcrumb">
            {child.map((c) =>
                c.path === '' ? (
                    <span key={c.content}>{c.content}</span>
                ) : (
                    <Fragment key={c.content}>
                        <Link to={c.path} className="breadcrumb__path">
                            {c.content}
                        </Link>
                        <FontAwesomeIcon icon={faAngleRight} className="breadcrumb__icon" />
                    </Fragment>
                ),
            )}
        </div>
    );
}

export default Breadcrumb;
