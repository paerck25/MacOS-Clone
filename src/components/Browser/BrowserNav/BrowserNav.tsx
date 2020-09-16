import React from 'react';
import BrowserNavHeader from './BrowserNavHeader';
import BrowserNavMain from './BrowserNavMain';

const BrowserNav = () => {

    return (
        <div className="browser-nav">
            <BrowserNavHeader/>
            <BrowserNavMain/>
        </div>
    )
}

export default BrowserNav;
