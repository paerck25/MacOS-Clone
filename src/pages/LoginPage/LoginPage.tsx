import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {

    const history = useHistory();

    const [pwd, setPwd] = useState('');

    const onChangePwd = (e:ChangeEvent<HTMLInputElement>) => {
        setPwd(e.target.value);
    }

    const onSubmitLogin = (e:React.FormEvent) => {
        e.preventDefault();
        history.push('/main');
    }

    return (
        <div className="login">
            <img src="https://placeimg.com/120/120/animals" alt="profile"/>
            <p>김동제</p>
            <form onSubmit={onSubmitLogin}>
                <input onChange={onChangePwd} type="password"/>
                {pwd ? <button>➔</button> : null}
            </form>
        </div>
    )
}

export default LoginPage
