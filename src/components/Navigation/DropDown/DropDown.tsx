import React, { useState, useEffect } from 'react';
import './DropDown.css';

type propsType = {
    name: string;

}

const DropDown = () => {

    const [open, setOpen] = useState(false);

    const onClickOpen = () => {
        setOpen(true);
    }

    const onClickClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        document.body.addEventListener('click', onClickClose);
        return () => {
            document.body.removeEventListener('click', onClickClose);
        }
    }, [])

    return (
        <div className="dropdown">
            <button className="dropdown-btn" onClick={onClickOpen}>
                버튼
            </button>
            {
                open
                    ?
                    <ul className="dropdown-list">
                        <li>list1</li>
                        <li>list2</li>
                        <li>list3</li>
                        <li>list4</li>
                    </ul>
                    :
                    null
            }
        </div>
    )
}

export default DropDown
