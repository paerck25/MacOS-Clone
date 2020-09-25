import React from 'react';
import './MainPage.css';
import Navigation from '../../components/Navigation';
import BottomMenu from '../../components/BottomMenu';
import Browser from '../../components/Browser';
import Memo from '../../components/Memo';

const MainPage = () => {
    return (
        <div>
            <Navigation/>
            <Browser/>
            <Memo/>
            <BottomMenu/>
        </div>
    )
}

export default MainPage
