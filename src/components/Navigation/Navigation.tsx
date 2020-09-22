import React from 'react';
import Clock from './Clock';
import useBrowserState from '../../hooks/useBrowserState';
import DropDown from './DropDown';
import './Navigation.css';
import { useHistory } from 'react-router-dom';

type menuType = {
    name : string;
    onClick : () => void;
}


const Navigation: React.FC = () => {

    const { fullscreen } = useBrowserState();

    const history = useHistory();

    const defaultMenuList:Array<menuType> = [
        {
            name : '이 Mac에 관하여',
            onClick : () => { alert('Mac Info') }
        },
        {
            name : '시스템 환경설정...',
            onClick : () => { alert('System setting') }
        },
        {
            name : 'App Store...',
            onClick : () => { alert('App store') }
        },
        {
            name : '강제 종료...',
            onClick : () => { alert('force stop') }
        },
        {
            name : '잠자기',
            onClick : () => { alert('sleep') }
        },
        {
            name : '시스템 종료...',
            onClick : () => { history.push('/') }
        },
        {
            name : '화면 잠금',
            onClick : () => { history.push('/login') }
        },
        {
            name : '김동제 로그아웃...',
            onClick : () => { history.push('/login') }
        },
    ]

    return (
        <nav className={fullscreen?'fullscreen' : ''}>
            <DropDown.Wrap icon>
                {defaultMenuList.map((menu)=>{
                    return <DropDown.Item onClick={menu.onClick}>{menu.name}</DropDown.Item>
                })}
            </DropDown.Wrap>
            <DropDown.Wrap name="메뉴2">
                <DropDown.Item onClick={() => { alert('왜안돼1') }}>리스트1</DropDown.Item>
                <DropDown.Item className="test" onClick={() => { alert('왜안돼2') }}>리스트2</DropDown.Item>
            </DropDown.Wrap>
            <Clock />
        </nav >

    )
}

export default Navigation;