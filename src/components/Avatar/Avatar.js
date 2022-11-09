import './Avatar.scss';
import images from '../../assets/images';

function Avatar() {
    return (
        <a className="avatar">
            <img className="avatar__image" src={images.avatar} alt="Avatar" />
        </a>
    );
}

export default Avatar;
