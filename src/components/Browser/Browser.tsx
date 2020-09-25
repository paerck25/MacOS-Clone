import React from 'react';
import useBrowserState from '../../hooks/useBrowserState';
import './Browser.css';
import BrowserMain from './BrowserMain';
import BrowserNav from './BrowserNav';

const Browser = () => {

    const { visible, fullscreen } = useBrowserState();
    
    return (
        <div className={"browser-root" + (visible ? "" : " close") + (fullscreen ? " fullscreen" : "")}>
            <BrowserNav />
            <BrowserMain />
        </div>
    )
}

export default Browser;
