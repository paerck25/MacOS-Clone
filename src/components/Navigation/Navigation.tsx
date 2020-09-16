import React, { useEffect, useState } from 'react';
import Clock from './Clock';
import './Navigation.css';


const Navigation: React.FC = () => {

    const [open, setOpen] = useState('')

    const onClickOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {;
        const {className} = e.target as Element
        setOpen(className);
    }

    const onClickClose = () => {
        setOpen('');
    }

    useEffect(()=>{
        (document.querySelector('body') as Element).addEventListener('click',onClickClose);
        return () => {
            (document.querySelector('body') as Element).removeEventListener('click',onClickClose);
        }
    },[])

    return (
        <div className="nav-root">
            <nav>
                <div className={"logo" + (open === 'logo' ? ' clicked' : '')} onClick={onClickOpen}>
                    로고
                </div>
                <div className={"main" + (open === 'main' ? ' clicked' : '')} onClick={onClickOpen}>
                    메인
                </div>
                <div className={"sub1" + (open === 'sub1' ? ' clicked' : '')} onClick={onClickOpen}>
                    서브1
                </div>
                <div className={"sub2" + (open === 'sub2' ? ' clicked' : '')} onClick={onClickOpen}>
                    서브2
                </div>
                <div className={"sub3" + (open === 'sub3' ? ' clicked' : '')} onClick={onClickOpen}>
                    서브3
                </div>
                <div className="clock">
                    <Clock />
                </div>
                <div className="menuIcon">
                    아이콘
                </div>
            </nav >
            <div className="menu-list">
                <ul className={"logo" + (open === 'logo' ? ' show-menu' : '')}>
                    <li>1.하나123123</li>
                    <li>1.하나123123</li>
                    <li>1.하나123123</li>
                    <li>1.하나123123</li>
                </ul>
                <ul className={"main" + (open === 'main' ? ' show-menu' : '')}>
                    <li>1.main</li>
                    <li>1.main1.main1.main1.main</li>
                    <li>1.main</li>
                    <li>1.main</li>
                </ul>
                <ul className={"sub1" + (open === 'sub1' ? ' show-menu' : '')}>
                    <li>1.sub1</li>
                    <li>1.sub1</li>
                    <li>1.sub1</li>
                    <li>1.sub1</li>
                </ul>
                <ul className={"sub2" + (open === 'sub2' ? ' show-menu' : '')}>
                    <li>1.sub2</li>
                    <li>1.sub2</li>
                    <li>1.sub2</li>
                    <li>1.sub2</li>
                </ul>
                <ul className={"sub3" + (open === 'sub3' ? ' show-menu' : '')}>
                    <li>1.sub3</li>
                    <li>1.sub3</li>
                    <li>1.sub3</li>
                    <li>1.sub3</li>
                </ul>
            </div>
        </div>

    )
}

export default Navigation;