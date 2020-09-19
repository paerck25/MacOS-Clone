import React, { ReactNode } from 'react'

type propsType = {
    children : ReactNode;
    className? : string;
    onClick : () => void;
}

const Item = ({children, ...props}:propsType) => {
    console.log(props);
    return (
        <li {...props}>{children}</li>
    )
}

export default Item
