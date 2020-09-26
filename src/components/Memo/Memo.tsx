import React from 'react';
import useMemoState from '../../hooks/useMemoState';
import './Memo.css';
import MemoNav from './MemoNav';
import MemoSide from './MemoSide';
import MemoTextField from './MemoTextField';

const Memo = () => {

    const { visible, fullscreen } = useMemoState();

    return (
        <div className={"memo" + (visible ? "" : " close") + (fullscreen ? " fullscreen" : "")}>
            <MemoNav />
            <div className="grid">
                <MemoSide />
                <MemoTextField />
            </div>
        </div>
    )
}

export default Memo
