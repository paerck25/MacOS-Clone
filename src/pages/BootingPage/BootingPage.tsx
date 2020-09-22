import React, { useEffect,useCallback } from 'react';
import './BootingPage.css';
import whiteApple from '../../assets/icons/apple-white.svg';
import { useHistory } from 'react-router-dom';

const BootingPage = () => {

    const history = useHistory();

    const bootComplete = useCallback(
        () => {
            history.replace('/login');
        }
        ,[history]
    )

    useEffect(() => {
        setTimeout(bootComplete, 4000);
    }, [bootComplete])

    return (
        <div className="booting">
            <img src={whiteApple} alt="whiteApple" width="90px" height="80px" />
        </div>
    )
}

export default BootingPage
