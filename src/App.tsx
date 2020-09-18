import React from 'react';
import Navigation from './components/Navigation';
import BottomMenu from './components/BottomMenu';
import Browser from './components/Browser';

const App = () => {

    return(
        <div>
            <Navigation/>
            <Browser/>
            <BottomMenu/>
        </div>
    )
}

export default App;