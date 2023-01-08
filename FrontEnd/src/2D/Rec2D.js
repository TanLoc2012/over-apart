import { useEffect } from 'react';
import { Group, Line } from 'react-konva';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../reducers/itemSlice';
function Rec2D(props) {
    // const stage = props.child[0].absolutePosition();
    const dispath = useDispatch();
    const index = useSelector((state) => state.item.current);
    const up = useSelector((state) => state.item.update);
    useEffect(()=>{
        console.log(props.index);
    })
    return (
        <Group draggable onClick={() => dispath(update({ index: props.index }))}>
            {props.children}
            {props.index==index&&props.children.ref.current.x()!=null?
            <>
            <Line points={[props.children.ref.current.x(), props.children.ref.current.y()-5, props.children.ref.current.x(), props.children.ref.current.y()-20]} stroke="rgba(0, 0, 0, 0.6)" strokeWidth={3} />
            <Line points={[props.children.ref.current.x()-5, props.children.ref.current.y(), props.children.ref.current.x()-20, props.children.ref.current.y()]} stroke="rgba(0, 0, 0, 0.6)" strokeWidth={3} />
            <Line points={[props.children.ref.current.x(), props.children.ref.current.y()+props.children.ref.current.height()+5, props.children.ref.current.x()-20, props.children.ref.current.y()+props.children.ref.current.height()+5]} stroke="rgba(0, 0, 0, 0.6)" strokeWidth={3} />
            <Line points={[props.children.ref.current.x()+props.children.ref.current.width()+5, props.children.ref.current.y(), props.children.ref.current.x()+props.children.ref.current.width()+5, props.children.ref.current.y()-20]} stroke="rgba(0, 0, 0, 0.6)" strokeWidth={3} />
            </>:<></>}
        </Group>
    );
}

export default Rec2D;
