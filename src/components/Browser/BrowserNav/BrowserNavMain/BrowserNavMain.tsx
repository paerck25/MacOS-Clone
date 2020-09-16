import React from 'react'
import './BrowserNavMain.css';

const BrowserNavMain = () => {
    return (
        <main className="browser-nav-main">
            <div className="main-tools">
                <div className="prev">〈</div>
                <div className="next">〉</div>
                <div className="refresh">⟳</div>
            </div>
            <div className="main-url">
                <input className="url-input"/>
            </div>
        </main>
    )
}

export default BrowserNavMain;
