import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BootingPage from './pages/BootingPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage'

const App = () => {


    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={BootingPage} exact/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/main" component={MainPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;