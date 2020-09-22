import React from 'react';
import './MainPage.css';
import Navigation from '../../components/Navigation';
import BottomMenu from '../../components/BottomMenu';
import Browser from '../../components/Browser';

const MainPage = () => {
    return (
        <div>
            <Navigation/>
            <Browser/>
            <BottomMenu/>
        </div>
    )
}

export default MainPage
