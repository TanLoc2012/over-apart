import images from '../../assets/images';
import './MyProjectCard.scss';

function MyProjectCard() {
    return (
        <div className="my-project__card">
            <img src={images.p1} alt="My Project image"></img>
            <div className="my-project__card-info">
                <h4>New Project</h4>
                <div className="">15, 11, 2022</div>
            </div>
        </div>
    );
}

export default MyProjectCard;
