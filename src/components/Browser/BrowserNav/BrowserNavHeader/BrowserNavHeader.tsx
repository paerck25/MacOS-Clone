import React, { useState } from 'react'
import './BrowserNavHeader.css';

const BrowserNavHeader = () => {

    const [click, setClick] = useState('');

    const onClickTab = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { className } = e.target as Element;
        console.log(e.target as Element);

        setClick(className);
    }
    
    return (
        <header className="browser-nav-header">
            <div className="tab-buttons">
                <div className="close">
                    <div className="icon">×</div>
                </div>
                <div className="down">
                    <div className="icon">-</div>
                </div>
                <div className="minMax">
                    <div className="icon">↔</div>
                </div>
            </div>
            <div className="tab-list">
                <div className={"tab" + (click === "tab2" ? " clicked" : "")} onClick={onClickTab}>
                    <div className="tab-content">새 탭</div>
                </div>
                <div className={"tab" + (click === "tab2" ? " clicked" : "")} onClick={onClickTab}>
                    <div className="tab-content">새 탭</div>
                </div>
                <div className={"tab" + (click === "tab3" ? " clicked" : "")} onClick={onClickTab}>
                    <div className="tab-content">새 탭</div>
                </div>
            </div>
        </header>
    )
}

export default BrowserNavHeader;
