import React from 'react';
import useBrowserState from '../../hooks/useBrowserState';
import useDraggable from '../../hooks/useDraggable';
import './Browser.css';
import BrowserMain from './BrowserMain';
import BrowserNav from './BrowserNav';

const Browser = () => {

    const { visible, fullscreen } = useBrowserState();
    const { moveElement,dragStart,onDragging } = useDraggable();
    return (
        <div 
        ref={moveElement}
        className={"browser-root" + (visible ? "" : " close") + (fullscreen ? " fullscreen" : "")}
        >
            <BrowserNav />
            <BrowserMain />
        </div>

    )
}

export default Browser;
