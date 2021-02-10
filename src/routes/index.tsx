import React from 'react';
import { useUserSaved } from '../context/Auth'
import RouterTab from './main'
import Auth from './auth'
const Main: React.FC = () => {

    const { userSaved } = useUserSaved();
    if(userSaved === null){
        return null;
    }

    if (userSaved) {
        return <RouterTab />;
    }
    return <Auth />;
}
export default Main;