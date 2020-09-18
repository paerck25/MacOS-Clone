import React, { useEffect, useState } from 'react';
import Clock from './Clock';
import './Navigation.css';


const Navigation: React.FC = () => {

    const [open, setOpen] = useState('')

    const [menu, setMenu] = useState([{
        class : 'logo',
        child : <div className="apple-icon"></div>
    }])

    const [list, setList] = useState([{
        class : 'logo',
        list : ['이 Mac에 관하여','시스템 환경설정...','AppStore...','강제 종료','잠자기','재시동...','시스템 종료...','화면 잠금','로그아웃...']
    }])

    const onClickOpen = (thisClass:string) => {
        setOpen(thisClass);
    }

    const onClickClose = () => {
        setOpen('');
    }

    useEffect(() => {
        document.body.addEventListener('click',onClickClose);
        return () => {
            document.body.removeEventListener('click',onClickClose);
        }
    }, [])

    const printMenu = menu.map((obj,index)=>{
        return <div key={index} className={obj.class + (open === obj.class ? ' clicked' : '')} onClick={()=>{onClickOpen(obj.class)}}>{obj.child}</div>
    })

    const printList = list.map((obj,index)=>{
        return (
            <ul key={index} className={obj.class + (open === obj.class ? ' show-menu' : '')}>
                {obj.list.map((obj,index)=>{
                    return <li key={index}>{obj}</li>
                })}
            </ul>
            )
    })

    return (
        <div className="nav-root">
            <nav>
                {printMenu}
                <div className="clock">
                    <Clock />
                </div>
                <div className="menuIcon">
                    아이콘
                </div>
            </nav >
            <div className="menu-list">
                {printList}
            </div>
        </div>

    )
}

export default Navigation;