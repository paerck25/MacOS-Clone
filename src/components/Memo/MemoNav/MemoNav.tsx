import React from 'react';
import './MemoNav.css';
import useMemoState from '../../../hooks/useMemoState';

const MemoNav = () => {

    const { fullscreen, minMemo, maxMemo ,closeMemo} = useMemoState();

    const onClickMemo = () => {
        closeMemo();
        minMemo();
    }

    return (
        <div className="memo-nav">
            <div className="memo-nav-buttons">
                <div className="close" onClick={onClickMemo}>
                    <div className="icon">×</div>
                </div>
                <div className="down">
                    <div className="icon">-</div>
                </div>
                <div className="minMax" onClick={fullscreen ? minMemo : maxMemo}>
                    <div className="icon">↔</div>
                </div>
            </div>
        </div>
    )
}

export default MemoNav;
