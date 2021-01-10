import React from 'react';
import Main from './routes'
import ProviderAuth from './context/Auth'
const App: React.FC = () => {
    return (
        <>
            <ProviderAuth>
                <Main />
            </ProviderAuth>
        </>
    )
}
export default App;