import { Stage, Layer, Line, Image } from 'react-konva';

function Layout2D({ layderItems, stageRef }) {
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
    return (
        <Stage ref={stageRef} width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                {verticalLines}
                {horizontalLines}
                {layderItems}
            </Layer>
        </Stage>
    );
}

export default Layout2D;
