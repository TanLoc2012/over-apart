import './Design2D.scss';
import { Stage, Layer, Line, Image, Rect } from 'react-konva';
import Rec2D from '../../../2D/Rec2D';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSave } from '@fortawesome/free-solid-svg-icons';
import images from '../../../assets/images';
import { useState, useRef, useEffect } from 'react';
import URLImage from '../../../2D/LoadImage';
import useImage from 'use-image';
import Konva from 'konva';
import Layout2D from './Layout2D';
import { update } from '../../../reducers/itemSlice';
import { useDispatch } from 'react-redux';
function Design2D() {
    const dispath = useDispatch();
    const shapeRef = useRef(null);
    const stageRef = useRef(null);
    const [index,setIndex] = useState(0)
    const stepSize = 40; // set a value for the grid step gap.
    const xSteps = Math.round(1900 / stepSize),
        ySteps = Math.round(700 / stepSize);
    let verticalLines = [];
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
    const [display, setDisplay] = useState(true);
    const handleAddWall = (id) => {
        setLayerItems([
            ...layerItems,
            <Rec2D index={index}>
                <Image image={image} x={500} y={200} style={{ maxWidth: '100px' }} ref={shapeRef} />
            </Rec2D>
            ,
        ]);
        setIndex(index+1);
    };

    const url = images.d21;
    const [image] = useImage(url);
    var json;
    const handleSave = () => {
        var json = stageRef.current.toJSON();
        var stage1 = Konva.Node.create(json, 'con');
        setDisplay(false);
    };
    return (
        <div className="design2d">
            <div className="header"></div>
            <div className="toolbar">
                <div className="toolbar__item">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <div className="toolbar__item" onClick={handleSave}>
                    <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
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
                        <img src={images.square} alt="aa" onClick={() => handleAddWall(1)}></img>
                        <img src={images.d21} alt="aa" onClick={() => handleAddWall(1)}></img>
                    </div>
                </div>
            </div>
            <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef} onClick={() => dispath(update({ index: -1 }))}>
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
