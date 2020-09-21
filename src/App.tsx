import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import BottomMenu from './components/BottomMenu';
import Browser from './components/Browser';
import BootingPage from './components/BootingPage';
import LoginPage from './components/LoginPage';

const App = () => {

    const [isBoot, setIsBoot] = useState(false);

    const bootComplete = () => {
        setIsBoot(true);
    }

    useEffect(()=>{
        setTimeout(bootComplete,5000)
    },[])

    return (
        <div>
            {isBoot 
                ?
                // <> 
                // <Navigation/>
                // <Browser/>
                // <BottomMenu/>
                // </>
                <LoginPage/>
                :
                <BootingPage />
            }
        </div>
    )
}

export default App;