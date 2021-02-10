import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast'
import { Credentials, UserData } from '../../types'
import api from '../../service/api';

type ContextType = {
    userData: UserData;
    setUserData: (value: UserData) => void;
    userSaved: boolean | null;
    setUserSaved: (value: boolean) => void;

};

const ContextApp = createContext<ContextType>({
    userData: {} as UserData,
    setUserData: (Value: UserData) => { },
    userSaved: false,
    setUserSaved: (value: boolean | null) => { }
});

const ProviderAuth: React.FC = ({ children }) => {
    const [userSaved, setUserSaved] = useState<boolean | null>(null);
    const [userData, setUserData] = useState<UserData>({} as UserData)


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@credentials');
            if (value !== null) {
                return loginApp(JSON.parse(value))
            }
            setUserSaved(false)
        } catch (e) {
            console.log(e)
            setUserSaved(false)
        }
    }
    useEffect(() => {
        getData();
    }, []);

    const loginApp = async (credentials: Credentials) => {
        api.post('/api/companies/auth', credentials).then(res => {
            if (res.data.message === 'error') {
                setUserSaved(false)
                return Toast.showWithGravity(`${res.data.value}`, Toast.LONG, Toast.TOP)
            }
            setUserData(res.data.value);
            setUserSaved(true);
        }).catch(err => {
            setUserSaved(false)
            return Toast.showWithGravity(`${err}`, Toast.LONG, Toast.TOP)
        })

    }

    return (
        <ContextApp.Provider value={{
            userData, setUserData,
            userSaved, setUserSaved
        }}>
            {children}
        </ContextApp.Provider>
    );
}
export default ProviderAuth;

export function useUserData() {
    const infoUser: ContextType = useContext(ContextApp);
    const { userData, setUserData } = infoUser;
    return { userData, setUserData };
}

export function useUserSaved() {
    const infoUser: ContextType = useContext(ContextApp);
    const { userSaved, setUserSaved } = infoUser;
    return { userSaved, setUserSaved };
}