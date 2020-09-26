import React, { useState } from 'react';
import whale from '../../assets/icons/whale.png';
import github from '../../assets/icons/github-icon.png';
import memo from '../../assets/icons/memo.png';
import reactLogo from '../../assets/icons/logo.svg';
import './BottomMenu.css';
import useBrowserState from '../../hooks/useBrowserState';
import useMemoState from '../../hooks/useMemoState';

const BottomMenu: React.FC = () => {

    const { openBrowser } = useBrowserState();
    const { openMemo } = useMemoState();

    const [hover, setHover] = useState(false);

    const onMouseEnter = () => {
        setHover(true);
    }

    const onMouseLeave = () => {
        setHover(false);
    }

    return (
        <div className="bottom-menu-root">
            <div className="bottom-menu-wrap">
                <div className={hover ? "bottom-menu-container hover" : "bottom-menu-container"}>
                    <div className="bottom-menu-icon">
                        <img src={whale} alt="whale" onClick={openBrowser} />
                    </div>
                    <div className="bottom-menu-icon">
                        <img src={memo} alt="github" onClick={openMemo} width="40px" height="40px" />
                    </div>
                    <div className="bottom-menu-icon">
                        <img src={reactLogo} alt="reactLogo" />
                    </div>
                    <div className="bottom-menu-icon">
                        아이콘4
                    </div>
                    <div className="bottom-menu-icon">
                        아이콘5
                    </div>
                </div>
            </div>
            <div className="touch-line" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            </div>
        </div>
    )
}

export default BottomMenu;