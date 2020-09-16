import React, { useState } from 'react';
import './Browser.css';
import BrowserNav from './BrowserNav';

const Browser = () => {

    return (
        <div className="browser-root" draggable="true">
            <BrowserNav />
        </div>
    )
}

export default Browser;
