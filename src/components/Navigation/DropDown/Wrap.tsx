import React, { useState, useEffect, ReactNode } from 'react';

type propsType = {
    name: string;
    children: ReactNode;
}

const DropDown = ({name,children}:propsType) => {

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
                {name}
            </button>
            {
                open
                    ?
                    <ul className="dropdown-list">
                        {children}
                    </ul>
                    :
                    null
            }
        </div>
    )
}

export default DropDown;
