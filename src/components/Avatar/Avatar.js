import './Avatar.scss';
import { Link } from 'react-router-dom';

function Avatar({ child }) {
    return (
        <Link to={child.href} className="avatar">
            <img className="avatar__image" src={child.img} alt="Avatar" style={{ width: child.imgWidth }} />
        </Link>
    );
}

export default Avatar;
