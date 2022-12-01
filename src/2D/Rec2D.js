import { useEffect } from 'react';
import { Group, Rect } from 'react-konva';
function Rec2D(props) {
    const clickHandler = (e) => {
        const stage = e.target.absolutePosition();
        const x = e.target.width();
        const y = e.target.height();
        console.table(x,y);
    };
    // const stage = props.child[0].absolutePosition();
    useEffect(() => {
        console.table(props.children.ref.current.width());
        console.table(props.children.ref.current.height());
    });
    
    return (
        <Group onClick={clickHandler}>
            {props.children}
            <Rect x={500} y={100} width={100} height={100} fill="white" draggable stroke="black" strokeWidth={2} />
        </Group>
    );
}

export default Rec2D;
