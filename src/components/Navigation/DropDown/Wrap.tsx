import React, { useState, useEffect, ReactNode, useRef } from 'react';

type propsType = {
    name: string;
    children: ReactNode;
}

const DropDown = ({ name, children }: propsType) => {

    const [open, setOpen] = useState(false);

    const ref = useRef(null);

    const onClickOpen = () => {
        setOpen(!open);
    }

    const onClickClose = (event: MouseEvent) => {
        if ((event.target as Element) !== ref.current) {
            setOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener('click',onClickClose);
        return () => {
            window.removeEventListener('click', onClickClose);
        }
    }, [])


    return (
        <div className="dropdown">
            <button ref={ref} className={"dropdown-btn" + (open ? ' clicked' : '')} onClick={onClickOpen}>
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
