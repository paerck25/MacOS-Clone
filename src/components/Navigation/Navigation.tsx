import React, { useEffect, useState } from 'react';
import Clock from './Clock';
import useBrowserState from '../../hooks/useBrowserState';
import DropDown from './DropDown';
import './Navigation.css';


const Navigation: React.FC = () => {

    const { fullscreen } = useBrowserState();


    return (
        <nav className={fullscreen?'fullscreen' : ''}>
            <DropDown.Wrap name="메뉴1">
                <DropDown.Item onClick={() => { console.log('왜안돼1') }}>리스트1</DropDown.Item>
                <DropDown.Item className="test" onClick={() => { console.log('왜안돼2') }}>리스트2</DropDown.Item>
                <DropDown.Item onClick={() => { console.log('왜안돼3') }}>리스트3</DropDown.Item>
                <DropDown.Item onClick={() => { console.log('왜안돼4') }}>리스트3</DropDown.Item>
            </DropDown.Wrap>
            <DropDown.Wrap name="메뉴2">
                <DropDown.Item onClick={() => { console.log('왜안돼1') }}>리스트1</DropDown.Item>
                <DropDown.Item className="test" onClick={() => { console.log('왜안돼2') }}>리스트2</DropDown.Item>
            </DropDown.Wrap>
            <Clock />
        </nav >

    )
}

export default Navigation;