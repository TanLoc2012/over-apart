import './star.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faFullStar} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
function Star({number}) {
    const totalStars = 5;
    const activeStars = number;
    return (
        <div className="box">
                       {[...new Array(totalStars)].map((arr, index) => {
                        const activeState = activeStars;
                        const showEmptyIcon = activeState === -1 || activeState < index + 1;

                        const isActiveRating = activeState !== 1;
                        const isRatingWithPrecision = activeState % 1 !== 0;
                        const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
                        const showRatingWithPrecision =
                          isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;
                            return (
                                <div className="area" key={index}>
                                    <div className="fill" style={{color: '#FF0000',width: showRatingWithPrecision?`${(activeState % 1) * 100+1}%`:`0%`}}>
                                        <FontAwesomeIcon icon={faFullStar} />
                                    </div>
                                    <div>
                                        {showEmptyIcon?<FontAwesomeIcon style={{color: '#FF0000'}}icon={faStar} />:<FontAwesomeIcon style={{color: '#FF0000'}} icon={faFullStar} />}
                                    </div>
                                </div>
                            );
                            })}
                        </div>
    );
}

export default Star;
