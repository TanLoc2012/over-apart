import './Design2D.scss';
import { Stage, Layer, Line, Image, Rect } from 'react-konva';
import Rec2D from '../../../2D/Rec2D';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import images from '../../../assets/images';
import { useState, useRef } from 'react';
import URLImage from '../../../2D/LoadImage';
import useImage from 'use-image';

function Design2D() {
    const shapeRef = useRef(null);
    const stepSize = 40; // set a value for the grid step gap.
    const xSteps = Math.round(1900 / stepSize),
        ySteps = Math.round(700 / stepSize);
    let verticalLines = [];
    const url = images.d21;
    const [image] = useImage(url);
    for (let i = 0; i <= xSteps; i++) {
        verticalLines.push(
            <Line x={i * stepSize} points={[0, 0, 0, 700]} stroke="rgba(0, 0, 0, 0.2)" strokeWidth={1} />,
        );
    }
    let horizontalLines = [];
    for (let i = 0; i <= ySteps; i++) {
        horizontalLines.push(
            <Line y={i * stepSize} points={[0, 0, 1900, 0]} stroke="rgba(0, 0, 0, 0.2)" strokeWidth={1} />,
        );
    }
    const [layerItems, setLayerItems] = useState([]);
    const handleAddWall = (id) => {
        setLayerItems([
            ...layerItems,
            <Rec2D>
                <Image image={image} draggable x={500} y={200} style={{ maxWidth: '100px' }} ref={shapeRef}/>
            </Rec2D>
        ]);
        console.log(layerItems);
    };

    return (
        <div className="design2d">
            <div className="header"></div>
            <div className="toolbar">
                <div className="toolbar__item">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <div className="toolbar__item">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <div className="toolbar__item">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <div className="toolbar__item">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <div className="toolbar__item">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
            </div>
            <div className="toolbar__content">
                <div className="">
                    <div className="">
                        <img src={images.f1} alt="aa" onClick={() => handleAddWall(1)}></img>
                        <img src={images.p1} alt="aa" onClick={() => handleAddWall(1)}></img>
                    </div>
                </div>
            </div>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {verticalLines}
                    {horizontalLines}
                    {layerItems.map((item) => item)} 
                </Layer>
            </Stage>
        </div>
    );
}

export default Design2D;
