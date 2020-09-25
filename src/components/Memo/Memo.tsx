import React from 'react';
import useMemoState from '../../hooks/useMemoState';
import './Memo.css';
import MemoNav from './MemoNav';

const Memo = () => {

    const { visible, fullscreen } = useMemoState();

    return (
        <div className={"memo" + (visible ? "" : " close") + (fullscreen ? " fullscreen" : "")}>
          <MemoNav/>
        </div>
    )
}

export default Memo
