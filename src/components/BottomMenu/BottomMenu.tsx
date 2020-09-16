import React,{useState} from 'react';
import './BottomMenu.css';

const BottomMenu: React.FC = () => {

    const [hover, setHover] = useState(false);

    const onMouseEnter = () => {
        setHover(true);
    }

    const onMouseLeave = () => {
        setHover(false);
    }

    return (
        <div className="bottom-menu-root">
            <div className={hover ? "bottom-menu-container hover" : "bottom-menu-container"}>
                <div className="bottom-menu-icon">
                    아이콘1
                </div>
                <div className="bottom-menu-icon">
                    아이콘2
                </div>
                <div className="bottom-menu-icon">
                    아이콘3
                </div>
                <div className="bottom-menu-icon">
                    아이콘4
                </div>
                <div className="bottom-menu-icon">
                    아이콘5
                </div>
            </div>
            <div className="wrap" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            </div>
        </div>
    )
}

export default BottomMenu;