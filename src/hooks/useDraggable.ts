import { useRef } from 'react'

type position = {
    X: number;
    Y: number;
}


const useDraggable = () => {

    const moveElement = useRef<HTMLDivElement>(null);
    const { current } = moveElement;

    let firstX: number = 0;
    let firstY: number = 0;
    let howMuchMoving_X: number = 0;
    let howMuchMoving_Y: number = 0;


    const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
        firstX = e.clientX;
        firstY = e.clientY;
        console.log(firstX,firstY);
    }

    const changePosition = (element: HTMLElement, position: position) => {
        console.log('----------', element, '----------');
        const { X, Y } = position;
        element.style.top = (element.offsetTop - Y) + "px";
        element.style.left = (element.offsetTop - X) + "px";
    }

    const onDragging = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        howMuchMoving_X = firstX - e.clientX;
        howMuchMoving_Y = firstY - e.clientY;
        firstX = e.clientX;
        firstY = e.clientY;
        const position: position = {
            X: howMuchMoving_X,
            Y: howMuchMoving_Y,
        }
        console.log(moveElement);
        if(current){
            console.log('실행!');
            changePosition(current, position)
        }
    }

    return {
        moveElement,
        dragStart,
        onDragging,
    }

}

export default useDraggable;