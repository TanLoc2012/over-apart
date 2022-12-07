import images from '../../assets/images';
import './MyProjectCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faClone, faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';

function MyProjectCard() {
    return (
        <div className="my-project__card">
            <div className="cart__image">
                <img src={images.p1} alt="My Project image"></img>
                <div className="cart__icon">
                    <div className="icon-edit">
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </div>
                    <div className="icon-edit">
                        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                    </div>
                    <div className="icon-edit">
                        <FontAwesomeIcon icon={faClone}></FontAwesomeIcon>
                    </div>
                    <div className="icon-edit">
                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className="my-project__card-info">
                <h4>New Project</h4>
                <div className="">15, 11, 2022</div>
            </div>
        </div>
    );
}

export default MyProjectCard;
